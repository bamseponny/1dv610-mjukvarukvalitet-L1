/**
 * Module for the MyFavoriteThings class.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

import library from './test-database.js'

export class MyFavoriteThings {
  constructor () {
    this.minimumGrade = 1
    this.maximumGrade = 5
    this.MyFavoriteThings = 'video games'
  }

  /**
   * @returns {Array[]} - Returns an array of sorted objects with the favorite things.
   */
  listAllLibraryObjects () {
    this.validateArray(library)
    library.sort((a, b) => {
      const titleA = a.title
      const titleB = b.title
      let compare

      titleA.toUpperCase() < titleB.toUpperCase() ? (compare = -1) : (compare = 1)
      return compare
    })
    return library
  }

  printAllLibraryObjects () {
    this.listAllLibraryObjects()
    console.log(`A complete list of ${this.MyFavoriteThings} in the library:`)
    library.forEach((element) => {
      console.log(`${element.title} *** FORMAT: ${element.format} *** RELEASE YEAR: ${element.releaseYear} 
          *** GRADE: ${element.grade} of ${this.maximumGrade} *** PLAY TIME: ${element.hoursPlayed} hours`)
    })
  }

  /**
   * @param {number} startYear - Chosen start year.
   * @param {number} endYear - Chosen end year.
   * @returns {Array[]} - Returns an array of objects with found objects.
   */
  listByTimeSpan (startYear, endYear) {
    const filteredLibraryByTimeSpan = library.filter((listOfThings) => (listOfThings.releaseYear >= startYear) &&
      (listOfThings.releaseYear <= endYear))
    this.validateArray(filteredLibraryByTimeSpan)

    return filteredLibraryByTimeSpan
  }

  /**
   * @param {number} startYear - Chosen start year.
   * @param {number} endYear - Chosen end year.
   */
  printByTimeSpan (startYear, endYear) {
    const objectsOfTimeSpan = (this.listByTimeSpan(startYear, endYear))
    this.validateArray(objectsOfTimeSpan)

    const titlesOfTimeSpan = []

    objectsOfTimeSpan.forEach((element) => {
      titlesOfTimeSpan.push(element.title)
    })

    console.log(`The ${this.MyFavoriteThings} in your library between years ${startYear} and ${endYear} are:`)
    console.log(`${titlesOfTimeSpan.sort().join(', ')}`)
  }

  /**
   * @param {string} searchString - Passed string.
   * @returns {Array[]} - Returns an array of objects with found objects.
   */
  findLibraryObjects (searchString) {
    const searchedLibrary = library.filter((listOfThings) => (listOfThings.title.toLowerCase().includes(searchString.toLowerCase())))

    return searchedLibrary
  }

  /**
   * @param {string} searchString - Passed string.
   */
  printObjectsOfSearchedLibrary (searchString) {
    const arrayOfObjects = this.findLibraryObjects(searchString)
    const arrayOfTitles = []

    arrayOfObjects.forEach((element) => {
      arrayOfTitles.push(element.title)
    })

    if (arrayOfObjects.length < 1) {
      console.log(`No titles in the library  to show with passed "${searchString}".`)
    } else if (arrayOfObjects.length === 1) {
      console.log(`The title found in the library with passed "${searchString}" is: ${arrayOfTitles}.`)
    } else {
      console.log(`The titles found in the library with passed "${searchString}" is: ${arrayOfTitles.join(', ')}.`)
    }
  }

  /**
   * @param {*} format - Chosen format string.
   * @returns {Array[]} - Returns an array of objects with found objects.
   */
  filterByFormat (format) {
    if (format !== undefined) {
      const filteredLibrary = library.filter((listOfThings) => listOfThings.format === format)
      this.validateArray(filteredLibrary)

      return filteredLibrary
    } else {
      throw Error('Please pass a valid format type.')
    }
  }

  /**
   * @param {*} year - Chosen year number.
   * @returns {Array[]} - Returns an array of objects with found objects.
   */
  filterByReleaseYear (year) {
    if (year !== undefined) {
      const filteredLibrary = library.filter((listOfThings) => listOfThings.releaseYear === year)
      this.validateArray(filteredLibrary)

      return filteredLibrary
    } else {
      throw Error('Please pass a valid year.')
    }
  }

  /**
   * @param {*} grade - Chosen grade number.
   * @returns {Array[]} - Returns an array of objects with found objects.
   */
  filterByGrade (grade) {
    if (grade < this.minimumGrade || grade > this.maximumGrade || typeof grade !== 'number') {
      throw new Error(`Please choose a grade between ${this.minimumGrade} and ${this.maximumGrade}.`)
    } else if (grade > this.minimumGrade && grade < this.maximumGrade) {
      const filteredLibrary = library.filter((listOfThings) => listOfThings.grade === grade)
      this.validateArray(filteredLibrary)

      return filteredLibrary
    } else {
      throw Error('Please pass a valid grade.')
    }
  }

  /**
   * @returns {number[]} - Returns an array of hour numbers.
   */
  getHourNumbers () {
    let numberArray = Array.from(library)
    this.validateArray(numberArray)
    numberArray = library.map(dataBase => dataBase.hoursPlayed)
    const sortedArrayOfNumbers = numberArray.sort((num1, num2) => num1 - num2)
    return sortedArrayOfNumbers
  }

  /**
   * @returns {number} number - Returns a number.
   */
  calculateTotalHoursSpent () {
    const hourArray = this.getHourNumbers()
    const totalHours = hourArray.reduce((num1, num2) => (num1 + num2))

    return totalHours
  }

  calculateNumberOfDaysSpent () {
    const hourArray = this.getHourNumbers()
    const daysSpent = Math.round((hourArray.reduce((num1, num2) => (num1 + num2))) / 24)

    return daysSpent
  }

  /**
   * @returns {number} number - Returns a number.
   */
  calculateAverageHoursSpent () {
    const hourArray = this.getHourNumbers()
    const averageHours = Math.round(hourArray.reduce((num1, num2) => (num1 + num2)) / hourArray.length)

    return averageHours
  }

  /**
   * @returns {number[]} numbers - Returns an array of numbers.
   */
  calculateMinMaxHours () {
    const hourArray = this.getHourNumbers()
    const minMaxArray = []

    const min = hourArray[0]
    const max = hourArray[hourArray.length - 1]
    minMaxArray.push(min, max)

    return minMaxArray
  }

  /**
   * Print time statistics of the items in the collection.
   */
  PrintTimeStatistics () {
    const numberOfHours = this.calculateTotalHoursSpent()
    const numberOfDays = this.calculateNumberOfDaysSpent()
    const averageHours = this.calculateAverageHoursSpent()
    const minMaxHours = this.calculateMinMaxHours()

    console.log(`You've spent a total of ${numberOfHours} hours, approximately ${numberOfDays} days, with your collection of ${this.MyFavoriteThings}. 
    The average time spent with each individual library object is ${averageHours} hours.
    The least amount of time you've spent on an item is ${minMaxHours[0]} hours, and the most time is ${minMaxHours[1]} hours.`)
  }

  /**
   * @returns {number[]} - Returns an array of grade numbers.
   */
  getGradeNumbers () {
    let numberArray = Array.from(library)
    this.validateArray(numberArray)
    numberArray = library.map(dataBase => dataBase.grade)
    const sortedArrayOfNumbers = numberArray.sort((num1, num2) => num1 - num2)
    return sortedArrayOfNumbers
  }

  /**
   * @returns {number} number - Returns a number.
   */
  calculateAverageGrade () {
    const gradeArray = this.getGradeNumbers()

    let total = 0
    for (let i = 0; i < gradeArray.length; i++) {
      total = total + gradeArray[i]
    }

    let average = total / gradeArray.length
    average = Math.round(average * 100) / 100

    return average
  }

  /**
   * @returns {number} number - Returns a number.
   */
  calculateMedianGrade () {
    const medianArray = this.getGradeNumbers()
    let median

    if (medianArray.length % 2 !== 0) {
      const medianIndex = Math.floor(medianArray.length / 2)
      median = medianArray[medianIndex]
    } else {
      const medianIndex = Math.floor(medianArray.length / 2)
      median = (medianArray[medianIndex - 1] + medianArray[medianIndex]) / 2
    }
    return median
  }

  /**
   * @returns {number} number - Returns one or several numbers.
   */
  calculateModeGrade () {
    const modeArray = this.getGradeNumbers()

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

    return parsedModes
  }

  printGradeStatistics () {
    const gradeAverage = this.calculateAverageGrade()
    const gradeMedian = this.calculateMedianGrade()
    const gradeMode = this.calculateModeGrade()

    console.log(`The average of the grade is ${Math.round(gradeAverage * 100) / 100}.`)
    console.log(`The median of the grade is ${gradeMedian}.`)
    if (gradeMode.length === 1) {
      console.log(`The most frequent value of all the grades is ${gradeMode}.`)
    } else if (gradeMode.length > 1) {
      console.log(`The most frequent values of all the grades are ${gradeMode.join(', ')}.`)
    }
  }

  /**
   * The grades 1-100, 1-10 and F-A are supported for conversion.
   *
   * @param {*} oldMax - The max of the old grade.
   * @param {*} oldGrade - The old grade, to be converted.
   * @returns {number} - Returns a converted grade.
   */
  convertGrade (oldMax, oldGrade) {
    if (oldMax === 100) {
      const newGrade = Math.round(oldGrade / 100 * 5)
      return newGrade
    } else if (oldMax === 10) {
      const newGrade = Math.round(oldGrade / 10 * 5)
      return newGrade
    } else if (oldMax === 'A') {
      const transitionGrade = oldGrade === 'F' ? oldGrade = 'E' : oldGrade
      const letterArray = ['F', 'E', 'D', 'C', 'B', 'A']
      const newGrade = letterArray.indexOf(transitionGrade)
      return newGrade
    } else {
      throw new Error('This grade scope is not supported.')
    }
  }

  /**
   * The grades 1-100, 1-10 and F-A are supported for conversion.
   *
   * @param {*} oldMax - The max of the old grade.
   * @param {*} oldGrade - The old grade, to be converted.
   */
  printConvertedGrade (oldMax, oldGrade) {
    const newGrade = this.convertGrade(oldMax, oldGrade)
    console.log(`Old grade, ${oldGrade} with maximum of ${oldMax}, is converted to ${newGrade} out of ${this.maximumGrade}.`)
  }

  /**
   * @param {number[]} array - Array to be validated.
   */
  validateArray (array) {
    if (!Array.isArray(array)) {
      throw new Error('The passed argument is not an array.')
    } else if (!array.length) {
      throw new Error('The passed array contains no elements.')
    }
  }
}
