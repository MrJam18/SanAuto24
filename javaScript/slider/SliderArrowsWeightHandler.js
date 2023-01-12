export const sliderArrowsWeightHandler = (mediaName) => {
    const leftSliderArrows = document.querySelectorAll('.slider__arrow-path_left');
    const rightSliderArrows = document.querySelectorAll('.slider__arrow-path_right');

    if(mediaName === 'mobile') {
        changeSliderArrowsWeight(leftSliderArrows, "M16.958 36.167.75 19.958 16.958 3.75l2.084 2.083L4.875 19.958l14.167 14.125Z");
        changeSliderArrowsWeight(rightSliderArrows, 'M13.042 36.125 11 34.083l14.125-14.166L11 5.792l2.042-2.042L29.25 19.917Z');
    }
}

const changeSliderArrowsWeight = (sliderArrows, weightCode) => {
    sliderArrows.forEach((el)=> {
        el.setAttribute('d', weightCode);
    })
}