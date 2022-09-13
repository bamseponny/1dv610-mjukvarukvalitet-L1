import videoGameLibrary from './database.js'

/**
 * List the complete database of video games.
 */
function listDatabase () {
  console.log(videoGameLibrary)
}

/* const filterGrade = testObject.filter((testObject) => testObject.grade === 3)

console.log(filterGrade) */

export { listDatabase }
