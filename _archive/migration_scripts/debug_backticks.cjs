const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/part1/section3.ts');
if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    ['ENG'].forEach(key => {
        const startMarker = key + ': ' + String.fromCharCode(96);
        let startIndex = 0;
        
        while (true) {
            const idx = content.indexOf(startMarker, startIndex);
            if (idx === -1) break;
            
            const contentStart = idx + startMarker.length;
            const rest = content.slice(contentStart);
            const pattern = "`\s*(?:,|}|]|" + String.fromCharCode(10) + "\s*(?:ENG|CAS|EUS|blocks|questions|type|exerciseId))";
            const endRegex = new RegExp(pattern, "g");
            
            const match = endRegex.exec(rest);
            if (match) {
                const endIdx = contentStart + match.index;
                const blockContent = content.substring(contentStart, endIdx);
                
                // Debug context around "variables `name"
                // The text is: "The variables `name`, `Name` and `NAME`"
                // Search for "The variables"
                const searchStr = "The variables";
                const nameIdx = blockContent.indexOf(searchStr);
                if (nameIdx !== -1) {
                    console.log(`Found "${searchStr}" in block.`);
                    const ctx = blockContent.substring(Math.max(0, nameIdx), Math.min(blockContent.length, nameIdx + 100));
                    console.log(`Context: [${ctx}]`);
                    
                    // Check chars around Name
                    const sub = ctx;
                    for (let i = 0; i < sub.length; i++) {
                       // console.log(`${sub[i]} : ${sub.charCodeAt(i)}`);
                    }
                }
                
                startIndex = endIdx + match[0].length;
            } else {
                break;
            }
        }
    });
}