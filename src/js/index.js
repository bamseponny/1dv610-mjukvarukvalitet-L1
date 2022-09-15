/**
 * Module for the MyFavouriteGames class.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

import videoGameLibrary from './database.js'

/**
 * Represents a MyFavouriteGames class.
 *
 * @class My Favourite Games
 */
export class MyFavouriteGames {
  /**
   * Creates an instance of MyFavouriteGames.
   */
  constructor () {
    this.minimumGrade = 1
    this.maximumGrade = 5
  }

  /**
   * List the complete database of video games.
   */
  listDatabase () {
    console.log(videoGameLibrary, '\n')
  }

  /**
   * Get all games from a certain time span.
   *
   * @param {number} startYear - Chosen start year.
   * @param {number} endYear - Chosen end year.
   */
  listGamesByTimeSpan (startYear, endYear) {
    const titlesOfTimeSpan = []
    for (const element of videoGameLibrary) {
      if (element.releaseYear >= startYear && element.releaseYear <= endYear) {
        /* console.log(element.title) */
        titlesOfTimeSpan.push(element.title)
      }
    }
    console.log(`The games in your library between years ${startYear} and ${endYear} are ${titlesOfTimeSpan.join(', ')}.`)
  }

  /**
   * Filter the games in the library depending on the chosen grade.
   * Note: Although the grade scope can differ with your data the default is set to 1-5.
   *
   * @param {number} grade - Chosen grade.
   */
  filterGrade (grade) {
    if (grade < this.minimumGrade || grade > this.maximumGrade || typeof grade !== 'number') {
      console.log(`Please choose a grade between ${this.minimumGrade} and ${this.maximumGrade}.\n`)
    } else {
      const filterTheGames = videoGameLibrary.filter((gameLibrary) => gameLibrary.grade === grade)

      if (filterTheGames.length === 0) {
        console.log(`No games to show with the grade ${grade}.\n`)
      } else {
        const titles = filterTheGames.map(grade => grade.title).sort()
        const resultString = titles.join(', ')
        console.log(`The games with the grade ${grade} in your collection are ${resultString}.\n`)
      }
    }
  }

  /**
   * Filter out the pure grades (numbers in a certain scope, 1-5, 1-100, etc).
   * A function which primarly is being used by other functions.
   *
   * @returns {number[]} numbers - Returns an array of numbers.
   */
  getGrades () {
    const gradesArray = videoGameLibrary.map(element => element.grade)
    return gradesArray
  }

  /**
   * Returns the average of an array with numbers.
   */
  getAverage () {
    const averageArray = this.getGrades()
    const average = averageArray.reduce((a, b) => (a + b)) / averageArray.length
    console.log(`The average of the grade is ${Math.round(average * 100) / 100}.\n`)
  }

  /**
   * Convert a grade of an external scope to a grade which suits the internal scope.
   * The grades 1-100, 1-10 and F-A are supported for conversion.
   *
   * @param {*} oldMax - The max of the old grade.
   * @param {*} oldGrade - The old grade, to be converted.
   */
  gradeConverter (oldMax, oldGrade) {
    switch (oldMax) {
      case 100: {
        const newGrade = Math.round(oldGrade / 100 * 5)

        console.log(`Old grade, ${oldGrade} with maximum of ${oldMax}, is converted to ${newGrade} out of ${this.maximumGrade}.\n`)
        break
      }
      case 10: {
        const newGrade = Math.round(oldGrade / 10 * 5)

        console.log(`Old grade, ${oldGrade} with maximum of ${oldMax}, is converted to ${newGrade} out of ${this.maximumGrade}.\n`)
        break
      }
      case 'A': {
        const transitionGrade = oldGrade === 'F' ? oldGrade = 'E' : oldGrade

        const letterArray = ['F', 'E', 'D', 'C', 'B', 'A']
        const newGrade = letterArray.indexOf(transitionGrade)

        console.log(`Old grade, ${oldGrade} with maximum of ${oldMax}, is converted to ${newGrade} out of ${this.maximumGrade}.\n`)
        break
      }
      default:
        console.log('This grade scope is not supported.\n')
    }
  }

  // Median
  // Mode
  // Serie! Filter.
  // Validera indata.
  // Loopa igenom och hitta efter genre. Tabell!
  // Plocka ut spel baserade på tidsspann.
  // Loopa igenom och hitta länder. Hur många? Vilka spel? KÄNNS INTE SÅ KUL?!
}
