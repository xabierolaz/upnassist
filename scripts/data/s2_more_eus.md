## Sarrera bat baino gehiago

Programa batek sarrera bat baino gehiago eska dezake. Ohartu nola behean `input` komando bakoitzak jasotako balioa aldagai ezberdin batean gordetzen duen.

```python
name = input("Zein da zure izena? ")
email = input("Zein da zure helbide elektronikoa? ")
nickname = input("Zein da zure ezizena? ")

print("Ziurtatu dezagun ondo ulertu dugula")
print("Zure izena: " + name)
print("Zure helbide elektronikoa: " + email)
print("Zure ezizena: " + nickname)
```

Programak hau inprimatu lezake, adibidez:

```text
Zein da zure izena? Frances Fictitious
Zein da zure helbide elektronikoa? frances99@example.com
Zein da zure ezizena? Fran
Ziurtatu dezagun ondo ulertu dugula
Zure izena: Frances Fictitious
Zure helbide elektronikoa: frances99@example.com
Zure ezizena: Fran
```

Aldagai bera sarrera bat baino gehiago gordetzeko erabiltzen bada, balio berri bakoitzak aurrekoa ordezkatuko du. Adibidez:

```python
address = input("Zein da zure helbidea? ")
print("Beraz, helbide honetan bizi zara: " + address)

address = input("Mesedez idatzi helbide berri bat: ")
print("Zure helbidea orain hau da: " + address)
```

Programaren exekuzio adibide bat:

```text
Zein da zure helbidea? Python Path 101, Flat 3D
Beraz, helbide honetan bizi zara: Python Path 101, Flat 3D
Mesedez idatzi helbide berri bat: New Road 999
Zure helbidea orain hau da: New Road 999
```

Horrek esan nahi du aldagai bera bi sarrera jarraian gordetzeko erabiltzen bada, ez dagoela modurik lehenengo sarreraren balioa atzitzeko bigarrenak ordezkatu ondoren:

```python
address = input("Zein da zure helbidea? ")
address = input("Mesedez idatzi helbide berri bat: ")

print("Zure helbidea orain hau da: " + address)
```

Programaren irteera nolakoa izan daitekeen adibide bat:

```text
Zein da zure helbidea? Python Path 10
Mesedez idatzi helbide berri bat: Programmer's Walk 23
Zure helbidea orain hau da: Programmer's Walk 23
```
