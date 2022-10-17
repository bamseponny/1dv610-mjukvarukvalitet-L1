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

# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - ✅ Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - ✅ Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - ✅ Koden är objektorienterad
  - ✅ Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - ✅ Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - ✅ De flesta testfall fungerar
    - ✅ Koden är förberedd på Återanvändning
    - ✅ All kod samt historik finns i git 
    - ✅ Kodkvaliterskraven är ifyllda
    - ✅ Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - ✅ Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - ✅ Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - ✅ Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
*Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.*

Det här var en svår nöt att knäcka för mig. Under år ett producerade vi ju applikationer på löpande band, så detta fick man ju angripa på ett annat sätt. Jag har producerat en [Readme](README.md) med instruktioner där jag förklarar med breda penseldrag hur mitt bibliotek är tänkt att användas. Den filen blir en slags inkörsport för att få ett fågelperspektiv, och därefter kan man bestämma sig för huruvida man vill krypa närmre; om biblioteket är något för dig.

Till en början hamnade mina metoder *väldigt* nära att resultera i en app, men allt eftersom har jag levererat data att arbeta med snarare än konsol-utskrifter. Att hitta den här skillnaden blev för mig en nyckel.
​
## Beskrivning av min kod
*Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.*

Tanken är att en användare ska producera en databas (en array med objekt) med sina favoritsaker i en viss kategori (detta görs i [*database.js*](./src/js/database.js)). Det kan vara t.ex. datorspel, böcker eller tv-serier. I respektive objekt skriver man titel, format, tid (tillbringad med objektet), betyg (i ett beskrivet spann) och så vidare.

Klassen [*MyFavoriteThings*](./src/js/my-favorite-things.js) är sedan den man använder sig av för att jobba med databasen. Man kan lista och sortera alla objekt (*listAllTitles*), filtrera efter tidsspann (*listByTimeSpan*) och även efter år, betyg och format (*filterByData*).

En nyckeldel är också att arbeta med siffror. Man kan exempelvis räkna ut antalet dagar man plöjt ner på sin favoritsak (*calculateNumberOfDaysSpent*) och medelbetyget (*calculateAverageGrade*).
​
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
​
## Kodkvalitetskrav
​
*Fetmarkera de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.*
​
### Namngivning
​
| Namn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **MyFavoriteThings** - klassnamn på bibliotekets huvudmodul. | - **Class Names** - Klassnamnet är ett substantiv. Det *är* något, och är alltså inte ett verb (som *gör* något.) - **Don't Be Cute** - Klassen, [MyFavoriteThings](./src/js/my-favorite-things.js) delar bibliotekets namn, vilket är gjort för att vara "snärtigt", ja, till och med lite "säljigt", om man vill dra det så långt. MyFavoriteThings är därmed inte perfekt ur Clean Codes avseende, men jag tycker trots allt det hittar balansen mellan att vara fyndigt och informativt.
| **calculateAverageGrade** - metod som räknar ut medelvärdet av siffrorna i en array. | - **Pick One Word per Concept** - Utöver denna metod finns ytterligare ett antal som löser olika matematiska problem. Allesammans inleds med "calcultate", och därmed finns en röd tråd i det här konceptet. Det är lätt att se att metoderna hör ihop.
| **listAllTitles** - metod som loopar igenom en array med objekt och listar alltsammans. | - **Avoid disinformation** - Clean Code ringar in listor, som har en tendens att nyttjas – trots att det inte handlar om listor! I mitt fall handlar det dock om just en lista, men titeln är trots detta något missvisande då man kan tro att det bara är titlarna som listar, när i själva verket titlarna samt dess olika egenskaper listas.
| **minimumGrade** - betygets minimivärde, som deklareras i modulens constructor. | - **Use Searchable Names** - Egenskapen minimumGrade (eller maximumGrade, för den delen) hade kunnat heta exempelvis "min" (eller "max"). Men! Ett sådant namn hade varit svårt att söka efter. Chansen (eller risken...) att det finns flertalet begrepp som börjar med "min" är överhängande. 
| **validateArray** - Validerar om en array är en array, och om den innehåller siffror. | - **Method Names** - Liksom klasser är något som *är*, så är metoder något som *gör*. Samtliga av mina metoder gör saker, och har därmed verb i sig. Här "validerar" vi en array, vilket uttrycks klart och tydligt.
***
​
### Funktioner
​
| Metodnamn, förklaring | Reflektion och regler från Clean Code |      
| ---------------- |:-------------------------------------:|
| **filterByData** - Filtrerar beroende på två parametrar: datatyp, datavärde. | - **Small!** - Enligt Clean Code ska funktioner vara små. Jättesmå! Den här metoden är definitivt inte liten i sitt sammanhang, med sina 34 kodrader. Hur liten ska den vara? Hur kort är ett snöre? Det är svårt att dra gränsen, men då den här metoden är längst av alla förtjänar den att tänkas igenom. Kanske hade det gått att bryta ut den till tre, eller skriva om den för att göra den mer "allmän" snarare än att ha tre ut tre olika filtreringsmetoder.
| **convertGrade** - konverterar betyg i annan skala till ett betyg som är bibliotekets standard. | - **Do One Thing** - Clean Code är tydlig: funktioner ska göra en sak, och bara en. Den här metoden omvandlar ett betyg från tre olika skalor till bibliotekets standard. Det sker alltså tre olika uträkningar, tre saker. En logisk lösning hade varit att bryta ut dessa tre uträkningar till egna metoder, som kallas på från convertGrade. - **Switch Statements** - Boken är även tydlig med att switch-satser överlag tar upp väl mycket plats. Min utgångspunkt var att de gjorde saker tydligare, men enligt Clean Code är utrymme en tyngre faktor. En lösning hade kunnat vara att dölja switch-satserna från användaren.
| **calculateModeGrade** - räknar ut typvärdet hos en array. | - **Use Descriptive Names** - Funktionsnamn ska beskriva vad funktionen (eller metoden) gör. Att lägga ner – mycket! –  tid på namn lyfter Clean Code fram som en viktig faktor. Mitt exempel hette från början "getMode", men prefixet "calculate" blev mer konkret. Detta användes också i andra "calculate"-metoder, också de matematiska metoder.
| **findTitles** - söker efter en eller flera titlar baserad på argument. | - **Function Arguments** - Clean Code ser helst att vi undviker argument över huvud taget, och om vi inte kan detta: minimerar. findTitles behöver ha ett argument, då man ska kunna söka efter titlar i databasen. Men! Argument är svåra när det kommer till testning, då vi måste ta höjd för alla slags inskickade datatyper. Det gör det komplicerat, milt uttryckt.
| **getNumbers** - Listar alla titlar i databasen, med tillhörande egenskaper. | - **How Do You Write Functions Like This?** - Att det "fungerar" är givetvis A och O, men det kan enligt boken vara värt att skriva om sina funktioner; döpa om, strukturera, ta bort onödiga kontrollsatser. Exemplet gör en kopia av en array efter två egenskaper (grade, hours), och den gick jag igenom flera varv för att göra den så tydlig som möjligt. Här var det också viktigt, märkte jag i testningen, att kasta ett fel om det inte blev någon array.
​
## Laborationsreflektion
*Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken.* 

