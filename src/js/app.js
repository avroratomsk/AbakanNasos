import * as functions from './modules/baseFunctions.js';

functions.isWebp();

import Swiper from "swiper";
import {Navigation, Pagination, Scrollbar } from "swiper/modules";

const heroSlider = new Swiper('.hero__slider', {
  modules: [Navigation, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.hero__arrow-next',
    prevEl: '.hero__arrow-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
