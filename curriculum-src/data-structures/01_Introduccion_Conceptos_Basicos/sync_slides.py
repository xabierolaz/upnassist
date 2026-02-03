import re
import json
import os

TEX_FILE = "introduccion.tex"
HTML_FILE = "presentacion.html"
NOTES_FILE = "speaker_notes.json"

def get_header():
    return """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Introducción y Conceptos Básicos de Python</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/white.css" id="theme">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">
<style>
    :root { --r-main-font: 'Lato', sans-serif; --r-link-color: #004291; }
    .reveal h1, .reveal h2, .reveal h3, .reveal h4 { color: #000; text-transform: none; }
    body { border-top: 5px solid #333; }
    .reveal pre { background: #f0f0f0; border: 1px solid #ccc; margin-bottom: 5px !important; }
    .reveal pre code { padding: 15px; background: white; color: #333; }
    .terminal-box { background: #222; color: #0f0; font-family: monospace; padding: 5px 10px; border-radius: 0px; margin-bottom: 10px; font-size: 0.8em; border-left: 5px solid #666; white-space: pre-wrap; }
</style>
</head>
<body>
<div class="reveal">
<div class="slides">
"""

def get_footer():
    return """
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/notes/notes.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
<script>
    Reveal.initialize({ 
        hash: true, 
        slideNumber: true, 
        plugins: [ RevealHighlight, RevealNotes ], 
        transition: 'slide',
        totalTime: 7200, // 2 horas en segundos
        defaultTiming: 120 // 2 minutos por defecto por diapo
    });
</script>
</body>
</html>
"""

def parse_tex(content):
    slides = []
    frames = re.split(r'\\begin{frame}', content)
    slides.append({"type": "title", "title": "Introducción y Conceptos Básicos de Python", "content": '<h2>Introducción y Conceptos Básicos <br>de Python</h2><div style="margin-top: 40px;"><img src="img/UPNA.png" alt="UPNA Logo" style="width: 3cm; border:none; box-shadow:none;"></div><p style="margin-top: 20px;">2024-2025</p>'})
    slides.append({"type": "toc", "title": "Índice", "content": '<h3>Índice</h3><ol><li>IDEs</li><li>Python Pro</li><li>Clases</li></ol>'})

    for frame_raw in frames[1:]:
        title_match = re.search(r'\\frametitle{(.*?)}', frame_raw)
        title = title_match.group(1).replace(r'\_', '_') if title_match else "Sin Título"
        body = frame_raw.split(r'\\end{frame}')[0]
        html_body = f"<h3>{title}</h3>"
        
        # New interleaved parser
        matches = re.findall(r'\\begin{lstlisting}.*?\\end{lstlisting}|\\terminal{.*?}', body, re.DOTALL)
        if matches:
            for m in matches:
                if 'lstlisting' in m:
                    code = re.sub(r'\\begin{lstlisting}(\[.*?\])?', '', m).replace(r'\\end{lstlisting}', '').strip()
                    html_body += f'<pre><code class="python" data-line-numbers>{code}</code></pre>'
                else:
                    out = m.replace('\\terminal{', '').rstrip('}').replace('\\\\', '\n').strip()
                    html_body += f'<div class="terminal-box">{out}</div>'
        elif r'\\begin{itemize}' in body:
            html_body += "<ul>"
            items = re.findall(r'\\item\s*(.*)', body)
            for it in items:
                clean = re.sub(r'\\href{.*?}{(.*?)}', r'\1', it)
                html_body += f"<li>{clean}</li>"
            html_body += "</ul>"
            
        slides.append({"title": title, "content": html_body})
    return slides

def main():
    with open(TEX_FILE, 'r', encoding='utf-8') as f: tex = f.read()
    with open(NOTES_FILE, 'r', encoding='utf-8') as f: notes = json.load(f)
    slides = parse_tex(tex)
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(get_header())
        for s in slides:
            f.write(f"<section><section>{s['content']}\n")
            note = notes.get(s['title'], {"time": "-", "script": ["Sin notas"]})
            f.write(f'<aside class="notes"><h3>⏱️ {note["time"]}</h3><ul>')
            for li in note['script']: f.write(f'<li>{li}</li>')
            f.write('</ul></aside></section></section>\n')
        f.write(get_footer())
    print("Sincronizado.")

if __name__ == "__main__": main()
