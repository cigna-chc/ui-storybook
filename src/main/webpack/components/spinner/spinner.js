/**
 * Spinner class
 */

export default class Spinner {
  constructor(el) {
    this.el = el;
  }

  static init(el) {
    return new Spinner(el);
  }
}
