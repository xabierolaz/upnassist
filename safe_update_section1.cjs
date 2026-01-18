const fs = require('fs');
const path = 'src/data/part1/section1.json';

const content = fs.readFileSync(path, 'utf8');
const data = JSON.parse(content);

// Update Emoticon exercise test code
const emoticon = data.blocks.find(b => b.exerciseId === 'part01-01_emoticon');
if (emoticon) {
    emoticon.testCode = `
import unittest
class TestEmoticon(unittest.TestCase):
    def test_output(self):
        output = run_student_code()
        self.assertEqual(output.strip(), ":-)")
`;
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log("Updated section1.json safely.");
