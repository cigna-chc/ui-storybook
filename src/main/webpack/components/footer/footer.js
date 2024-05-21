/**
 * Footer class
 */
export default class Footer {
  constructor(el) {
    this.el = el;
  }

  static init(el) {
    return new Footer(el);
  }
}
