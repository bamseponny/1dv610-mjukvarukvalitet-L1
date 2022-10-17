# My Favorite Things

A library aimed towards a **developer** who wants to sort and filter an array of objects with a certain favorite thing (for examble: books, films, video games). As a **developer** you are recommended to check out the [DEVELOPER](/DEVELOPER.md) file, where you'll find the project's vision, requirements and test report. The [REFLECTION](/REFLECTION.md) contains the code quality requirements and reflections aimed towards the **examinator**. An application, laboratory 2, which uses this library can also be found on [Github](https://github.com/bamseponny/1dv610-mjukvarukvalitet-L2). This should be of interest for both the **examinator** and **developers**.

## Description

Very warm welcome to the **JavaScript** library **My Favorite Things**. With this library you can take the favorite thing of your choice in one certain category – how about books, films, video games or tv shows? – and collect them in a library where you can sort them, for example, alphabetically, by grade and discover statistics about the time you have spent with the things.

You are of course free to change the library that it better suits your needs. If you have suggestions for wider changes see below (contribution).

## Installation

1. Copy the repository via [GitHub](https://github.com/bamseponny/1dv610-mjukvarukvalitet-L1), `https://github.com/bamseponny/1dv610-mjukvarukvalitet-L1.git`
2. Open a terminal window in a folder where you want to clone the repositorium.
3. Input the command `git clone https://github.com/bamseponny/1dv610-mjukvarukvalitet-L1.git` to clone the project.
4. Open an integrated development environment (IDE) of your choice.
5. Run the commando `npm install` to install dependecies.
6. Run the commando `npm start` to try out the application via the test app (more info below).

## Usage

The idea with the library is to **arrange, filter and keep track on certain collections**. You can for example create web applications where you show off the collection in a number of ways.

It's really up to you to pick a suitable collection. In the code example below you can see a collection of video games. This have been produced in the *database.js* file. This array of objects are you supposed to replace with your own collection. In this example we only have one object (one video game in this particular instance).

```bash
export const library = [{
    title: 'Super Mario Bros.',
    format: 'Nintendo Entertainment System',
    releaseYear: 1987,
    genre: 'Platform',
    series: 'Super Mario',
    grade: 4
  }]
```

After producing your first iteration of the library (which can include one to many objects) this will be imported by the library's main module, the *MyFavoriteThings.js* class. By calling the different methods via the *test-app.js* class you can arrange and filter the collection in a number of ways. This module is great for testing your library. However, when working with your own data it is preferable to import the main module.

### Method examples

***

- List all titles in the console.

```bash
favoriteGames.printAllLibraryObjects()
```

List the complete database of favorite things in alphabetical order.

```bash
Eiyuden Chronicle: Rising *** FORMAT: Playstation 5 *** RELEASE YEAR: 2022 *** GRADE: 3 of 5 *** PLAY TIME: 20 hours
Enslaved: Odyssey to the West *** FORMAT: Xbox 360 *** RELEASE YEAR: 2010 *** GRADE: 4 of 5 *** PLAY TIME: 36 hours
Horizon Forbidden West *** FORMAT: Playstation 5 *** RELEASE YEAR: 2022 *** GRADE: 5 of 5 *** PLAY TIME: 88 hours
```

***

- List by time span

```bash
console.log(favoriteGames.listByTimeSpan(2015, 2020))
```
Get all favorite things from a certain time span.

```bash
[
  {
    title: 'The Last of Us Part II',
    format: 'Playstation 4',        
    releaseYear: 2020,
    genre: 'Action',
    series: 'The Last of Us',       
    grade: 4,
    hoursPlayed: 30
  },
  {
    title: 'Ratchet & Clank',       
    format: 'Playstation 4',
    releaseYear: 2016,
    genre: 'Platform',
    series: 'Ratchet & Clank',
    grade: 4,
    hoursPlayed: 16
  }
]
```

***

- Filter by a certain grade

```bash
favoriteGames.filterByGrade(4)
```
Filter the favorite things in the library depending on the grade and grade value (3 in this case).

```bash
[
  {
    title: 'Star Wars: Knights of the Old Republic',
    format: 'Xbox',
    releaseYear: 2013,
    genre: 'RPG',
    series: 'Star Wars: Knights of the Old Republic',
    grade: 3,
    hoursPlayed: 88
  },
  {
    title: 'Syberia',
    format: 'Pc',
    releaseYear: 2002,
    genre: 'Adventure',
    series: '',
    grade: 3,
    hoursPlayed: 10
  }
]
```

***

- Calculate average

```bash
favoriteGames.calculateAverageGrade()
```
Calculates the average of an array with numbers, the grades in this case.

```bash
3.67
```

***

- Convert old grade and print new grade

```bash
console.log(favoriteGames.convertGrade(28, 100)
```
Convert a grade of an external scope to a grade which suits the internal scope. In this example we convert 28 out of 100 to a new grade, with maximum value at 5.

```bash
Old grade, 28 with maximum of 100, is converted to 1 out of 5.
```

## Contributing

Please reach out by opening an issue on Github if you would like to make any major changes to the library's source code. We're creating this library together.

## 1dv610-mjukvarukvalitet-L1

Assignment for the course **1DV610** at the **Linnaeus University**.

## License

[MIT](https://choosealicense.com/licenses/mit/)