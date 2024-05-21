/**
 * SkipToMainContent class
 */

export default class SkipToMainContent {
  constructor(el) {
    this.el = el;
  }

  static init(el) {
    return new SkipToMainContent(el);
  }
}
