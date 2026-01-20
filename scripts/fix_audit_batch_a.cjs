const fs = require('fs');
const path = require('path');

function fixFile(relativePath, patches) {
    const filePath = path.resolve(__dirname, '../src/data', relativePath);
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ Skip ${relativePath} (not found)`);
        return;
    }
    let json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    for (const [index, content] of Object.entries(patches)) {
        const idx = parseInt(index);
        if (!json.blocks[idx]) {
            console.log(`⚠️ Skip block ${idx} in ${relativePath} (not found)`);
            continue;
        }
        const block = json.blocks[idx];
        if (content.cas_title) {
            block.title = block.title || {};
            block.title.CAS = content.cas_title;
        }
        if (content.eus_title) {
            block.title = block.title || {};
            block.title.EUS = content.eus_title;
        }
        if (content.cas_desc) {
            block.description = block.description || {};
            block.description.CAS = content.cas_desc.replace(/__BT__/g, '`');
        }
        if (content.eus_desc) {
            block.description = block.description || {};
            block.description.EUS = content.eus_desc.replace(/__BT__/g, '`');
        }
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
    console.log(`✅ Fixed ${relativePath}`);
}

// Part 1 Section 5
fixFile('part1/section5.json', {
    "1": { cas_title: "Orwell", eus_title: "Orwell" }
});

// Part 2 Section 1
fixFile('part2/section1.json', {
    "1": {
        cas_desc: "El siguiente programa contiene varios errores sintácticos. Por favor arréglalo para que la sintaxis esté en orden y el programa funcione como se especifica en los ejemplos a continuación.",
        eus_desc: "Hurrengo programak hainbat errore sintaktiko ditu. Mesedez konpondu sintaxia ondo egon dadin eta programak beheko adibideetan zehaztutako moduan funtziona dezan."
    },
    "2": {
        cas_desc: "Por favor escribe un programa que imprima el número de caracteres en una palabra dada por el usuario. Si la palabra tiene más de un carácter, el programa también debe imprimir \"¡Gracias!\".",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileak emandako hitz bateko karaktere kopurua inprimatzen duena. Hitzak karaktere bat baino gehiago badu, programak \"Eskerrik asko!\" ere inprimatu behar du."
    }
});

// Part 2 Section 3
fixFile('part2/section3.json', {
    "4": { cas_title: "FizzBuzz", eus_title: "FizzBuzz" },
    "8": {
        cas_desc: "Alguna familiar tuya, rica y lejana, te ha enviado una gran suma de dinero como regalo. Sin embargo, tienes que pagar el impuesto sobre donaciones por ello. Cuanto mayor sea el regalo, mayor será el impuesto. Los impuestos se calculan según la siguiente tabla:\n\n| Valor del regalo | Impuesto en el límite inferior | Tasa impositiva para la parte excedente |\n| :--- | :--- | :--- |\n| 5 000-25 000 | 100 | 8% |\n| 25 000-55 000 | 1 700 | 10% |\n| 55 000-200 000 | 4 700 | 12% |\n| 200 000-1 000 000 | 22 100 | 15% |\n| 1 000 000- | 142 100 | 17% |\n\nPor favor escribe un programa que calcule el impuesto sobre donaciones por un regalo dado por el usuario. Si el regalo es menor de 5000, no hay impuesto.",
        eus_desc: "Zure senide aberats eta urruneko batek diru kopuru handi bat bidali dizu opari gisa. Hala ere, oparien gaineko zerga ordaindu behar duzu horregatik. Oparia zenbat eta handiagoa izan, orduan eta handiagoa izango da zerga. Zergak honako taula honen arabera kalkulatzen dira:\n\n| Opariaren balioa | Zerga beheko mugan | Zerga tasa soberako zatiarako |\n| :--- | :--- | :--- |\n| 5 000-25 000 | 100 | 8% |\n| 25 000-55 000 | 1 700 | 10% |\n| 55 000-200 000 | 4 700 | 12% |\n| 200 000-1 000 000 | 22 100 | 15% |\n| 1 000 000- | 142 100 | 17% |\n\nMesedez idatzi programa bat erabiltzaileak emandako opari baten oparien gaineko zerga kalkulatzen duena. Oparia 5000 baino txikiagoa bada, ez dago zergarik."
    }
});

