const fs = require('fs');
const path = require('path');

console.log("Script running...");

const replacements = [
    { pattern: "`name`", replacement: "`name`" },
    { pattern: "`Name`", replacement: "`Name`" },
    { pattern: "`NAME`", replacement: "`NAME`" },
    { pattern: "`or`", replacement: "`or`" },
    { pattern: "`and`", replacement: "`and`" },
    { pattern: "`not`", replacement: "`not`" },
    { pattern: "`append`", replacement: "`append`" },
    { pattern: "`sort`", replacement: "`sort`" },
    { pattern: "`sorted`", replacement: "`sorted`" },
    { pattern: "`key`", replacement: "`key`" },
    { pattern: "`lambda`", replacement: "`lambda`" },
    { pattern: "`count`", replacement: "`count`" },
    { pattern: "`replace`", replacement: "`replace`" },
    { pattern: "`write`", replacement: "`write`" },
    { pattern: "`try`", replacement: "`try`" },
    { pattern: "`except`", replacement: "`except`" },
    { pattern: "`random`", replacement: "`random`" },
    { pattern: "`csv`", replacement: "`csv`" },
    { pattern: "`__str__`", replacement: "`__str__`" },
    { pattern: "`__add__`", replacement: "`__add__`" },
    { pattern: "`__sub__`", replacement: "`__sub__`" },
    { pattern: "`__lt__`", replacement: "`__lt__`" },
    { pattern: "`Person`", replacement: "`Person`" },
    { pattern: "`Course`", replacement: "`Course`" },
    { pattern: "`if`", replacement: "`if`" },
    { pattern: "`pygame.time.get_ticks()`", replacement: "`pygame.time.get_ticks()`" },
    { pattern: "`2 + 4 + 3`", replacement: "`2 + 4 + 3`" },
    { pattern: "`\"abc\" + \"de\"`", replacement: "`\"abc\" + \"de\"`" },
    { pattern: "`11 / 2`", replacement: "`11 / 2`" },
    { pattern: "`while True`", replacement: "`while True`" },
    { pattern: "`break`", replacement: "`break`" },
    { pattern: "`for`", replacement: "`for`" },
    { pattern: "`[]`", replacement: "`[]`" },
    { pattern: "`range`", replacement: "`range`" },
    { pattern: "`input`", replacement: "`input`" },
    { pattern: "`variable_name = ...`", replacement: "`variable_name = ...`" },
    { pattern: "`...`", replacement: "`...`" },
    { pattern: "`print`", replacement: "`print`" },
    { pattern: "`sep`", replacement: "`sep`" },
    { pattern: "`end`", replacement: "`end`" },
    { pattern: "`+"`, replacement: "`+`" },
    { pattern: "`*`", replacement: "`*`" },
    { pattern: "`-`", replacement: "`-`" },
    { pattern: "`/`", replacement: "`/`" },
    { pattern: "`%`", replacement: "`%`" },
    { pattern: "`**`", replacement: "`**`" },
    { pattern: "`==`", replacement: "`==`" },
    { pattern: "`!=`", replacement: "`!=`" },
    { pattern: "`>`", replacement: "`>`" },
    { pattern: "`>=`", replacement: "`>=`" },
    { pattern: "`<`", replacement: "`<`" },
    { pattern: "`<=`", replacement: "`<=`" },
    { pattern: "`map`", replacement: "`map`" },
    { pattern: "`filter`", replacement: "`filter`" },
    { pattern: "`reduce`", replacement: "`reduce`" },
    { pattern: "`list_years(dates)`", replacement: "`list_years(dates)`" },
    { pattern: "`lista_anos(fechas)`", replacement: "`lista_anos(fechas)`" },
    { pattern: "`urteak_zerrendatu(datak)`", replacement: "`urteak_zerrendatu(datak)`" },
    { pattern: "`lottery_numbers(amount, lower, upper)`", replacement: "`lottery_numbers(amount, lower, upper)`" },
    { pattern: "`print_persons(filename)`", replacement: "`print_persons(filename)`" },
    { pattern: "`eat_cheap()`, `eat_special()`, `deposit_money(amount)`", replacement: "`eat_cheap()`, `eat_special()`, `deposit_money(amount)`" },
    { pattern: "`rate`", replacement: "`rate`" },
    { pattern: "`minimum_grade`, `includes_genre`", replacement: "`minimum_grade`, `includes_genre`" },
    { pattern: "`__`.", replacement: "`__`.`" }
];

function processDir(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            processDir(fullPath);
        } else if (item.name.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const { pattern, replacement } of replacements) {
                // Escape regex special chars in pattern
                const escapedPattern = pattern.replace(/[.*+?^${}()|[\\\]/g, '\\$&');
                
                try {
                    // Match pattern only if NOT preceded by \
                    // Double escaping for string literal for RegExp constructor
                    // (?<!\\) means not preceded by literal backslash
                    const regex = new RegExp("(?<!\\\\")" + escapedPattern, 'g');
                    content = content.replace(regex, replacement);
                } catch (e) {
                    console.error(`Regex error for pattern ${pattern}:`, e);
                }
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir('src/data');