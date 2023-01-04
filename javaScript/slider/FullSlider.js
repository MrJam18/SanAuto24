
export class FullSlider
{
    slidesQuantity;
    slideNumber = 1;
    animationTime;
    #content;
    #img;
    #description;
    #prevPhoto;
    #nextPhoto;
    #fullSlider;
    #body;
    #serviceSlider;
    constructor(slidesQuantity, animationTime) {
        this.slidesQuantity = slidesQuantity;
        this.animationTime = animationTime;
        this.#content = document.getElementById('contentOfFullSlider');
        this.#img = document.getElementById('fullSliderImage');
        this.#description = document.getElementById('fullSliderDescription');
        this.#prevPhoto = document.getElementById('fullSliderPrevPhoto');
        this.#nextPhoto = document.getElementById('fullSliderNextPhoto');
        this.#fullSlider = document.getElementById('fullSlider');
        this.#body = document.querySelector('body');
        this.#serviceSlider = $('#serviceSlider');
    }
    #getSrc = (srcNumber) => {
        return `./sources/service-images/fullSlider/photo${srcNumber}.jpg`;
    }
    #getFixedNumber = (srcNumber) => {
        if(srcNumber > this.slidesQuantity) srcNumber = 1;
        if(srcNumber < 1) srcNumber = this.slidesQuantity;
        return srcNumber;
    }
    #setDescription(srcNumber)
    {
        if(srcNumber === 2 || srcNumber === 6 || srcNumber === 8) {
            this.#description.innerText = 'Специализированные комфортные автомобили импортного производства';
        }
        else this.#description.innerText = 'Автомобили для перевозки инвалидов колясочников оборудованы пандусом';
    }
    #changeSlide(srcNumber) {
        const prevNumber = this.#getFixedNumber(srcNumber - 1);
        const nextNumber = this.#getFixedNumber(srcNumber + 1);
        this.#img.src = this.#getSrc(srcNumber);
        this.#setDescription(srcNumber);
        this.#prevPhoto.src = this.#getSrc(prevNumber);
        this.#nextPhoto.src = this.#getSrc(nextNumber);
    }
    arrowsHandler(ev) {
        const action = ev.currentTarget.getAttribute('data-slide');
        let number = this.slideNumber;
        if(action === 'next') number++;
        else number--;
        this.slideNumber = this.#getFixedNumber(number);
        this.#content.style.opacity = '0';
        setTimeout(()=> {
            this.#changeSlide(this.slideNumber);
            this.#content.style.opacity = '1';
        },this.animationTime);
    }
    initNumberChanger(ev) {
        this.slideNumber = ev.to + 1;
    }
    openHandler() {
        this.#changeSlide(this.slideNumber);
        this.#serviceSlider.off('slide.bs.carousel', this.initNumberChanger);
        this.#serviceSlider.carousel('pause');
        this.#fullSlider.style.display = 'flex';
        this.#body.style.overflow = 'hidden';
    }
    closeHandler() {
        this.#fullSlider.style.display = 'none';
        this.#body.style.overflow = 'auto';
        this.#serviceSlider.on('slide.bs.carousel', this.initNumberChanger);
        this.#serviceSlider.carousel('cycle');
    }
}



