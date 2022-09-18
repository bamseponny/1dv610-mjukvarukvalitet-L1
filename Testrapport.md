# Testrapport

Målet med detta dokument är att skapa överblick över testningen i laboration 1 till kursen 1dv610 på Linnéuniversitetet och dokumentera de enskilda testerna. Samtliga tester sker mot version 1 av projektet.
***

## Manuell testning

| User cases| Status|       
| --------- |:-----:|
| UC 1      | ✅ |
| UC 2      | ✅ |
| UC 3      | ✅ |
| UC 4      | ✅ |
| UC 5      | ✅ |
| UC 6      | ✅ |
| UC 7      | ✅ |
| UC 8      | ✅ |
***


## Förberedelser
1. Installera biblioteket genom *"npm install"*.
2. Importera testbiblioteket till klassen My Favorite Things.

```bash
import library from './test-database.js'
```

3. Ändra myFavouriteThings till *'test objects'* i klassen My Favorite Things.

```bash
this.myfavouriteThings = 'test objects'
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
titleCc *** FORMAT: formatB *** RELEASE YEAR: 2002 *** GRADE: 5 of 5
titleD *** FORMAT: formatB *** RELEASE YEAR: 2016 *** GRADE: 3 of 5 
titleF *** FORMAT: formatA *** RELEASE YEAR: 2015 *** GRADE: 1 of 5  
```

***
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

***
### UC3 – Sök efter en eller flera titlar

**Beskrivning:** Söker efter en eller flera titlar baserat på sträng som skickas in som argument.

**Testinstruktion:** Kalla på metoden *findTitles* från modulen *testApp*. Skicka in argumentet *A*.

```bash
testApp.findTitles('A')
```

**Förväntat utfall:**

```bash
The titles found in the library with passed "A" is: titleA, titleAb.
```

***
### UC4 – Filtrera efter datatyp och datavärde

**Beskrivning:** Filtrerar databasen baserat på två argument: datatyp, datavärde.

**Testinstruktion:** Kalla på metoden *filterByData* från modulen *testApp*. Skicka in argumenten *grade, 3*. Vi ska alltså filtrera ut titlarna med betyget 3.

```bash
testApp.filterByData('grade', 3)
```

**Förväntat utfall:**

```bash
The test objects with the grade 3 in your collection are titleA, titleD.
```

***
### UC5 – Räkna ut medelvärdet av betygen

**Beskrivning:** 
Räknar ut medelvärdet av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateAverage* från modulen *testApp*.

```bash
testApp.calculateAverage()
```

**Förväntat utfall:**

```bash
The average of the grade is 3.29.
```

***
### UC6 – Räkna ut medianen av betygen

**Beskrivning:** Räknar ut medianen av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateMedian* från modulen *testApp*.

```bash
testApp.calculateMedian()
```

**Förväntat utfall:**

```bash
The median of the grade is 3.
```

***
### UC7 – Räkna ut typvärdet av betygen

**Beskrivning:** Räknar ut typvärdet/typvärdena av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateMode* från modulen *testApp*.

```bash
testApp.calculateMode()
```

**Förväntat utfall:**

```bash
The most frequent values of all the grades are 3, 5.
```

***
### UC8 – Konvertera betyg

**Beskrivning:** Konverterar ett betyg (F-A, 1-10, 1-100) till bibliotekets standard (1-5), via två argument: tidigare maxbetyg, tidigare betyg.

**Testinstruktion:** Kalla på metoden *convertGrade* från modulen *testApp*. Skicka in argumenten *100, 37*.

```bash
testApp.convertGrade(100, 37)
```

**Förväntat utfall:**

```bash
Old grade, 37 with maximum of 100, is converted to 2 out of 5.
```
