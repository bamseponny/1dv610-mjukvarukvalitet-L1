# Vision och krav
Målet med det här biblioteket, My Favorite Things, är att en användare ska kunna jobba med en array bestående av objekt. Objekten i sin tur innehåller en viss sorts favoritsaker. Det kan t.ex. vara filmer, böcker eller spel.

Biblioteket används i sin tur i laboration 2, vars fulla kod och dokumentation återfinns via [Github](https://github.com/bamseponny/1dv610-mjukvarukvalitet-L2).

## Kravspecifikation
* En användare ska ha en lista på en viss typ av favoritsaker; en array med objekt.
* En användare ska kunna sortera listan.
* En användare ska kunna filtrera listan på olika sätt, så som betyg, releaseår, format.
* En användare ska kunna plocka ut statitisk baserad på spenderad tid.
* En användare ska kunna plocka ut statistik baserad på betyg.

# Testrapport
*Beskriv hur du kommit fram till om din kod fungerar.*

Jag har använt mig av manuell testning, och arbetat vidare på det vi lärde oss i kursen 1DV613. Då skalan varit mindre har det inte blivit några iterationer, utan en enskild testtabell och beskrivning av de olika testerna med indata och förväntat utfall.
​
### Testfall
*Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?*

Målet med min testning är att skapa överblick över testningen  och dokumentera de enskilda testerna. Samtliga tester sker mot version 1 av projektet.

***

#### Manuell testning

| User cases| Testmetod | Status|       
| --------- |:---------:|:-----:|
| UC 1.1    | Manuell   |✅ |
| UC 1.2    | Manuell   |✅ |
| UC 2.1    | Manuell   |✅ |
| UC 2.2    | Manuell   |✅ |
| UC 3.1    | Manuell   |✅ |
| UC 3.2    | Manuell   |✅ |
| UC 4.1    | Manuell   |✅ |
| UC 4.2    | Manuell   |✅ |
| UC 4.3    | Manuell   |✅ |
| UC 5.1    | Manuell   |✅ |
| UC 5.2    | Manuell   |✅ |
| UC 5.3    | Manuell   |✅ |
| UC 5.4    | Manuell   |✅ |
| UC 5.5    | Manuell   |✅ |
| UC 5.6    | Manuell   |✅ |
| UC 6.1    | Manuell   |✅ |
| UC 6.2    | Manuell   |✅ |
| UC 6.3    | Manuell   |✅ |
| UC 6.4    | Manuell   |✅ |
| UC 6.5    | Manuell   |✅ |
| UC 7.1    | Manuell   |✅ |
| UC 7.2    | Manuell   |✅ |
***

## Förberedelser
1. Installera biblioteket genom *"npm install"*.
2. Importera testbiblioteket till klassen My Favorite Things.

```bash
import library from './test-database.js'
```

3. Ändra myFavoriteThings till *'test objects'* i klassen My Favorite Things.

```bash
this.myfavouriteThings = 'test objects'
```

4. Instansiera klassen *MyFavoriteThings* i *testApp-modulen*.

```bash
const testApp = new MyFavoriteThings()
```

***
### UC1.1 – Lista samtliga objekt i listan

**Beskrivning:** Listar samtliga objekt i biblioteket i bokstavsordning, sorterade efter dess titel.

**Testinstruktion:** Kalla på metoden *listAllLibraryObjects* från modulen *testApp*.

```bash
console.log(testApp.listAllLibraryObjects())
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleA',  
    format: 'formatA',
    releaseYear: 2020,
    genre: 'genreB',  
    grade: 3,
    hoursPlayed: 75   
  },
  {
    title: 'titleAb', 
    format: 'formatB',
    releaseYear: 2005,
    genre: 'genreC',  
    grade: 4,
    hoursPlayed: 22   
  }...
]
```
***
### UC1.2 – Printa samtliga objekt till konsolen.

**Beskrivning:** Printar samtliga objekt i biblioteket i bokstavsordning (efter titel) i konsolen.

**Testinstruktion:** Kalla på metoden *printAllLibraryObjects* från modulen *testApp*.

```bash
testApp.printAllTitles()
```

**Förväntat utfall:**

```bash
A complete list of test-objects in the library:
titleA *** FORMAT: formatA *** RELEASE YEAR: 2020 *** GRADE: 3 of 5 *** PLAY TIME: 75 hours 
titleAb *** FORMAT: formatB *** RELEASE YEAR: 2005 *** GRADE: 4 of 5 *** PLAY TIME: 22 hours
titleB *** FORMAT: formatA *** RELEASE YEAR: 2022 *** GRADE: 5 of 5 *** PLAY TIME: 10 hours 
titleC *** FORMAT: formatA *** RELEASE YEAR: 1985 *** GRADE: 2 of 5 *** PLAY TIME: 7 hours  
titleCc *** FORMAT: formatB *** RELEASE YEAR: 2002 *** GRADE: 5 of 5 *** PLAY TIME: 47 hours
titleD *** FORMAT: formatB *** RELEASE YEAR: 2016 *** GRADE: 3 of 5 *** PLAY TIME: 37 hours 
titleF *** FORMAT: formatA *** RELEASE YEAR: 2015 *** GRADE: 1 of 5 *** PLAY TIME: 13 hours 
```

***

### UC2.1 – Hämta en array med titlar från ett särskilt tidsspann.

**Beskrivning:** Hämtar array med titlar från ett tidsintervall.

**Testinstruktion:** Kalla på metoden *listByTimeSpan* från modulen *testApp*. Skicka in argumenten *2015, 2020*.

```bash
const startYear = 2015
const endYear = 2020
console.log(testApp.listByTimeSpan(startYear, endYear))
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleA',  
    format: 'formatA',
    releaseYear: 2020,
    genre: 'genreB',  
    grade: 3,
    hoursPlayed: 75   
  },
  {
    title: 'titleF',  
    format: 'formatA',
    releaseYear: 2015,
    genre: 'genreB',
    grade: 1,
    hoursPlayed: 13
  },
  {
    title: 'titleD',
    format: 'formatB',
    releaseYear: 2016,
    genre: 'genreA',
    grade: 3,
    hoursPlayed: 37
  }
]
```

***

### UC2.2 – Printa titlar från ett särskilt tidsspann i konsolen.

**Beskrivning:** Listar titlar baserat på ett tidsintervall.

**Testinstruktion:** Kalla på metoden *listByTimeSpan* från modulen *testApp*. Skicka in argumenten *2015, 2020*.

```bash
const startYear = 2015
const endYear = 2020
testApp.printByTimeSpan(startYear, endYear)
```

**Förväntat utfall:**

```bash
The test-objects in your library between years 2015 and 2020 are:
titleA, titleD, titleF
```

***
### UC3.1 – Sök efter en eller flera objekt

**Beskrivning:** Söker efter en eller flera objekt baserat på sträng som skickas in som argument. Får en array i retur, om någon titel hittas som matchar. Annars kastas ett undantag.

**Testinstruktion:** Kalla på metoden *findLibraryObjects* från modulen *testApp*. Skicka in argumentet *A*.

```bash
const searchString = 'A'
console.log(testApp.findLibraryObjects(searchString))
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleA',  
    format: 'formatA',
    releaseYear: 2020,
    genre: 'genreB',  
    grade: 3,
    hoursPlayed: 75   
  },
  {
    title: 'titleAb', 
    format: 'formatB',
    releaseYear: 2005,
    genre: 'genreC',  
    grade: 4,
    hoursPlayed: 22
  }
]
```

***

### UC3.2 – Sök efter en eller flera objekt och printa till konsolen

**Beskrivning:** Söker efter en eller flera objekt baserat på sträng som skickas in som argument. Printar resultat i konsolen om något hittas som matchar objekttiteln. Annars kastas ett undantag.

**Testinstruktion:** Kalla på metoden *printObjectsOfSearchedLibrary* från modulen *testApp*. Skicka in argumentet *A*.

```bash
const searchString = 'A'
testApp.printObjectsOfSearchedLibrary(searchString)
```

**Förväntat utfall:**

```bash
The titles found in the library with passed "A" is: titleA, titleAb.
```

***

### UC4.1 – Filtrera efter format

**Beskrivning:** Filtrerar databasen baserat på format.

**Testinstruktion:** Kalla på metoden *filterByFormat* från modulen *testApp*. Skicka in argumentet *formatB* som söksträng. Vi ska alltså filtrera ut formaten som stämmer överens med söksträngen. Hittas inget kastas ett undantag.

```bash
const passedFormat = 'formatB'
console.log(testApp.filterByFormat(passedFormat))
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleAb', 
    format: 'formatB',
    releaseYear: 2005,
    genre: 'genreC',  
    grade: 4,
    hoursPlayed: 22   
  },
  {
    title: 'titleD',  
    format: 'formatB',
    releaseYear: 2016,
    genre: 'genreA',  
    grade: 3,
    hoursPlayed: 37   
  },
  {
    title: 'titleCc',
    format: 'formatB',
    releaseYear: 2002,
    genre: 'genreA',
    grade: 5,
    hoursPlayed: 47
  }
]
```

***

### UC4.2 – Filtrera efter releaseår

**Beskrivning:** Filtrerar databasen baserat på releaseår.

**Testinstruktion:** Kalla på metoden *filterByReleaseYear* från modulen *testApp*. Skicka in argumentet *2022* som söksträng. Vi ska alltså filtrera ut årtalet som stämmer överens med söksträngen. Hittas inget kastas ett undantag.

```bash
const passedYear = 2022
console.log(testApp.filterByReleaseYear(passedYear))
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleB',  
    format: 'formatA',
    releaseYear: 2022,
    genre: 'genreA',  
    grade: 5,
    hoursPlayed: 10   
  }
]
```

***

### UC4.3 – Filtrera efter betyg

**Beskrivning:** Filtrerar databasen baserat på betyg.

**Testinstruktion:** Kalla på metoden *filterByGrade* från modulen *testApp*. Skicka in argumentet *3* som söksträng. Vi ska alltså filtrera ut betyget som stämmer överens med söksträngen. Hittas inget kastas ett undantag.

```bash
const passedGrace = 3
console.log(testApp.filterByGrade(passedGrade))
```

**Förväntat utfall:**

```bash
[
  {
    title: 'titleA',  
    format: 'formatA',
    releaseYear: 2020,
    genre: 'genreB',  
    grade: 3,
    hoursPlayed: 75   
  },
  {
    title: 'titleD',  
    format: 'formatB',
    releaseYear: 2016,
    genre: 'genreA',  
    grade: 3,
    hoursPlayed: 37
  }
]
```

***

### UC5.1 – Hämta antalet timmar

**Beskrivning:** 
Hämtar en array med samtliga objekts timmar.

**Testinstruktion:** Kalla på metoden *getHourNumbers* från modulen *testApp*.

```bash
console.log(testApp.getHourNumbers())
```

**Förväntat utfall:**

```bash
[
   7, 10, 13, 22,
  37, 47, 75     
]
```

***

### UC5.2 – Räkna ut totalet antal timmar.

**Beskrivning:** 
Räknar samman antalet nummer i en array (antalet timmar).

**Testinstruktion:** Kalla på metoden *calculateTotalHoursSpent* från modulen *testApp*.

```bash
console.log(testApp.calculateTotalHoursSpent())
```

**Förväntat utfall:**

```bash
211
```

***

### UC5.3 – Räkna ut antalet dagar.

**Beskrivning:** 
Omvandlar antalet timmar till antalet dagar.

**Testinstruktion:** Kalla på metoden *calculateNumberOfDaysSpent* från modulen *testApp*.

```bash
console.log(testApp.calculateNumberOfDaysSpent())
```

**Förväntat utfall:**

```bash
9
```

***

### UC5.4 – Räkna ut medelvärdet av antalet timmar.

**Beskrivning:** 
Räknar ut medelvärdet av en array.

**Testinstruktion:** Kalla på metoden *calculateAverageHoursSpent* från modulen *testApp*.

```bash
console.log(testApp.calculateAverageHoursSpent())
```

**Förväntat utfall:**

```bash
30
```

***

### UC5.5 – Räkna ut max- och minimi-värdet av en array.

**Beskrivning:** 
Räknar ut max- och minimi-värdet av en array.

**Testinstruktion:** Kalla på metoden *calculateMinMaxHours* från modulen *testApp*.

```bash
console.log(testApp.calculateMinMaxHours())
```

**Förväntat utfall:**

```bash
[ 7, 75 ]
```

***

### UC5.6 – Printa tidsstatistik till konsolen.

**Beskrivning:** 
Printar tidsstatistik till konsolen med ovan nämnda tester (5.1–5.5)

**Testinstruktion:** Kalla på metoden *PrintTimeStatistics* från modulen *testApp*.

```bash
testApp.PrintTimeStatistics()
```

**Förväntat utfall:**

```bash
You have spent a total of 211 hours, approximately 9 days, with your collection of test-objects. 
    The average time spent with each individual library object is 30 hours.
    The least amount of time you have spent on an item is 7 hours, and the most time is 75 hours.
```

***

### UC6.1 – Hämta array med betyg (nummer).

**Beskrivning:** 
Hämtar en array med samtliga objekts betyg (nummer).

**Testinstruktion:** Kalla på metoden *getGradeNumbers* från modulen *testApp*.

```bash
console.log(testApp.getGradeNumbers())
```

**Förväntat utfall:**

```bash
[
  1, 2, 3, 3,
  4, 5, 5    
]
```

***

### UC6.2 – Räkna ut medelvärdet av betygen.

**Beskrivning:** 
Räknar ut medelvärdet av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateAverageGrade* från modulen *testApp*.

```bash
console.log(testApp.calculateAverageGrade())
```

**Förväntat utfall:**

```bash
3.29
```

***
### UC6.3 – Räkna ut medianen av betygen.

**Beskrivning:** Räknar ut medianen av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateMedianGrade* från modulen *testApp*.

```bash
console.log(testApp.calculateMedianGrade())
```

**Förväntat utfall:**

```bash
3
```

***

### UC6.4 – Räkna ut typvärdet av betygen.

**Beskrivning:** Räknar ut typvärdet/typvärdena av av samtliga betyg.

**Testinstruktion:** Kalla på metoden *calculateModeGrade* från modulen *testApp*.

```bash
console.log(testApp.calculateModeGrade())
```

**Förväntat utfall:**

```bash
[ 3, 5 ]
```

***

### UC6.5 – Printa betygsstatistik till konsolen.

**Beskrivning:** 
Printar betygsstatistik till konsolen med ovan nämnda tester (6.1–5.4)

**Testinstruktion:** Kalla på metoden *printGradeStatistics* från modulen *testApp*.

```bash
testApp.printGradeStatistics()
```

**Förväntat utfall:**

```bash
The average of the grade is 3.29.
The median of the grade is 3.
The most frequent values of all the grades are 3, 5.
```

***

### UC7.1 – Konvertera betyg.

**Beskrivning:** Konverterar ett betyg (F-A, 1-10, 1-100) till bibliotekets standard (1-5), via två argument: tidigare maxbetyg, tidigare betyg.

**Testinstruktion:** Kalla på metoden *convertGrade* från modulen *testApp*. Skicka in argumenten *100, 37*.

```bash
const oldMax = 100
const oldGrade = 37
console.log(testApp.convertGrade(oldMax, oldGrade))
```

**Förväntat utfall:**

```bash
2
```

***

### UC7.2 – Konvertera och printa betyg.

**Beskrivning:** Konverterar ett betyg (F-A, 1-10, 1-100) till bibliotekets standard (1-5), via två argument: tidigare maxbetyg, tidigare betyg. Printar till konsolen.

**Testinstruktion:** Kalla på metoden *printConvertedGrade* från modulen *testApp*. Skicka in argumenten *100, 37*.

```bash
const oldMax = 100
const oldGrade = 37
testApp.printConvertedGrade(oldMax, oldGrade)
```

**Förväntat utfall:**

```bash
Old grade, 37 with maximum of 100, is converted to 2 out of 5.
```