// Part 3 Section 1
fixFile('part3/section1.json', {
    "7": {
        cas_desc: "Por favor cambia el programa a continuación para que pida al usuario la base __BT__n__BT__. El programa debería imprimir los valores de las potencias __BT__n__BT__ hasta que el valor sea mayor que 10000.",
        eus_desc: "Mesedez aldatu beheko programa erabiltzaileari __BT__n__BT__ oinarria eskatzeko. Programak __BT__n__BT__ potentzien balioak inprimatu beharko lituzke balioa 10000 baino handiagoa izan arte."
    },
    "8": {
        cas_desc: "Por favor escribe un programa que pida al usuario escribir un número límite. El programa debería calcular la suma de los números consecutivos (1 + 2 + 3 + ...) hasta que la suma sea al menos igual al número límite. El programa debería imprimir el resultado de la siguiente manera:",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari muga-zenbaki bat idazteko eskatzen diona. Programak ondoz ondoko zenbakien batura kalkulatu beharko luke (1 + 2 + 3 + ...) batura muga-zenbakiaren berdina edo handiagoa izan arte. Programak emaitza honela inprimatu beharko luke:"
    },
    "10": {
        cas_desc: "Por favor crea una nueva versión del programa anterior. Esta vez el programa también debería imprimir el cálculo realizado:",
        eus_desc: "Mesedez sortu aurreko programaren bertsio berri bat. Oraingoan programak egindako kalkulua ere inprimatu beharko luke:"
    }
});

