/**
 * Tabs-custom class
 */
export default class TabsCustom {
  constructor(el) {
    this.el = el;
    this.scrollIntoPage();
  }

  static init(el) {
    return new TabsCustom(el);
  }

  // eslint-disable-next-line class-methods-use-this
  scrollIntoPage() {
    document.addEventListener('click', (event) => {
      const tabsContainer = document.querySelector('.cmp-tabs');
      if (event.target.classList.contains('cmp-tabs__tab')) {
        tabsContainer.scrollIntoView({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        event.target.blur();
      }
    });
  }
}
