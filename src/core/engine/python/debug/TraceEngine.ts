export const TRACE_ENGINE_PY = `
import sys
import json
import inspect
import types

class TraceEngine:
    def __init__(self):
        self.frames = []
        self.MAX_FRAMES = 1000
        self.heap = {}
        self.heap_counter = 0
        
    def serialize_val(self, val, depth=0):
        """Serializes a value. Handles primitives and shallow containers."""
        if depth > 2:
            return ["ref", str(type(val).__name__)]

        t = type(val)
        
        if val is None:
            return ["None"]
        elif t in (int, float):
            return [str(t.__name__), val]
        elif t is bool:
            return ["bool", val]
        elif t is str:
            return ["str", val]
        elif t is list:
            return ["list", [self.serialize_val(item, depth + 1) for item in val]]
        elif t is tuple:
            return ["tuple", [self.serialize_val(item, depth + 1) for item in val]]
        elif t is dict:
            return ["dict", {str(k): self.serialize_val(v, depth + 1) for k, v in val.items()}]
        elif t is set:
            return ["set", [self.serialize_val(item, depth + 1) for item in val]]
        else:
            # Custom objects or others
            return ["ref", str(val)]

    def trace_call(self, frame, event, arg):
        if event != 'line':
            return self.trace_call
            
        if len(self.frames) >= self.MAX_FRAMES:
            return None
            
        # Get locals
        local_vars = {}
        for k, v in frame.f_locals.items():
            if not k.startswith('__'):
                local_vars[k] = self.serialize_val(v)
                
        self.frames.append({
            "line": frame.f_lineno,
            "event": event,
            "func": frame.f_code.co_name,
            "locals": local_vars
        })
        
        return self.trace_call

    def run(self, code):
        self.frames = []
        try:
            # Compile first to detect syntax errors cleanly
            compiled = compile(code, "<string>", "exec")
            sys.settrace(self.trace_call)
            exec(compiled, {})
        except Exception as e:
            # Add error frame
            self.frames.append({
                "event": "exception",
                "error": str(e)
            })
        finally:
            sys.settrace(None)
            
        return self.frames

# Driver
def trace_execution(code_str):
    tracer = TraceEngine()
    return tracer.run(code_str)
`;
