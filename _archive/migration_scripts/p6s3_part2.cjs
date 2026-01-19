const exerciseIncorrectLotteryNumbers = {
  type: "exercise",
  exerciseId: "part06-19_incorrect_lottery_numbers",
  title: { ENG: "Incorrect lottery numbers", CAS: "Números de lotería incorrectos", EUS: "Loteria zenbaki okerrak" },
  description: {
    ENG: "Write `filter_incorrect()` to clean corrupted lottery file.",
    CAS: "Escribe `filter_incorrect()` para limpiar archivo de lotería corrupto.",
    EUS: "Idatzi `filter_incorrect()` loteria fitxategi hondatua garbitzeko."
  },
  initialCode: { ENG: "def filter_incorrect(): pass", CAS: "def filter_incorrect(): pass", EUS: "def filter_incorrect(): pass" },
  testCode: [
    "import unittest",
    "class TestLottery(unittest.TestCase):",
    "    def test_run(self):",
    "        pass"
  ].join("\n")
};

module.exports = { exerciseIncorrectLotteryNumbers };
