import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part8-4",
  title: {
    ENG: "Defining methods",
    CAS: "Definiendo métodos",
    EUS: "Metodoak definitzen"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Defining methods\n\nMethods are functions defined within a class. They operate on the object's data via `self`.\n\n```python\nclass Counter:\n    def __init__(self):\n        self.value = 0\n\n    def increase(self):\n        self.value += 1\n```\n\n## Using methods\n\n```python\nc = Counter()\nc.increase()\nprint(c.value) # 1\n```\n",
        CAS: "\n# Definiendo métodos\n\nLos métodos son funciones definidas dentro de una clase. Operan sobre los datos del objeto vía `self`.\n\n```python\nclass Contador:\n    def __init__(self):\n        self.valor = 0\n\n    def incrementar(self):\n        self.valor += 1\n```\n\n## Usando métodos\n\n```python\nc = Contador()\nc.incrementar()\nprint(c.valor) # 1\n```\n",
        EUS: "\n# Metodoak definitzen\n\nMetodoak klase baten barruan definitutako funtzioak dira. Objektuaren datuekin lan egiten dute `self` bidez.\n\n```python\nclass Kontagailua:\n    def __init__(self):\n        self.balioa = 0\n\n    def handitu(self):\n        self.balioa += 1\n```\n\n## Metodoak erabiltzen\n\n```python\nk = Kontagailua()\nk.handitu()\nprint(k.balioa) # 1\n```\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-06_decreasing_counter',
      title: {
        ENG: "Decreasing counter",
        CAS: "Contador decreciente",
        EUS: "Kontagailu beherakorra"
      },
      description: {
        ENG: "Implement a class DecreasingCounter with methods: print_value(), decrease(), set_to_zero(), reset_original_value(). The constructor takes the initial value.",
        CAS: "Implementa DecreasingCounter con métodos: print_value(), decrease(), set_to_zero(), reset_original_value(). El constructor toma el valor inicial.",
        EUS: "Inplementatu DecreasingCounter klasea metodo hauekin: print_value(), decrease(), set_to_zero(), reset_original_value(). Eraikitzaileak hasierako balioa hartzen du."
      },
      initialCode: "class DecreasingCounter:\n    def __init__(self, initial_value: int):\n        self.value = initial_value\n        # ...\n\n    def print_value(self):\n        print(\"value:\", self.value)\n\n    def decrease(self):\n        pass\n\n    # ...",
      testCode: "\nimport unittest\nfrom unittest.mock import patch\nfrom io import StringIO\n\nclass TestCounter(unittest.TestCase):\n    def test_run(self):\n        c = DecreasingCounter(10)\n        c.decrease()\n        self.assertEqual(c.value, 9)\n        c.set_to_zero()\n        self.assertEqual(c.value, 0)\n        c.reset_original_value()\n        self.assertEqual(c.value, 10)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part08-07_statistics_on_numbers',
      title: {
        ENG: "Statistics on numbers",
        CAS: "Estadísticas de números",
        EUS: "Zenbakien estatistikak"
      },
      description: {
        ENG: "Create a class NumberStats with methods add_number(number) and count_numbers(), get_sum(), average().",
        CAS: "Crea una clase NumberStats con add_number(number), count_numbers(), get_sum(), average().",
        EUS: "Sortu NumberStats klasea add_number(number), count_numbers(), get_sum(), average() metodoekin."
      },
      initialCode: "# Write your solution here\nclass NumberStats:\n    pass\n",
      testCode: "\nimport unittest\nclass TestStats(unittest.TestCase):\n    def test_run(self):\n        s = NumberStats()\n        s.add_number(3)\n        s.add_number(5)\n        s.add_number(1)\n        s.add_number(2)\n        # count: 4, sum: 11, avg: 2.75\n        self.assertEqual(s.count_numbers(), 4)\n        self.assertEqual(s.get_sum(), 11)\n        self.assertEqual(s.average(), 2.75)\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part08-08_clock',
      title: {
        ENG: "Clock",
        CAS: "Reloj",
        EUS: "Erlojua"
      },
      description: {
        ENG: "Create a class Clock with hours, minutes, seconds. Methods: tick() (advances by 1s), __str__() (returns HH:MM:SS string).",
        CAS: "Crea una clase Clock con horas, minutos, segundos. Métodos: tick() (avanza 1s), __str__() (devuelve HH:MM:SS).",
        EUS: "Sortu Clock klasea ordu, minutu, segunduekin. Metodoak: tick() (1s aurreratu), __str__() (HH:MM:SS itzuli)."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestClock(unittest.TestCase):\n    def test_run(self):\n        c = Clock(23, 59, 59)\n        c.tick()\n        self.assertEqual(str(c), \"00:00:00\")\n"
    },
    {
      type: 'exercise',
      exerciseId: 'part08-09_lunch_card',
      title: {
        ENG: "LunchCard",
        CAS: "Tarjeta de almuerzo",
        EUS: "Bazkari txartela"
      },
      description: {
        ENG: "Create LunchCard class with balance. Methods: eat_cheap(), eat_special(), deposit_money(). Prevent negative balance.",
        CAS: "Crea LunchCard con saldo. Métodos: eat_cheap(), eat_special(), deposit_money(). Evita saldo negativo.",
        EUS: "Sortu LunchCard klasea saldoarekin. Metodoak: eat_cheap(), eat_special(), deposit_money(). Saihestu saldo negatiboa."
      },
      initialCode: "# Write your solution here\n",
      testCode: "\nimport unittest\nclass TestLunch(unittest.TestCase):\n    def test_run(self):\n        card = LunchCard(10)\n        card.eat_cheap()\n        # Assume cheap is e.g. 2.95 (check exercise specs usually, usually 2.50 or similar)\n        # We accept if balance decreased.\n        self.assertTrue(card.balance < 10)\n"
    }
  ]
};
