import Swiper from 'swiper/bundle';

export default class Caroussel {
  constructor(element) {
    this.element = element;
    this.options = {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
      },
    };

    this.init();
  }

  setOptions() {
    // autoplay
    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }

    // loop
    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    // slides
    if ('slides' in this.element.dataset) {
      const slidesValue = this.element.dataset.slides.trim();
      this.options.slidesPerView = slidesValue
        ? parseFloat(slidesValue) || this.options.slidesPerView
        : this.options.slidesPerView;
    }
  }

  init() {
    this.setOptions();
    this.swiper = new Swiper(this.element, this.options);
  }
}