// Part 3 Section 2
fixFile('part3/section2.json', {
    "7": {
        cas_desc: "Por favor escribe una función llamada __BT__hash_square(length)__BT__, que tome un entero como argumento. La función debe imprimir una línea de caracteres almohadilla (#) tan larga como el valor del parámetro.",
        eus_desc: "Mesedez idatzi __BT__hash_square(length)__BT__ izeneko funtzio bat, osoko zenbaki bat argumentu gisa hartzen duena. Funtzioak parametroaren balioa bezain luzea den almohadilla (#) karaktereen lerro bat inprimatu behar du."
    },
    "8": {
        cas_desc: "Por favor modifica la función anterior para que tome dos argumentos: el ancho y la altura del rectángulo. La función debería imprimir un rectángulo de caracteres almohadilla (#) con las dimensiones dadas.",
        eus_desc: "Mesedez aldatu aurreko funtzioa bi argumentu har ditzan: laukizuzenaren zabalera eta altuera. Funtzioak emandako dimentsioetako almohadilla (#) karaktereen laukizuzen bat inprimatu beharko luke."
    },
    "9": {
        cas_desc: "Por favor escribe una función llamada __BT__underline(string)__BT__, que tome una cadena como argumento. La función debería imprimir la cadena en una línea separada y subrayarla con una línea de guiones (-). La línea de guiones debe tener la misma longitud que la cadena.",
        eus_desc: "Mesedez idatzi __BT__underline(string)__BT__ izeneko funtzio bat, kate bat argumentu gisa hartzen duena. Funtzioak katea lerro bereizi batean inprimatu beharko luke eta marra (-) lerro batekin azpimarratu. Marra lerroak katearen luzera bera izan behar du."
    },
    "10": {
        cas_desc: "Por favor escribe un programa que pida al usuario una cadena y luego la imprima de tal manera que los caracteres imprimibles estén alineados a la derecha dentro de un campo de 20 caracteres. Se añaden asteriscos al principio de la cadena para lograr esto.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari kate bat eskatzen diona eta gero inprimatzen duena karaktere inprimagarriak eskuinera lerrokatuta egon daitezen 20 karaktereko eremu baten barruan. Asteriskoak gehitzen dira katearen hasieran hau lortzeko."
    },
    "11": {
        cas_desc: "Por favor escribe una función llamada __BT__framed_word(word)__BT__, que imprima la palabra dada dentro de un marco de asteriscos. El marco debe tener un ancho de 30 caracteres. La palabra debe estar centrada dentro del marco.",
        eus_desc: "Mesedez idatzi __BT__framed_word(word)__BT__ izeneko funtzio bat, emandako hitza asteriskozko marko baten barruan inprimatzen duena. Markoak 30 karaktereko zabalera izan behar du. Hitza markoaren barruan zentratuta egon behar da."
    },
    "13": {
        cas_desc: "Por favor escribe un programa que pida al usuario una cadena y luego imprima todas las subcadenas que comienzan con el primer carácter de la cadena original. La longitud mínima de las subcadenas debe ser 1.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari kate bat eskatzen diona eta gero jatorrizko katearen lehenengo karakteretik hasten diren azpikate guztiak inprimatzen dituena. Azpikateen gutxieneko luzera 1 izan behar da."
    },
    "14": {
        cas_desc: "Por favor escribe un programa que pida al usuario una cadena y luego imprima todas las subcadenas que terminan con el último carácter de la cadena original.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari kate bat eskatzen diona eta gero jatorrizko katearen azken karakterearekin amaitzen diren azpikate guztiak inprimatzen dituena."
    },
    "16": {
        cas_desc: "Por favor escribe una función llamada __BT__does_it_contain_vowels(string)__BT__, que tome una cadena como argumento. La función debe devolver __BT__True__BT__ si la cadena contiene alguna vocal, y __BT__False__BT__ en caso contrario. Para este ejercicio, las vocales son a, e, i, o, u.",
        eus_desc: "Mesedez idatzi __BT__does_it_contain_vowels(string)__BT__ izeneko funtzio bat, kate bat argumentu gisa hartzen duena. Funtzioak __BT__True__BT__ itzuli behar du kateak bokalik badu, eta __BT__False__BT__ bestela. Ariketa honetarako, bokalak a, e, i, o, u dira."
    },
    "18": {
        cas_desc: "Por favor escribe un programa que pida al usuario una cadena y un carácter. El programa debe imprimir la primera subcadena de tres caracteres que comience con el carácter dado.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari kate bat eta karaktere bat eskatzen diona. Programak emandako karakterearekin hasten den hiru karaktereko lehen azpikatea inprimatu behar du."
    },
    "19": {
        cas_desc: "Por favor modifica el programa anterior para que imprima todas las subcadenas de tres caracteres que comiencen con el carácter dado. El programa debe detenerse cuando no haya más subcadenas de la longitud requerida.",
        eus_desc: "Mesedez aldatu aurreko programa emandako karakterearekin hasten diren hiru karaktereko azpikate guztiak inprimatzeko. Programak gelditu egin behar du eskatutako luzerako azpikaterik gehiago ez dagoenean."
    },
    "20": {
        cas_desc: "Por favor escribe un programa que encuentre la segunda ocurrencia de una subcadena. Si la subcadena no aparece dos veces, imprime un mensaje apropiado.",
        eus_desc: "Mesedez idatzi programa bat azpikate baten bigarren agerraldia aurkitzen duena. Azpikatea bi aldiz agertzen ez bada, inprimatu mezu egokia."
    }
});

// Part 3 Section 3
fixFile('part3/section3.json', {
    "3": { cas_title: "Factorial", eus_title: "Faktoriala" }
});

// Part 3 Section 4
fixFile('part3/section4.json', {
    "7": {
        cas_desc: "Por favor escribe una función llamada __BT__hash_square(length)__BT__, que tome un entero como argumento. La función debe imprimir un cuadrado de caracteres almohadilla (#) con la longitud lateral dada.",
        eus_desc: "Mesedez idatzi __BT__hash_square(length)__BT__ izeneko funtzio bat, osoko zenbaki bat argumentu gisa hartzen duena. Funtzioak emandako alboko luzera duen almohadilla (#) karaktereen karratu bat inprimatu behar du."
    },
    "8": {
        cas_desc: "Por favor escribe una función llamada __BT__chessboard(length)__BT__, que tome un entero como argumento. La función debe imprimir un tablero de ajedrez hecho de unos y ceros, con la longitud lateral dada.",
        eus_desc: "Mesedez idatzi __BT__chessboard(length)__BT__ izeneko funtzio bat, osoko zenbaki bat argumentu gisa hartzen duena. Funtzioak bateko eta zeroko xake taula bat inprimatu behar du, emandako alboko luzerarekin."
    },
    "9": {
        cas_desc: "Por favor escribe una función llamada __BT__squared(string, size)__BT__, que tome una cadena y un entero como argumentos. La función debe imprimir un cuadrado de caracteres de tamaño __BT__size__BT__ por __BT__size__BT__, usando los caracteres de la cadena. Si la cadena no es lo suficientemente larga, debe repetirse.",
        eus_desc: "Mesedez idatzi __BT__squared(string, size)__BT__ izeneko funtzio bat, kate bat eta osoko zenbaki bat argumentu gisa hartzen dituena. Funtzioak __BT__size__BT__ bider __BT__size__BT__ tamainako karaktere karratu bat inprimatu behar du, kateko karaktereak erabiliz. Katea ez bada nahiko luzea, errepikatu egin behar da."
    }
});

