# Reflektion
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