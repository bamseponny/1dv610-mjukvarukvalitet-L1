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
    console.table(videoGameLibrary)
    console.log('\n')
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
   * Filter out the pure grades (numbers in a certain scope, 1-5, 1-100, etc) and sort them.
   * A function which primarly is being used by other functions.
   *
   * @returns {number[]} numbers - Returns an array of numbers.
   */
  getGrades () {
    let gradesArray = Array.from(videoGameLibrary)
    this.validateArray(gradesArray)
    gradesArray = videoGameLibrary.map(element => element.grade)
    return gradesArray.sort((a, b) => a - b)
  }

  /**
   * Calculates the average of an array with numbers.
   */
  calculateAverage () {
    const averageArray = this.getGrades()
    const average = averageArray.reduce((a, b) => (a + b)) / averageArray.length
    console.log(`The average of the grade is ${Math.round(average * 100) / 100}.\n`)
  }

  /**
   * Calculates the median of an array with numbers.
   */
  calculateMedian () {
    const medianArray = this.getGrades()
    const medianIndex = Math.floor(medianArray.length / 2)

    const median = medianArray.length % 2 === 1 ? medianArray[medianIndex] : (medianArray[medianIndex - 1] + medianArray[medianIndex]) / 2
    console.log(`The median of the grade is ${median}.`)
  }

  /**
   * Calculates the mode of an array with numbers.
   */
  calculateMode () {
    const modeArray = this.getGrades()

    const freq = {}
    let maxFreq = 0
    const modes = []

    for (const num in modeArray) {
      freq[modeArray[num]] = (freq[modeArray[num]] || 0) + 1

      if (freq[modeArray[num]] > maxFreq) {
        maxFreq = freq[modeArray[num]]
      }
    }

    for (const key in freq) {
      if (freq[key] === maxFreq) {
        modes.push(key)
      }
    }

    const parsedModes = modes.map(string => Number(string))

    if (parsedModes.length === 1) {
      console.log(`The most frequent value of all the grades is ${parsedModes}.\n`)
    } else if (parsedModes.length > 1) {
      console.log(`The most frequent values of all the grades are ${parsedModes.join(', ')}.\n`)
    }
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

  /**
   * Validate if the array satisfies the demands.
   *
   * @param {number[]} array - Array of objects.
   */
  #validateArray (array) {
    if (!Array.isArray(array)) {
      throw TypeError('The passed argument is not an array.')
    } else if (array.length === 0) {
      throw Error('The passed array contains no elements.')
    }
  }

  // Serie! Filter.
  // Validera indata.
  // Loopa igenom och hitta efter genre. Tabell!
  // Plocka ut spel baserade på tidsspann.
}
