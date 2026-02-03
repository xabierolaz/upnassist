# Scalability Plan - UpnAssist 2026

This document outlines architectural decisions and future improvements to ensure the platform scales effectively while maintaining high pedagogical value and performance.

## 1. Content Scalability (Multi-Subject Support)
*Currently, the platform is hardcoded for Python courses.*

### Goal
Enable the platform to host multiple subjects (e.g., Data Structures, Java, Web Dev) without code duplication.

### Strategy
1.  **Refactor Routing:** Move from `/course/mooc` to `/course/:subjectId/:partId`.
2.  **Abstract Data Loader:** Create a `CourseLoader` interface that can fetch content from different JSON sources based on the `subjectId`.
3.  **Modularize Engines:** Decouple `AnalysisEngine.ts` and `TestRunner.ts` from Python-specific logic. Create an `ExecutionEngine` strategy pattern where `PythonEngine`, `JavaEngine` (via Doppio/CheerpJ), etc., can be plugged in.

---

## 2. Advanced Feedback & Code Quality (Linting)

### Current State
We use a custom, lightweight AST-based linter (`ExpertLinter` inside `AnalysisEngine.ts`). It is instant (<10ms) and pedagogical but lacks the depth of professional tools.

### Proposed Improvement: "Professional Audit" Mode
Integrate **Pylint** as an optional, on-demand feature for advanced students.

#### Why not replace ExpertLinter?
*   **Latency:** Pylint takes 2-5 seconds to run in Wasm, which destroys the "instant feedback" loop required for beginners.
*   **Payload:** Adds ~5-8MB to the initial download.
*   **Noise:** Default rules are too strict for CS101 (e.g., requiring docstrings everywhere).

#### Implementation Strategy
1.  **On-Demand Loading:** Do not load Pylint on startup. Add a "Deep Scan" or "Professional Audit" button in the UI.
2.  **Dynamic Import:** When clicked, use `micropip` in Pyodide to download `pylint`, `astroid`, and dependencies.
3.  **Execution:** Run Pylint on the in-memory file system.
4.  **Config:** Use a custom `.pylintrc` injected at runtime to silence non-pedagogical warnings.
5.  **UI:** Display a separate "Professional Report" modal with cyclomatic complexity, maintainability index, and strict PEP-8 violations.

---

## 3. Database & State Persistence
*Currently using LocalStorage.*

### Goal
Allow students to save progress across devices and enable teacher analytics.

### Strategy
1.  **Cloud Sync:** Implement a sync mechanism (Firebase or Supabase) that pushes the `pyxom-language-storage` state to the cloud on completion.
2.  **Offline First:** Keep LocalStorage as the source of truth for the session to ensure speed, syncing only in the background.

