/**
 * Module for the testApp.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

import { MyFavoriteThings } from './my-favorite-things.js'

const testApp = new MyFavoriteThings()

// Arguments to work with
const startYear = 2015
const endYear = 2020
const searchString = 'Last'
const releaseYearString = 'releaseYear'
const passedYear = 2022
const formatString = 'format'
const passedFormat = 'Playstation 4'
const grade = 'grade'
const passedGrade = 3
const hoursString = 'hours'
const gradesString = 'grades'
const oldMax = 100
const oldGrade = 28

// List and sort all titles in library
/* console.log(testApp.listAllLibraryObjects())
testApp.printAllLibraryObjects() */

// Find titles in library by time span
/* console.log(testApp.listByTimeSpan(startYear, endYear))
testApp.printByTimeSpan(startYear, endYear) */

// Find titles in library by passed string
/* console.log(testApp.findLibraryObjects('Last')) */
/* testApp.printObjectsOfSearchedLibrary('Last') */

// Filter data in library
/* console.log(testApp.filterByFormat('Playstation 5'))
console.log(testApp.filterByReleaseYear(2022))
console.log(testApp.filterByGrade(4))
testApp.printFilteredData(formatString, passedFormat) */

// Time statistics of library
/* console.log(testApp.getHourNumbers())
console.log(testApp.calculateTotalHoursSpent())
console.log(testApp.calculateNumberOfDaysSpent())
console.log(testApp.calculateAverageHoursSpent())
console.log(testApp.calculateMinMaxHours())
testApp.PrintTimeStatistics() */

// Grade statistics of the library
console.log(testApp.getGradeNumbers())
console.log(testApp.calculateAverageGrade())
console.log(testApp.calculateMedianGrade())
console.log(testApp.calculateModeGrade())
testApp.printGradeStatistics()

// Convert an old grade to match the libraries' scope
console.log(testApp.convertGrade(oldMax, oldGrade))
testApp.printConvertedGrade(oldMax, oldGrade)
