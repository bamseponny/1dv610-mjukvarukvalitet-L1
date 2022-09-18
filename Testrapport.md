# Testrapport

Målet med detta dokument är att skapa överblick över testningen i laboration 1 till kursen 1dv610 på Linnéuniversitetet och dokumentera de enskilda testerna. Samtliga tester sker mot version 1 av projektet.

## Manuell testning
Use cases

## Förberedelser
1. Installera biblioteket genom *"npm install"*.
2. Importera testbiblioteket till klassen My Favorite Things.

```bash
import library from './test-database.js'
```
***
### UC1 – Lista samtliga titlar

**Beskrivning:** Listar samtliga titlar i biblioteket i bokstavsordning.

**Testinstruktion:** Kalla på metoden *listAllTitles* från modulen *testApp*.

```bash
testApp.listAllTitles()
```

**Förväntat utfall:**

```bash
A complete list of video games in the library:
titleA *** FORMAT: formatA *** RELEASE YEAR: 2020 *** GRADE: 3 of 5 
titleAb *** FORMAT: formatB *** RELEASE YEAR: 2005 *** GRADE: 4 of 5
titleB *** FORMAT: formatA *** RELEASE YEAR: 2022 *** GRADE: 5 of 5 
titleC *** FORMAT: formatA *** RELEASE YEAR: 1985 *** GRADE: 2 of 5 
titleD *** FORMAT: formatB *** RELEASE YEAR: 2016 *** GRADE: 3 of 5 
titleF *** FORMAT: formatA *** RELEASE YEAR: 2015 *** GRADE: 1 of 5 
```

### UC2 – Lista titlar från ett särskilt tidsspann

**Beskrivning:** Listar titlar baserat på ett tidsintervall.

**Testinstruktion:** Kalla på metoden *listByTimeSpan* från modulen *testApp*. Skicka in argumenten *2015, 2020*.

```bash
testApp.listByTimeSpan(2015, 2020)
```

**Förväntat utfall:**

```bash
The video games in your library between years 2015 and 2020 are:    
titleA,
titleD,
titleF
```

### UC3 – Sök efter en eller flera titlar

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```

### UC4 – Filtrera efter datatyp och datavärde

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```

### UC5 – Räkna ut medelvärdet av betygen

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```

### UC6 – Räkna ut medianen av betygen

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```

### UC7 – Räkna ut typvärdet av betygen

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```

### UC8 – Konvertera betyg

**Beskrivning:** 

**Testinstruktion:**

```bash

```

**Förväntat utfall:**

```bash

```