// Part 4 Section 2
fixFile('part4/section2.json', {
    "10": {
        cas_desc: "Por favor escribe una función llamada __BT__greatest_number__BT__, que tome tres argumentos enteros. La función debe devolver el mayor de los tres números.",
        eus_desc: "Mesedez idatzi __BT__greatest_number__BT__ izeneko funtzio bat, hiru argumentu oso hartzen dituena. Funtzioak hiru zenbakietatik handiena itzuli behar du."
    },
    "11": {
        cas_desc: "Por favor escribe una función llamada __BT__same_chars__BT__, que tome una cadena y dos enteros como argumentos. La función debe devolver __BT__True__BT__ si los caracteres en las posiciones dadas por los dos enteros son los mismos. En caso contrario, debe devolver __BT__False__BT__.",
        eus_desc: "Mesedez idatzi __BT__same_chars__BT__ izeneko funtzio bat, kate bat eta bi osoko zenbaki argumentu gisa hartzen dituena. Funtzioak __BT__True__BT__ itzuli behar du bi osoko zenbakiek emandako posizioetako karaktereak berdinak badira. Bestela, __BT__False__BT__ itzuli behar du."
    },
    "12": {
        cas_desc: "Por favor escribe tres funciones: __BT__first_word__BT__, __BT__second_word__BT__ y __BT__last_word__BT__. Cada función toma una cadena como argumento. Como sus nombres implican, las funciones deberían devolver la primera, segunda y última palabra de la frase dada.",
        eus_desc: "Mesedez idatzi hiru funtzio: __BT__first_word__BT__, __BT__second_word__BT__ eta __BT__last_word__BT__. Funtzio bakoitzak kate bat hartzen du argumentu gisa. Izenek iradokitzen duten bezala, funtzioek emandako esaldiko lehenengo, bigarren eta azken hitza itzuli beharko lukete."
    }
});

// Part 4 Section 3
fixFile('part4/section3.json', {
    "7": {
        cas_desc: "Por favor escribe un programa que pida palabras al usuario. Si el usuario escribe la misma palabra dos veces, el programa debe terminar.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari hitzak eskatzen dizkiona. Erabiltzaileak hitz bera bi aldiz idazten badu, programak amaitu egin behar du."
    },
    "9": {
        cas_desc: "Por favor escribe un programa que pida palabras al usuario y las añada a una lista. El programa debe detenerse cuando el usuario introduzca un cero. Finalmente, el programa debe imprimir la lista dos veces.",
        eus_desc: "Mesedez idatzi programa bat erabiltzaileari hitzak eskatzen dizkiona eta zerrenda batera gehitzen dituena. Programak gelditu egin behar du erabiltzaileak zero bat sartzen duenean. Azkenik, programak zerrenda bi aldiz inprimatu behar du."
    },
    "13": {
        cas_desc: "Por favor escribe una función llamada __BT__range_of_list__BT__, que tome una lista de enteros como argumento. La función debe devolver la diferencia entre el valor más pequeño y el más grande en la lista (es decir, el rango).",
        eus_desc: "Mesedez idatzi __BT__range_of_list__BT__ izeneko funtzio bat, osoko zenbakien zerrenda bat argumentu gisa hartzen duena. Funtzioak zerrendako balio txikienaren eta handienaren arteko aldea itzuli behar du (hau da, barrutia)."
    }
});

console.log("🏁 Batch A fixes applied.");
