import { Language } from '../../../stores/languageStore';

interface ErrorMapping {
  pattern: RegExp;
  translations: Record<Language, string>;
}

const errorMappings: ErrorMapping[] = [
  {
    pattern: /SyntaxError: Missing parentheses in call to 'print'\. Did you mean print\(\.\.\.\)\?/, 
    translations: {
      CAS: "Error de Sintaxis: Faltan paréntesis en la llamada a 'print'. En Python 3, debes usar print(\"texto\").",
      EUS: "Sintaxi-errorea: Parentesiak falta dira 'print' deian. Python 3-n, print(\"testua\") erabili behar duzu.",
      ENG: "SyntaxError: Missing parentheses in call to 'print'. Use print(\"text\")."
    }
  },
  {
    pattern: /SyntaxError: invalid syntax/,
    translations: {
      CAS: "Error de Sintaxis: El código no sigue las reglas de Python. Revisa que no falte nada o sobre algún símbolo.",
      EUS: "Sintaxi-errorea: Kodeak ez ditu Python-en arauak betetzen. Egiaztatu ezer ez dela falta edo ikurren bat soberan dagoen.",
      ENG: "SyntaxError: Invalid syntax. Please check your code structure."
    }
  },
  {
    pattern: /NameError: name '(.*)' is not defined/,
    translations: {
      CAS: "Error de Nombre: El nombre '{0}' no existe. ¿Lo has escrito bien o lo has definido antes?",
      EUS: "Izen-errorea: '{0}' izena ez da existitzen. Ondo idatzi duzu edo lehenago definitu duzu?",
      ENG: "NameError: name '{0}' is not defined."
    }
  },
  {
    pattern: /IndentationError: expected an indented block/,
    translations: {
      CAS: "Error de Sangría: Se esperaba un bloque con sangría (espacios). Recuerda usar espacios después de ':' en bucles o condiciones.",
      EUS: "Koska-errorea: Koska duen bloke bat espero zen. Gogoratu ':' ondoren espazioak erabiltzea begizta edo baldintzetan.",
      ENG: "IndentationError: expected an indented block."
    }
  },
  {
    pattern: /IndentationError: unindent does not match any outer indentation level/,
    translations: {
      CAS: "Error de Sangría: La alineación del código no es correcta. Revisa los espacios al principio de la línea.",
      EUS: "Koska-errorea: Kodearen lerrokatzea ez da zuzena. Egiaztatu lerroaren hasierako espazioak.",
      ENG: "IndentationError: indentation alignment is incorrect."
    }
  },
  {
    pattern: /TypeError: (.*) object is not callable/,
    translations: {
      CAS: "Error de Tipo: Estás intentando llamar a algo que no es una función (quizás sobran paréntesis).",
      EUS: "Mota-errorea: Funtzioa ez den zerbaiti deitzen saiatzen ari zara (agian parentesiak soberan daude).",
      ENG: "TypeError: object is not callable."
    }
  },
  {
      pattern: /ZeroDivisionError: division by zero/,
      translations: {
          CAS: "Error de Cálculo: No se puede dividir entre cero.",
          EUS: "Kalkulu-errorea: Ezin da zeroz zatitu.",
          ENG: "ZeroDivisionError: division by zero."
      }
  }
];

export const translatePythonError = (error: string, lang: Language): string => {
  for (const mapping of errorMappings) {
    const match = error.match(mapping.pattern);
    if (match) {
      let translation = mapping.translations[lang] || mapping.translations['ENG'];
      
      // Reemplazar marcadores como {0}, {1} con los grupos capturados
      if (match.length > 1) {
        for (let i = 1; i < match.length; i++) {
          translation = translation.replace(`{${i - 1}}`, match[i]);
        }
      }
      return translation;
    }
  }
  
  // Si no hay traducción específica, limpiar un poco el error original
  return error.replace("PythonError: ", "").trim();
};
