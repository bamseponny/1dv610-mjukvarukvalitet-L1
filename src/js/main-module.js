import videoGameLibrary from './database.js'

/**
 * List the complete database of video games.
 */
function listDatabase () {
  console.log(videoGameLibrary)
}
/**
 * Filter the games in the library depending on the chosen grade.
 *
 * @param {number} grade - Chosen grade.
 */
function filterGrade (grade) {
  if (grade < 1 || grade > 5 || typeof grade !== 'number') {
    console.log('Please choose a grade between 1 and 5.')
  } else {
    const filterTheGames = videoGameLibrary.filter((gameLibrary) => gameLibrary.grade === grade)

    if (filterTheGames.length === 0) {
      console.log(`No games to show with the grade ${grade}.`)
    } else {
      const titles = filterTheGames.map(grade => grade.title).sort()
      const resultString = titles.join(', ')
      console.log(`The games with the grade ${grade} in your collection are ${resultString}.`)
    }
  }
}

export { listDatabase, filterGrade }
