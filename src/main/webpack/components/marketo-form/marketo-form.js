/**
 * MarketoForm class
 */

export default class MarketoForm {
  constructor(el) {
    this.el = el;
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          this.applyFill();
          document.addEventListener('input', () => {
            this.applyFill();
          });
        }, 200);
      }
    };
  }

  static init(el) {
    return new MarketoForm(el);
  }

  // eslint-disable-next-line class-methods-use-this
  applyFill() {
    const slider = document.querySelector('.mktoRangeField');
    const mktoRangeValue = parseInt(document.querySelector('.mktoRangeValueText')?.innerText, 10);
    if (slider && mktoRangeValue) {
      const sliderInput = slider?.querySelector('input');
      const isDisabledSliderInput = sliderInput?.disabled;
      if (sliderInput) {
        const progress = (mktoRangeValue / sliderInput.max) * 100;
        sliderInput.style.background = isDisabledSliderInput 
          ? `linear-gradient(to right, #858585 ${progress}%, #fff ${progress}%)` 
          : `linear-gradient(to right, #03f ${progress}%, #fff ${progress}%)`;
      }
    }
  }
}
