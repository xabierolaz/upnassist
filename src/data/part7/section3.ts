import { CoursePage } from '../mooc-exercises';

export const section3: CoursePage = {
  id: "part7-3",
  title: {
    ENG: "Times and dates",
    CAS: "Fechas y horas",
    EUS: "Orduak eta datak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Times and dates\n\nThe \`datetime\` module allows handling dates and times.\n\n\`\`\`python\nfrom datetime import datetime\n\nnow = datetime.now()\nprint(now)\n\`\`\`\n\n## Creating dates\n\n\`\`\`python\nmy_birthday = datetime(1995, 1, 25)\nprint(my_birthday)\n\`\`\`\n\n## Calculating differences\n\nSubtracting two datetime objects results in a \`timedelta\` object.\n\n\`\`\`python\ndiff = now - my_birthday\nprint(diff.days)\n\`\`\`\n",
        CAS: "\n# Fechas y horas\n\nEl módulo \`datetime\` permite manejar fechas y horas.\n\n\`\`\`python\nfrom datetime import datetime\n\nahora = datetime.now()\nprint(ahora)\n\`\`\`\n\n## Creando fechas\n\n\`\`\`python\nmi_cumple = datetime(1995, 1, 25)\nprint(mi_cumple)\n\`\`\`\n\n## Calculando diferencias\n\nRestar dos objetos datetime resulta en un objeto \`timedelta\`.\n\n\`\`\`python\ndif = ahora - mi_cumple\nprint(dif.days)\n\`\`\`\n",
        EUS: "\n# Orduak eta datak\n\n\`datetime\` moduluak datak eta orduak kudeatzea ahalbidetzen du.\n\n\`\`\`python\nfrom datetime import datetime\n\norain = datetime.now()\nprint(orain)\n\`\`\`\n\n## Datak sortzen\n\n\`\`\`python\nnire_urtebetetzea = datetime(1995, 1, 25)\nprint(nire_urtebetetzea)\n\`\`\`\n\n## Ezberdintasunak kalkulatzen\n\nBi datetime objektu kentzeak \`timedelta\` objektu bat ematen du.\n\n\`\`\`python\naldea = orain - nire_urtebetetzea\nprint(aldea.days)\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part07-09_how_old',
      title: {
        ENG: "How old",
        CAS: "¿Qué edad tienes?",
        EUS: "Zenbat urte"
      },
      description: {
        ENG: "Write a program that asks for the user's birthdate (day, month, year) and prints their age in days on the eve of the new millennium (30.12.1999). If they were born later, print \"You weren't born yet on the eve of the new millennium.\".",
        CAS: "Escribe un programa que pida la fecha de nacimiento (día, mes, año) e imprima la edad en días en la víspera del nuevo milenio (30.12.1999). Si nació después, imprime un mensaje específico.",
        EUS: "Idatzi programa bat erabiltzailearen jaioteguna eskatzen duena (eguna, hila, urtea) eta milurteko berriaren bezperan (1999.12.30) zuen adina egunetan inprimatzen duena. Geroago jaio bazen, mezu berezia inprimatu."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime\n",
      testCode: `\nimport unittest\nclass TestAge(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-10_valid_pic',
      title: {
        ENG: "Valid pic",
        CAS: "PIC válido",
        EUS: "PIC baliozkoa"
      },
      description: {
        ENG: "Write a function named \`is_it_valid(pic: str)\` which returns True if the given Personal Identity Code is valid, and False otherwise. A PIC checks date validity, century marker (+, -, A), and checksum.",
        CAS: "Escribe \`is_it_valid(pic)\` que devuelva True si el código de identidad es válido (verifica fecha, siglo, checksum).",
        EUS: "Idatzi \`is_it_valid(pic)\` funtzioa. True itzuli PIC (Nortasun Kodea) baliozkoa bada (data, mendea, kontrol kodea egiaztatu)."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime\n\ndef is_it_valid(pic):\n    pass\n",
      testCode: `\nimport unittest\nclass TestPIC(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part07-11_screen_time',
      title: {
        ENG: "Screen time",
        CAS: "Tiempo de pantalla",
        EUS: "Pantaila denbora"
      },
      description: {
        ENG: "Write a program that asks for a start date and how many days to track. Then ask for screen time minutes for each day. Print start date, total duration, total minutes and average minutes. Save this to a file named by the start date.",
        CAS: "Escribe un programa que pida fecha de inicio y días. Pide minutos diarios. Imprime estadísticas y guarda en un fichero con el nombre de la fecha.",
        EUS: "Idatzi programa bat hasiera data eta egunak eskatzen dituena. Gero galdetu pantaila denbora. Inprimatu estatistikak eta gorde data izena duen fitxategian."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime, timedelta\n",
      testCode: `\nimport unittest\nclass TestScreen(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};