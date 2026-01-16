import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part8-4",
  title: {
    ENG: `Defining methods`,
    CAS: `Definiendo métodos`,
    EUS: `Metodoak definitzen\`
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: \`
# Defining methods

Methods are functions defined within a class. They operate on the object's data via 
self 
.

\`\`\`python
class Counter:
    def __init__(self):
        self.value = 0

    def increase(self):
        self.value += 1
\`\`\`

## Using methods

\`\`\`python
c = Counter()
c.increase()
print(c.value) # 1
\`\`\`
`,
        CAS: `
# Definiendo métodos

Los métodos son funciones definidas dentro de una clase. Operan sobre los datos del objeto vía 
self 
.

\`\`\`python
class Contador:
    def __init__(self):
        self.valor = 0

    def incrementar(self):
        self.valor += 1
\`\`\`

## Usando métodos

\`\`\`python
c = Contador()
c.incrementar()
print(c.valor) # 1
\`\`\`
`,
        EUS: `
# Metodoak definitzen

Metodoak klase baten barruan definitutako funtzioak dira. Objektuaren datuekin lan egiten dute 
self 
 bidez.

\`\`\`python
class Kontagailua:
    def __init__(self):
        self.balioa = 0

    def handitu(self):
        self.balioa += 1
\`\`\`

## Metodoak erabiltzen

\`\`\`python
k = Kontagailua()
k.handitu()
print(k.balioa) # 1
\`\`\`
\`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part08-10_decreasing_counter',
      title: {
        ENG: \`Decreasing counter`,
        CAS: `Contador decreciente`,
        EUS: `Kontagailu beherakorra\`
      },
      description: {
        ENG: \`Implement a class 
DecreasingCounter 
with methods: 
print_value()
, 
decrease()
, 
set_to_zero()
, 
reset_original_value()
. The constructor takes the initial value.`,
        CAS: `Implementa 
DecreasingCounter 
con métodos: 
print_value()
, 
decrease()
, 
set_to_zero()
, 
reset_original_value()
. El constructor toma el valor inicial.`,
        EUS: `Inplementatu 
DecreasingCounter 
klasea metodo hauekin: 
print_value()
, 
decrease()
, 
set_to_zero()
, 
reset_original_value()
. Eraikitzaileak hasierako balioa hartzen du.\`
      },
      initialCode: \`class DecreasingCounter:\n    def __init__(self, initial_value: int):\n        self.value = initial_value\n        # ...\n\n    def print_value(self):\n        print("value:\`, self.value)\n\n    def decrease(self):\n        pass\n\n    # ..."
      testCode: \`\nimport unittest\nclass TestCounter(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-11_first_and_last_name',
      title: {
        ENG: \`First and last name`,
        CAS: `Nombre y apellido`,
        EUS: `Izena eta abizena\`
      },
      description: {
        ENG: \`Create a class 
Person 
with a method 
return_first_name() 
and 
return_last_name()
. Constructor takes full name 'First Last'.`,
        CAS: `Crea una clase 
Persona 
con métodos 
return_first_name() 
y 
return_last_name()
. Constructor toma nombre completo 'Nombre Apellido'.`,
        EUS: `Sortu 
Pertsona 
klasea 
return_first_name() 
eta 
return_last_name() 
metodoekin. Eraikitzaileak 'Izena Abizena' hartzen du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`\nimport unittest\nclass TestName(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-12_number_stats',
      title: {
        ENG: \`Statistics on numbers`,
        CAS: `Estadísticas de números`,
        EUS: `Zenbakien estatistikak\`
      },
      description: {
        ENG: \`Create a class 
NumberStats 
with methods 
add_number(number)
, 
count_numbers()
, 
get_sum()
, 
average()
. Then write a main program that asks for numbers and prints stats.`,
        CAS: `Crea una clase 
NumberStats 
con 
add_number
, 
count_numbers
, 
get_sum
, 
average
. Luego un programa principal que pida números e imprima estadísticas.`,
        EUS: `Sortu 
NumberStats 
klasea 
add_number
, 
count_numbers
, 
get_sum
, 
average
 metodoekin. Gero programa nagusi bat zenbakiak eskatu eta estatistikak inprimatzen dituena.\`
      },
      initialCode: `# Write your solution here\nclass NumberStats:\n    pass\n`
      testCode: \`\nimport unittest\nclass TestStats(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-13_stopwatch',
      title: {
        ENG: \`Stopwatch`,
        CAS: `Cronómetro`,
        EUS: `Kronometroa\`
      },
      description: {
        ENG: \`Create a class 
Stopwatch 
with seconds and minutes. Method 
tick() 
adds 1 second. If seconds -> 60, minutes +1, seconds 0. If minutes -> 60, both 0. Method 
__str__ 
returns MM:SS.`,
        CAS: `Crea 
Cronometro
. 
tick() 
suma 1s. Si 60s -> +1m. Si 60m -> 00:00. 
__str__ 
devuelve MM:SS.`,
        EUS: `Sortu 
Kronometroa
. 
tick()
-ek 1s gehitzen du. 60s -> +1m. 60m -> 00:00. 
__str__
-ek MM:SS itzultzen du.\`
      },
      initialCode: `# Write your solution here\n`
      testCode: \`\nimport unittest\nclass TestStopwatch(unittest.TestCase):\n    def test_run(self):\n        pass\n\`
    },
    {
      type: 'exercise',
      exerciseId: 'part08-14_clock',
      title: {
        ENG: \`Clock`,
        CAS: `Reloj`,
        EUS: `Erlojua\`
      },
      description: {
        ENG: \`Create a class 
Clock 
with hours, minutes, seconds. Methods: 
tick() 
(advances 1s), 
set(h, m)
, 
__str__()
.`,
        CAS: `Crea 
Reloj
. Métodos: 
tick() 
(avanza 1s), 
set(h, m)
, 
__str__()
.`,
        EUS: `Sortu 
Erlojua
. Metodoak: 
tick() 
(1s aurreratu), 
set(h, m)
, 
__str__()
.`
      },
      initialCode: `# Write your solution here\n`
      testCode: `\nimport unittest\nclass TestClock(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};