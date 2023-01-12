import {changeMenu} from "./scrollHandlers/menuChanger.js";
import {scrollToRefIntoSite} from "./scrollHandlers/scrollToRefIntoSite.js";
import {FullSlider} from "./slider/FullSlider.js";
import {clientWidthHandler} from "./utils/clientWidthHandler.js";
const fullSlider = new FullSlider(8, 500);

clientWidthHandler();
$('.header__menu').click(scrollToRefIntoSite);
document.querySelector('#fullSliderButton').addEventListener('click', fullSlider.openHandler.bind(fullSlider));
document.querySelector('#closeFullSlider').addEventListener('click', fullSlider.closeHandler.bind(fullSlider));
document.querySelectorAll('.full-slider__arrows-container').forEach((el)=> el.addEventListener('click', fullSlider.arrowsHandler.bind(fullSlider)));
$('#serviceSlider').on('slide.bs.carousel', fullSlider.initNumberChanger.bind(fullSlider));
window.addEventListener('scroll', changeMenu);