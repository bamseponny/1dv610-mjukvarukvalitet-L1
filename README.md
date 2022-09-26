# My Favorite Things

## Description

Very warm welcome to the **JavaScript** library **My Favorite Things**. With this library you can take the favorite thing of your choice in one certain category – how about books, films, video games or tv shows? – and collect them in a library where you can sort them, for example, alphabetically, by grade and discover statistics about the time you have spent with the things.

You are of course free to change the library that it better suits your needs. If you have suggestions for wider changes see below (contribution).

## Installation

Open a termial in the application folder and input *"npm install"*.

```
npm install
```

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
testApp.printAllTitles()
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
console.log(favoriteBooks.listByTimeSpan(1850, 2000))
```
Get all favorite things from a certain time span.

```bash
[
  'The Lord of the Rings',
  'Moby Dick',
  'Harry Potter and the Goblet of Fire'
]
```

***

- Filter and print by data

```bash
favoriteGames.filterByData('grade', 4)
```
Filter the favorite things in the library depending on the chosen data type and data value (the grade 4 in this case).

```bash
The video games with the grade 4 in your collection are Enslaved: Odyssey to the West, Paper Mario, The Last of Us Part I, The Last of Us Part II.
```

***

- Calculate average

```bash
favoriteTvShows.calculateAverage()
```
Calculates the average of an array with numbers (the grades in this case).

```bash
3.67.
```

***

- Convert old grade and print new grade

```bash
console.log(favoriteFilms.convertGrade(28, 100)
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