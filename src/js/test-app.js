/**
 * Module for the testApp.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

import { MyFavoriteThings } from './my-favorite-things.js'

const testApp = new MyFavoriteThings()

testApp.listAllTitles()
testApp.listByTimeSpan(2015, 2020)
testApp.findTitles('Part')

testApp.getAllGrades()

testApp.filterByData('grade', 4)

testApp.calculateAverage()
testApp.calculateMedian()
testApp.calculateMode()

testApp.convertGrade(100, 28)
