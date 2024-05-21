/**
 * HeroV2 class
 */

export default class HeroV2 {
  constructor(el) {
    this.el = el;
    this.removeImageLoadingLazyState();
  }
  
  static init(el) {
    return new HeroV2(el);
  }
  
  // eslint-disable-next-line class-methods-use-this
  removeImageLoadingLazyState() {
    const teaserImageDiv = document.querySelector('.cmp-teaser__image');
    const cmpImageDiv = teaserImageDiv?.querySelector('.cmp-image > img');
    cmpImageDiv?.setAttribute('loading', 'eager');
    cmpImageDiv?.setAttribute('fetchpriority', 'high');
  }
}
