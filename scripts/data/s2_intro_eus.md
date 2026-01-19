# Erabiltzailearen informazioa

## Ikaskuntza-helburuak

Atal honen ondoren:
- Erabiltzailearen sarrera erabiltzen duen programa bat idazten jakingo duzu
- Sarrera gordetzeko eta inprimatzeko aldagaiak nola erabili jakingo duzu
- Kateak (strings) konbinatzeko gai izango zara

Sarrera (input) erabiltzaileak programari ematen dion edozein informaziorik dagokio. Zehazki, Python-eko `input` komandoak erabiltzaileak idatzitako testu-lerro bat irakurtzen du. Erabiltzaileari mezu bat erakusteko ere erabil daiteke, sarrera zehatz bat eskatzeko.

Hurrengo programak erabiltzailearen izena irakurtzen du `input` komandoarekin. Ondoren, `print` komandoarekin inprimatzen du:

```python
name = input("Zein da zure izena? ")
print("Kaixo, " + name)
```

Programa honen exekuzioa honela ikus daiteke (erabiltzailearen sarrera gorriz):

```text
Zein da zure izena? Paul Python
Kaixo, Paul Python
```

Programa honek inprimatzen duena erabiltzailearen sarreraren araberakoa da neurri batean. Horrek esan nahi du programaren exekuzioa honela ere ikus daitekeela:

```text
Zein da zure izena? Paula Programmer
Kaixo, Paula Programmer
```

Programa honetako `name` hitza **aldagaia** da. Programazioaren testuinguruan, aldagaia balio bat gordetzeko kokapen bat da, adibidez kate bat edo zenbaki bat. Balio hau geroago erabil daiteke, eta aldatu ere egin daiteke.

## Aldagaiak izendatzen

Printzipioz, aldagaiak nahiko libreki izenda daitezke, Python lengoaiak zehaztutako muga batzuen barruan.

Nazioarteko programazio-praktika ohikoa da aldagaiak ingelesez izendatzea, baina aldagaiak beste hizkuntza batzuetan izendatzen diren kodea aurki dezakezu, programatzailearen jatorrizko hizkuntzan adibidez. Aldagaiaren izenak ez du eragin zuzenik bere edukian; beraz, izenak, zentzu horretan, ez du garrantzirik. Hala ere, askotan lagungarria izan daiteke kodeak nola funtzionatzen duen ulertzeko aldagaiak logikoki eta ingelesez izendatzen badira.