För ett år sedan var jag helt grön när det kom till programmering, och under första året låg i princip allt fokus på att få koden att *fungera*, medan det var mindre viktigt hur den såg ut och strukturerades. Det här nya perspektivet är därför välkommet. Nu handlar det också om att göra så att koden blir ren och tydlig för användare som kommer efter mig. Hur lyckas man med det?

Clean Code är definitivt en god ledsagare. Den får en att tänka till lite extra på saker man hittills bara gjort: klasser är substantiv (**Class Names**), medan metoder utgår från verb. När dessa blir tydliga regler är det svårare att vika av från dem. Likväl är det viktigt att hålla en röd tråd, och namnge därefter (**Pick One Word per Concept**). Matematiska metoder inleder jag exempelvis med prefixet "calculate".

Det kliar i fingrarna, och jag vill helst gå tillbaka till koden och göra om väldigt mycket utifrån bokens föreslagna regler. Samtidigt finns det också en nytta i att "låta stå" och reflektera över sina misstag. 

Medan jag köpte vissa saker rakt upp och ner, fanns det bitar som utmanade mig lite mer. Clean Code är tydlig med att metoder ska göra en enda sak (**Do One Thing**). Punkt. Jag tänkte tvärtom att större metoder fick ha hand om ett brett koncept. Tyckte det blev tydligare och mindre plottrigt, än vad som skulle varit fallet med många mindre metoder. Samtidigt förstår jag bokens poäng: tydlighet. Att bryta ut gör också att enkla metoder som gör en enda sak (och gör den bra) blir enklare att återanvända.

Jag håller inte med boken i alla avseenden, dock. Clean Code säger att switch-satser har en tendens att bli alldeles för stora (**Switch Statements**) – metoder ska ju vara små! (**Small!**) 

> It’s hard to make a small switch statement. Even a switch statement with only two cases is larger than I’d like a single block or function to be. It’s also hard to make a switch statement that does one thing. By their nature, switch statements always do N things.

Jag tycker att boken har en poäng, men också att tydlighet är viktigt. Jag tror det behövs en balans mellan att vara kortfattad och tydlig. Har läst kod som varit så kort att jag inte förstått vad som händer. I mina fall tyckte jag Switch-satserna premierade tydlighet. Å andra sidan hade jag kunnat bryta ut dem till egna metoder då satserna gjorde att metoderna gjorde mer än en sak. Kort sagt: har fått tänka till över min kod på ett helt nytt sätt. Det har gett mig väldigt mycket.