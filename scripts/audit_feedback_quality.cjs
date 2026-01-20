const fs = require('fs');
const path = require('path');

const srcDataDir = path.join(__dirname, '..', 'src', 'data');

let totalExercises = 0;
let exercisesWithTests = 0;
let exercisesWithCustomFeedback = 0;
let exercisesMissingFeedback = [];

function auditFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    if (data.blocks) {
        data.blocks.forEach(block => {
            if (block.type === 'exercise') {
                totalExercises++;
                const exerciseId = block.exerciseId || `unknown-${totalExercises}`;
                const testCode = block.testCode;

                if (testCode && testCode.trim().length > 0) {
                    exercisesWithTests++;
                    
                    // Regex explanation:
                    // self\.assert\w+  -> matches self.assertTrue, self.assertEqual, etc.
                    // \s*\(            -> matches opening parenthesis
                    // [\s\S]*?         -> matches arguments (non-greedy, including newlines)
                    // ,\s*['"]         -> matches comma followed by quote (start of message)
                    // OR
                    // msg\s*=\s*['"]   -> matches msg="Message"
                    
                    const hasCustomFeedback = /self\.assert\w+\s*\([\s\S]*?,\s*['"]|msg\s*=\s*['"]/.test(testCode);
                    
                    if (hasCustomFeedback) {
                        exercisesWithCustomFeedback++;
                    } else {
                        if (exercisesMissingFeedback.length === 0) {
                            console.log("DEBUG: First failure test code snippet:");
                            console.log(testCode.substring(0, 500));
                            console.log("----------------------------------------");
                        }
                        exercisesMissingFeedback.push({
                            id: exerciseId,
                            title: block.title?.ENG || "Untitled",
                            file: path.relative(srcDataDir, filePath)
                        });
                    }
                } else {
                    exercisesMissingFeedback.push({
                        id: exerciseId,
                        title: block.title?.ENG || "Untitled",
                        file: path.relative(srcDataDir, filePath),
                        reason: "No test code"
                    });
                }
            }
        });
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.json') && file.startsWith('section')) {
            auditFile(fullPath);
        }
    });
}

console.log("🔍 Starting Feedback Quality Audit...");
traverseDir(srcDataDir);

console.log("\n=========================================");
console.log("📊 Audit Summary");
console.log("=========================================");
console.log(`Total Exercises: ${totalExercises}`);
console.log(`Exercises with Tests: ${exercisesWithTests} (${Math.round(exercisesWithTests/totalExercises*100)}%)`);
console.log(`Exercises with Custom Feedback: ${exercisesWithCustomFeedback} (${Math.round(exercisesWithCustomFeedback/exercisesWithTests*100)}%)`);
console.log("=========================================");

if (exercisesMissingFeedback.length > 0) {
    console.log("\n⚠️  Exercises needing better feedback (or missing tests):");
    exercisesMissingFeedback.slice(0, 20).forEach(ex => {
        console.log(`- [${ex.file}] ${ex.title} (${ex.id}) ${ex.reason ? '- ' + ex.reason : ''}`);
    });
    if (exercisesMissingFeedback.length > 20) {
        console.log(`... and ${exercisesMissingFeedback.length - 20} more.`);
    }
} else {
    console.log("\n✅ All exercises have tests with custom feedback hints!");
}
