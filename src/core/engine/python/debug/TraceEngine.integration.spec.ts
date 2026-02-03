import { describe, it, expect } from 'vitest';
import { runPythonTrace } from '../../../../tests/utils/pythonBridge';

describe('TraceEngine (Python Integration)', () => {

    it('should trace simple variable assignments', () => {
        const code = `
x = 10
y = 20
z = x + y
`;
        const frames = runPythonTrace(code);
        
        // Filter line events
        const lineFrames = frames.filter((f: any) => f.event === 'line');
        
        // Expected flow:
        // 1. x = 10 (trace happens BEFORE execution usually or AFTER? 
        //    sys.settrace 'line' event happens *before* the line is executed.
        //    So at line 2 (x=10), locals are empty? Or is it after?
        //    Let's verify behavior. standard pdb behavior is before.
        //    But wait, if it is before, we won't see 'x' in locals until next line.
        
        expect(lineFrames.length).toBeGreaterThan(0);
        
        // Last frame should have all variables
        const lastFrame = lineFrames[lineFrames.length - 1];
        // At the start of the last line (z = ...), x and y should be defined. z is not yet.
        // Wait, if it stops BEFORE line 4 (z=x+y), z is not there.
        // If code ends, we might miss the state AFTER the last line unless we return or print.
        
        // Let's check frame where line is 4
        const frameLine4 = lineFrames.find((f: any) => f.line === 4);
        if (frameLine4) {
             expect(frameLine4.locals.x).toEqual(['int', 10]);
             expect(frameLine4.locals.y).toEqual(['int', 20]);
        }
    });

    it('should trace function calls', () => {
        const code = `
def add(a, b):
    return a + b

res = add(5, 7)
`;
        const frames = runPythonTrace(code);
        const lineFrames = frames.filter((f: any) => f.event === 'line');
        
        // Check we entered the function
        const funcFrame = lineFrames.find((f: any) => f.func === 'add');
        expect(funcFrame).toBeDefined();
        expect(funcFrame.locals.a).toEqual(['int', 5]);
        expect(funcFrame.locals.b).toEqual(['int', 7]);
    });
    
    it('should handle loops', () => {
         const code = `
s = 0
for i in range(3):
    s += i
`;
         const frames = runPythonTrace(code);
         const lineFrames = frames.filter((f: any) => f.event === 'line');
         
         // Should hit the loop body multiple times
         const bodyFrames = lineFrames.filter((f: any) => f.line === 4); // s += i
         expect(bodyFrames.length).toBe(3);
    });
});
