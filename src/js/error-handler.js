/**
 * Module for the error handler.
 *
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 */

export class ErrorHandler extends Error {
  /**
   * @param {*} errorMessage - the error message.
   */
  constructor (errorMessage) {
    super(errorMessage)
    this.name = 'Error'
  }
}
