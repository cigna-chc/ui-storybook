/**
 * CardGroup class
 */

export default class CardGroup {
  constructor(el) {
    this.el = el;
    this.defaultRecordsToLoad = 9;
    this.recordsToLoad = 2 * this.defaultRecordsToLoad;
    this.counter = this.defaultRecordsToLoad;
    this.spinner = document.createElement('div');
    this.initializeCards(this.el);
    setTimeout(() => {
      this.scrollInView(this.el);
    }, 1000);
  }

  static init(el) {
    return new CardGroup(el);
  }
/* eslint-disable */
  initializeCards(block) {
    const getAllCards = block.querySelectorAll('li');
    if (getAllCards?.length > 9) {
      getAllCards.forEach((list, index) => {
        index > 8 ? list.classList.add('hidden') : '';
      });
      this.addSpinner(block);
    }
  }

  addSpinner(block) {
    this.spinner.className = 'spinner';
    this.spinner.innerHTML += `<div class="loader">
        <svg class="circular-loader"viewBox="25 25 50 50" >
          <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#03f" stroke-width="8" />
        </svg>
      </div>`;
    block.parentNode.appendChild(this.spinner);
  }
/* eslint-disable */
  initializeSpinner(block) {
    const cards = block.querySelectorAll('li');

    if (block.querySelectorAll('.hidden').length) {
      for (let i = this.counter; i < Math.min(this.recordsToLoad, cards.length); i++) {
        cards[i].classList.remove('hidden');
      }
      this.counter += this.defaultRecordsToLoad;
      this.recordsToLoad += this.defaultRecordsToLoad;
    } else {
      this.spinner.classList.add('hidden');
    }
  }
/* eslint-disable */
  scrollInView(block) {
    let intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio <= 0) {
          return;
        }
        this.initializeSpinner(block);
      },
      { threshold: 1 },
    );
    intersectionObserver.observe(this.spinner);
  }
}