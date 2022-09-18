# My Favorite Things

## Description

Very warm welcome to the **JavaScript** library **My Favorite Things**. With this library you can take the favorite thing of your choice in one certain category – how about books, films, video games or tv shows? – and collect them in a library where you can sort them, for example, alphabetically and by grade.

## Installation

Open a termial in the application folder and input *"npm install"*.

```bash
npm install
```

## Usage

The idea with the library is to **arrange, filter and keep track on certain collections**. You can for example create web applications where you show off, sort and filter the collection in a number of ways.

It's really up to you to pick a suitable collection. In the code examples below you can see a collection of video games. This have been produced in the *database.js* file. This array of objects are you supposed to replace with your own collection. In this example we only have one object (a.k.a. one video game).

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

After producing your first iteration of the library (which can include one to many objects) this will be imported by the library's main module, the *MyFavoriteThings.js* class. By calling the different methods via the *test-app.js* class you can arrange and filter the collection in a number of ways. However, when working with your own data it is preferable to import the main module.

### Method examples

- listAllTitles

```bash
testApp.listAllTitles()
```

List the complete database of favorite things in alphabetical order.

## Contributing

Please reach out by opening an issue on Github if you would like to make any major changes to the library's source code. 

## 1dv610-mjukvarukvalitet-L1

Assignment for the course **1DV610** at the **Linnaeus University**.

## License

[MIT](https://choosealicense.com/licenses/mit/)