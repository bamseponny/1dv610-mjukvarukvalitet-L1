import videoGameLibrary from './database.js'

/**
 * List the complete database of video games.
 */
function listDatabase () {
  console.log(videoGameLibrary)
}

/**
 * Filter the games in library depending on the chosen grade.
 *
 * @param {number} grade - Chosen grade.
 */
function filterGrade (grade) {
  if (grade < 1 || grade > 5) {
    console.log('Please choose a grade between 1 and 5.')
  } else {
    const filterTheGames = videoGameLibrary.filter((gameLibrary) => gameLibrary.grade === grade)

    filterTheGames.length === 0 ? (console.log(`No games to show with the grade ${grade}.`)) : (console.log(filterTheGames))
  }
}

/* const filterGrade = testObject.filter((testObject) => testObject.grade === 3)

console.log(filterGrade) */

export { listDatabase, filterGrade }
