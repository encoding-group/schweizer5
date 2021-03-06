/*
 * paraport.js
 *
 * ©2020 encoding.group
 * https://github.com/encoding-group/paraport
 *
 * v0.1 last modified 2020-07-18
 */

class ParaportElement {
  constructor(element, options) {
    this._options = options;
    this._element = element;

    this._speed =
      parseFloat(
        this._element.getAttribute('data-para-speed') || options.defaultSpeed
      ) *
      0.05 *
      options.multiply;

    this._centerPoint = this.calculateCenterPoint();

    this._lastVisible = undefined;

    this.update();
  }

  update() {
    this.applyOffset();
    this.updateVisibility();
  }

  applyOffset() {
    let offset =
      -(this._centerPoint - this._element.getBoundingClientRect().top) *
      this._speed;
    this._element.style.transform = `translateY(${offset}px)`;
  }

  updateVisibility() {
    let box = this._element.getBoundingClientRect();

    let isVisible = box.y < window.innerHeight && box.bottom > 0;

    if (isVisible === this._lastVisible) return;

    if (isVisible) {
      this._element.classList.add(this._options.visibleClass);
    } else {
      this._element.classList.remove(this._options.visibleClass);
    }

    this._lastVisible = isVisible;
  }

  recenter() {
    this._centerPoint = this.calculateCenterPoint();
  }

  calculateCenterPoint() {
    return (window.innerHeight - this._element.offsetHeight) * 0.5;
  }
}

class Paraport {
  constructor(options = {}) {
    this._options = Object.assign(
      {
        selector: '.para',
        defaultSpeed: 2,
        visibleClass: 'para-visible',
        multiply: 1,
      },
      options
    );

    let elements = document.querySelectorAll(this._options.selector);

    if (elements.length < 1) {
      console.warn(`No elements found matching ${this._options.selector}`);
      return;
    }

    this._elements = [];
    for (const element of elements) {
      this._elements.push(
        new ParaportElement(element, {
          defaultSpeed: this._options.defaultSpeed,
          visibleClass: this._options.visibleClass,
          multiply: this._options.multiply,
        })
      );
    }

    document.body.classList.add('para-initalized');

    let context = this;

    setTimeout(() => {
      context.updateElements();
    }, 1);

    window.addEventListener(
      'scroll',
      () => {
        window.requestAnimationFrame(() => {
          context.updateElements();
        });
      },
      { passive: true }
    );

    window.addEventListener(
      'resize',
      () => {
        window.requestAnimationFrame(() => {
          context.recenterElements();
        });
      },
      { passive: true }
    );
  }

  updateElements() {
    for (let i = this._elements.length - 1; i >= 0; i--) {
      this._elements[i].update();
    }
  }

  recenterElements() {
    for (let i = this._elements.length - 1; i >= 0; i--) {
      this._elements[i].recenter();
    }
  }
}

export default Paraport;
