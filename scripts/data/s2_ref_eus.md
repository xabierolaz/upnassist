## Aldagai bat erreferentziatzea

Programa batean aldagai bati askotan egin dakioke erreferentzia:

```python
name = input("Zein da zure izena? ")

print("Kaixo, " + name + "!")
print(name + " izen polita da.")
```

Erabiltzaileak Paul Python izena ematen badu, programa honek honako hau inprimatzen du:

```text
Zein da zure izena? Paul Python
Kaixo, Paul Python!
Paul Python izen polita da.
```

Ikus dezagun gertuagotik `print` komandoa nola erabiltzen den goian. Komandoaren parentesi barruan komatxo arteko testua eta erabiltzailearen sarrerari erreferentzia egiten dioten aldagai-izenak daude. Hauek `+` eragilearekin konbinatu dira, bi kate kate bakar batean elkartzen dituena.

Kateak eta aldagaiak nahiko libreki konbina daitezke:

```python
name = input("Zein da zure izena? ")

print("Kaixo " + name + "! Ziurtatu dezadan: zure izena " + name + " da?")
```

Erabiltzaileak Ellen Example izena ematen badu, honek inprimatzen du:

```text
Zein da zure izena? Ellen Example
Kaixo Ellen Example! Ziurtatu dezadan: zure izena Ellen Example da?
```
