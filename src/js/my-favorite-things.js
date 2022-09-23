/**
 * Module for the MyFavoriteThings class.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

import library from './database.js'

/**
 * Represents a MyFavoriteThings class.
 *
 * @class My Favorite Things
 */
export class MyFavoriteThings {
  /**
   * Creates an instance of MyFavoriteThings.
   */
  constructor () {
    this.minimumGrade = 1
    this.maximumGrade = 5
    this.myfavouriteThings = 'video games'
  }

  /**
   * List the complete database of favorite things in alphabetical order.
   *
   */
  listAllTitles () {
    library.sort((a, b) => {
      const titleA = a.title
      const titleB = b.title
      let compare

      titleA.toUpperCase() < titleB.toUpperCase() ? (compare = -1) : (compare = 1)
      return compare
    })

    console.log(`A complete list of ${this.myfavouriteThings} in the library:`)
    library.forEach((element) => {
      console.log(`${element.title} *** FORMAT: ${element.format} *** RELEASE YEAR: ${element.releaseYear} *** GRADE: ${element.grade} of ${this.maximumGrade} *** PLAY TIME: ${element.hoursPlayed} hours`)
    })
    console.log('\n')
  }

  /**
   * Get all favorite things from a certain time span.
   *
   * @param {number} startYear - Chosen start year.
   * @param {number} endYear - Chosen end year.
   */
  listByTimeSpan (startYear, endYear) {
    const titlesOfTimeSpan = []
    for (const element of library) {
      if (element.releaseYear >= startYear && element.releaseYear <= endYear) {
        titlesOfTimeSpan.push(element.title)
      }
    }
    console.log(`The ${this.myfavouriteThings} in your library between years ${startYear} and ${endYear} are:`)
    console.log(`${titlesOfTimeSpan.sort().join(', \n')} \n`)
  }

  /**
   * Find titles in the library based on a passed string.
   *
   * @param {string} title - Passed string.
   */
  findTitles (title) {
    const arrayOfTitles = []
    for (let i = 0; i < library.length; i++) {
      if (library[i].title.toLowerCase().includes(title.toLowerCase())) {
        arrayOfTitles.push(library[i].title)
      }
    }
    if (arrayOfTitles.length < 1) {
      console.log(`No titles in the library  to show with passed "${title}".\n`)
    } else if (arrayOfTitles.length === 1) {
      console.log(`The title found in the library with passed "${title}" is: ${arrayOfTitles}.\n`)
    } else {
      console.log(`The titles found in the library with passed "${title}" is: ${arrayOfTitles.join(', ')}.\n`)
    }
  }

  /**
   * Filter the favorite things in the library depending on the chosen data type and data value.
   *
   * @param {string} dataType - Chosen data type.
   * @param {*} dataValue - Chosen data value.
   */
  filterByData (dataType, dataValue) {
    if (dataType !== undefined) {
      switch (dataType) {
        case 'format': {
          const filterTheLibrary = library.filter((listOfThings) => listOfThings.format === dataValue)

          if (!filterTheLibrary.length) {
            console.log(`No ${this.myfavouriteThings} of this ${dataType}.\n`)
          } else {
            const formatCounter = filterTheLibrary.map(format => format.title).sort()
            const resultString = formatCounter.join(', ')
            console.log(`The ${this.myfavouriteThings} on ${dataValue} in your collection are ${resultString}.\n`)
          }
          break
        }
        case 'releaseYear': {
          const filterTheLibrary = library.filter((listOfThings) => listOfThings.releaseYear === dataValue)

          if (!filterTheLibrary.length) {
            console.log(`No ${this.myfavouriteThings} from this ${dataType.slice(7, 11).toLowerCase()} to show.\n`)
          } else {
            const formatCounter = filterTheLibrary.map(format => format.title).sort()
            const resultString = formatCounter.join(', ')
            console.log(`The ${this.myfavouriteThings} from ${dataValue} in your collection are ${resultString}.\n`)
          }
          break
        }
        case 'grade': {
          if (dataValue < this.minimumGrade || dataValue > this.maximumGrade || typeof dataValue !== 'number') {
            console.log(`Please choose a grade between ${this.minimumGrade} and ${this.maximumGrade}.\n`)
          } else {
            const filterTheThings = library.filter((listOfThings) => listOfThings.grade === dataValue)

            if (!filterTheThings.length) {
              console.log(`No ${this.myfavouriteThings} to show with the grade ${dataValue}.\n`)
            } else {
              const titles = filterTheThings.map(grade => grade.title).sort()
              const resultString = titles.join(', ')
              console.log(`The ${this.myfavouriteThings} with the grade ${dataValue} in your collection are ${resultString}.\n`)
            }
          }
          break
        }
        default:
          console.log('This data type is not supported.\n')
      }
    } else {
      throw Error('Please pass a valid data type.')
    }
  }

  /**
   * Filter out the pure grades (numbers in a certain scope, 1-5, 1-100, etc) and sort them.
   *
   * @returns {number[]} numbers - Returns an array of numbers.
   */
  getAllGrades () {
    let gradesArray = Array.from(library)
    this.validateArray(gradesArray)
    gradesArray = library.map(dataBase => dataBase.grade)
    return gradesArray.sort((num1, num2) => num1 - num2)
  }

  /**
   * Filter out the pure hours and sort them.
   *
   * @returns {number[]} numbers - Returns an array of numbers.
   */
  getAllPlayHours () {
    let hourArray = Array.from(library)
    this.validateArray(hourArray)
    hourArray = library.map(dataBase => dataBase.hoursPlayed)
    return hourArray.sort((num1, num2) => num1 - num2)
  }

  /**
   * Calculates the average of an array with numbers.
   */
  calculateAverage () {
    const averageArray = this.getAllGrades()
    let total = 0

    for (let i = 0; i < averageArray.length; i++) {
      total = total + averageArray[i]
    }

    const average = total / averageArray.length

    console.log(`The average of the grade is ${Math.round(average * 100) / 100}.\n`)
  }

  /**
   * Calculates the median of an array with numbers.
   */
  calculateMedian () {
    const medianArray = Array.from(this.getAllGrades())
    let median

    if (medianArray.length % 2 !== 0) {
      const medianIndex = Math.floor(medianArray.length / 2)
      median = medianArray[medianIndex]
    } else {
      const medianIndex = Math.floor(medianArray.length / 2)
      median = (medianArray[medianIndex - 1] + medianArray[medianIndex]) / 2
    }

    console.log(`The median of the grade is ${median}.\n`)
  }

  /**
   * Calculates the mode of an array with numbers.
   * Code credit: my own solution in 1DV025, assignment A2.
   */
  calculateMode () {
    const modeArray = Array.from(this.getAllGrades())

    const freq = {}
    let maxFreq
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
  convertGrade (oldMax, oldGrade) {
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
  validateArray (array) {
    if (!Array.isArray(array)) {
      throw new Error('The passed argument is not an array.')
    } else if (!array.length) {
      throw new Error('The passed array contains no elements.')
    }
  }
}
