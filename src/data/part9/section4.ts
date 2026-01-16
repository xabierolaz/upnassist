import { CoursePage } from '../mooc-exercises';

export const section4: CoursePage = {
  id: "part9-4",
  title: {
    ENG: "Scope of methods",
    CAS: "Alcance de los métodos",
    EUS: "Metodoen esparrua"
  },
  blocks: [
    {
      type: 'markdown',
      content: {
        ENG: `
# Scope of methods

Just like attributes, methods can be made private by prefixing them with two underscores 	__. These methods are not directly accessible from outside the class.

\`\`\`python
class Recipient:
    def __init__(self, name, email):
        self.__name = name
        if self.__check_email(email):
            self.__email = email
        else:
            raise ValueError("Invalid email")

    def __check_email(self, email):
        return "@" in email and "." in email
\`\`\`
`,
        CAS: `
# Alcance de los métodos

Al igual que los atributos, los métodos pueden hacerse privados prefijándolos con dos guiones bajos 	__. Estos métodos no son directamente accesibles desde fuera de la clase.

\`\`\`python
class Destinatario:
    def __init__(self, nombre, email):
        self.__nombre = nombre
        if self.__verificar_email(email):
            self.__email = email
        else:
            raise ValueError("Email inválido")

    def __verificar_email(self, email):
        return "@" in email and "." in email
\`\`\`
`,
        EUS: `
# Metodoen esparrua

Atributuak bezala, metodoak pribatu egin daitezke 	__ aurrizkiarekin. Metodo hauek ez dira zuzenean eskuragarri klasetik kanpo.

\`\`\`python
class Hartzailea:
    def __init__(self, izena, emaila):
        self.__izena = izena
        if self.__egiaztatu_emaila(emaila):
            self.__emaila = emaila
        else:
            raise ValueError("Email baliogabea")

    def __egiaztatu_emaila(self, emaila):
        return "@" in emaila and "." in emaila
\`\`\`
`
      }
    },
    {
      type: 'exercise',
      exerciseId: 'part09-12_service_charge',
      title: {
        ENG: "Service charge",
        CAS: "Cargo por servicio",
        EUS: "Zerbitzu kargua"
      },
      description: {
        ENG: "Create class `BankAccount` with private attributes. Method `withdraw(amount)` calls private method `__service_charge()`, which subtracts 1% if amount > 0.",
        CAS: "Crea clase `BankAccount`. `withdraw` llama a `__service_charge` privado (resta 1%).",
        EUS: "Sortu `BankAccount` klasea. `withdraw`-k `__service_charge` pribatua deitzen du (%1 kentzen du)."
      },
      initialCode: "# Write your solution here\nclass BankAccount:\n    pass\n",
      testCode: `
import unittest
class TestAccount(unittest.TestCase):
    def test_run(self):
        pass
`
    }
  ]
};