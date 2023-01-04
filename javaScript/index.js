import {menuChanger} from "./scrollHandlers/menuChanger.js";
import {scrollToRefIntoSite} from "./scrollHandlers/scrollToRefIntoSite.js";
import {FullSlider} from "./slider/FullSlider.js";
const fullSlider = new FullSlider(8, 500);

window.addEventListener('scroll', menuChanger);
$('.header__menu').click(scrollToRefIntoSite);
document.querySelector('#fullSliderButton').addEventListener('click', fullSlider.openHandler.bind(fullSlider));
document.querySelector('#closeFullSlider').addEventListener('click', fullSlider.closeHandler.bind(fullSlider));
document.querySelectorAll('.full-slider__arrows-container').forEach((el)=> el.addEventListener('click', fullSlider.arrowsHandler.bind(fullSlider)));
$('#serviceSlider').on('slide.bs.carousel', fullSlider.initNumberChanger.bind(fullSlider));
window.addEventListener('beforescriptexecute', (e)=> {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
})