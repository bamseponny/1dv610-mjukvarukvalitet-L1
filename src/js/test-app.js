import { MyFavoriteThings } from './index.js'

const testApp = new MyFavoriteThings()

testApp.listAllTitles()
testApp.listByTimeSpan(2000, 2022)
testApp.findOneTitle('Last')

testApp.getAllGrades()

testApp.filterByData('grade', 3)

testApp.calculateAverage()
testApp.calculateMedian()
testApp.calculateMode()

testApp.gradeConverter(100, 28)
