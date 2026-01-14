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
      exerciseId: 'part07-07_how_old',
      title: {
        ENG: "How old",
        CAS: "¿Qué edad tienes?",
        EUS: "Zenbat urte"
      },
      description: {
        ENG: "Write a program that asks for the user's birthdate (day, month, year) and prints their age in days on the eve of the new millennium (30.12.1999). If they were born later, print nothing.",
        CAS: "Escribe un programa que pida la fecha de nacimiento (día, mes, año) e imprima la edad en días en la víspera del nuevo milenio (30.12.1999). Si nació después, no imprimas nada.",
        EUS: "Idatzi programa bat erabiltzailearen jaioteguna eskatzen duena (eguna, hila, urtea) eta milurteko berriaren bezperan (1999.12.30) zuen adina egunetan inprimatzen duena. Geroago jaio bazen, ez inprimatu ezer."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime\n",
      testCode: "\nimport unittest\nfrom unittest.mock import patch\n\nclass TestAge(unittest.TestCase):\n    def test_run(self):\n        # 10, 9, 1999 -> days until 30.12.1999\n        pass\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part07-08_screen_time',
      title: {
        ENG: "Screen time",
        CAS: "Tiempo de pantalla",
        EUS: "Pantaila denbora"
      },
      description: {
        ENG: "Write a program that asks for a start date and how many days to track. Then ask for screen time minutes for each day. Print start date, total duration, total minutes and average minutes. Save this to a file named by the start date (e.g. 'late_june.txt' if input was that? No, file name usually depends on exercise spec). Let's say filename is hardcoded or based on date.",
        CAS: "Escribe un programa que pida una fecha de inicio y cuántos días rastrear. Luego pide minutos de pantalla por día. Imprime estadísticas y guarda en un fichero.",
        EUS: "Idatzi programa bat hasiera data eta zenbat egun jarraitu galdetzen duena. Gero galdetu pantaila denbora minutuak egun bakoitzeko. Inprimatu estatistikak eta gorde fitxategi batean."
      },
      initialCode: "# Write your solution here\nfrom datetime import datetime, timedelta\n",
      testCode: "\nimport unittest\nclass TestScreen(unittest.TestCase):\n    pass\n"
    }
  ]
};
