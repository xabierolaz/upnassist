import { CoursePage } from '../mooc-exercises';

export const section2: CoursePage = {
  id: "part10-2",
  title: {
    ENG: "Access modifiers",
    CAS: "Modificadores de acceso",
    EUS: "Atzipen-aldatzaileak"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: "\n# Access modifiers\n\nIn Python, there are no strict access modifiers like `private` or `protected`. However, conventions exist:\n\n- `_variable`: Protected (intended for internal use and subclasses).\n- `__variable`: Private (name mangling applied, harder to access).\n\n\`\`\`python\nclass A:\n    def __init__(self):\n        self._protected = 1\n        self.__private = 2\n\nclass B(A):\n    def test(self):\n        print(self._protected) # OK\n        # print(self.__private) # Error\n\`\`\`\n",
        CAS: "\n# Modificadores de acceso\n\nEn Python, no hay modificadores estrictos como `private` o `protected`. Sin embargo, existen convenciones:\n\n- `_variable`: Protegido (uso interno y subclases).\n- `__variable`: Privado (difícil de acceder).\n\n\`\`\`python\nclass A:\n    def __init__(self):\n        self._protected = 1\n        self.__private = 2\n\nclass B(A):\n    def test(self):\n        print(self._protected) # OK\n        # print(self.__private) # Error\n\`\`\`\n",
        EUS: "\n# Atzipen-aldatzaileak\n\nPython-en, ez dago `private` edo `protected` bezalako aldatzaile zorrotzik. Hala ere, konbentzioak daude:\n\n- `_aldagaia`: Babestua (barne erabilerarako eta azpiklaseetarako).\n- `__aldagaia`: Pribatua (zaila atzitzeko).\n\n\`\`\`python\nclass A:\n    def __init__(self):\n        self._protected = 1\n        self.__private = 2\n\nclass B(A):\n    def test(self):\n        print(self._protected) # OK\n        # print(self.__private) # Errorea\n\`\`\`\n"
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part10-05_supergroup',
      title: {
        ENG: "Supergroup",
        CAS: "Supergrupo",
        EUS: "Supertaldea"
      },
      description: {
        ENG: "Class `SuperHero` is provided. Create `SuperGroup` with protected attributes `_name`, `_location`, `_members`. Add methods `add_member` and `print_group`.",
        CAS: "Se da `SuperHero`. Crea `SuperGroup` con atributos protegidos. Métodos `add_member` y `print_group`.",
        EUS: "`SuperHero` ematen da. Sortu `SuperGroup` atributu babestuekin. `add_member` eta `print_group` metodoak."
      },
      initialCode: "class SuperHero:\n    def __init__(self, name: str, superpowers: str):\n        self.name = name\n        self.superpowers = superpowers\n\n    def __str__(self):\n        return f'{self.name}, superpowers: {self.superpowers}'\n\n# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestSupergroup(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    },
    {
      type: 'exercise',
      exerciseId: 'part10-06_secret_magic_potion',
      title: {
        ENG: "Secret magic potion",
        CAS: "Poción mágica secreta",
        EUS: "Edabe magiko sekretua"
      },
      description: {
        ENG: "Inherit from `MagicPotion`. `SecretMagicPotion` should require a password to add ingredients or print the recipe. Password is stored in protected attribute.",
        CAS: "Hereda de `MagicPotion`. `SecretMagicPotion` requiere contraseña para añadir ingredientes o imprimir. Contraseña protegida.",
        EUS: "Heredatu `MagicPotion`-etik. `SecretMagicPotion`-ek pasahitza behar du osagaiak gehitzeko edo inprimatzeko. Pasahitz babestua."
      },
      initialCode: "class MagicPotion:\n    def __init__(self, name: str):\n        self._name = name\n        self._ingredients = []\n\n    def add_ingredient(self, ingredient: str, amount: float):\n        self._ingredients.append((ingredient, amount))\n\n    def print_recipe(self):\n        print(self._name + \":\")\n        for ingredient in self._ingredients:\n            print(f\"{ingredient[0]} {ingredient[1]} grams\")\n\n# Write your solution here\n",
      testCode: `\nimport unittest\nclass TestMagicPotion(unittest.TestCase):\n    def test_run(self):\n        pass\n`
    }
  ]
};