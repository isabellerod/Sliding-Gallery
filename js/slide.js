export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
  }

  addSlideEvent() {
    this.wrapper.addEventListener('mousedown', this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    return this;
  }
}