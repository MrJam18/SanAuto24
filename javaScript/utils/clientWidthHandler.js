import {mediaWidth} from "../constants/mediaWidth.js";
import positionsObject from "../constants/positions.js";
import {sliderArrowsWeightHandler} from "../slider/SliderArrowsWeightHandler.js";
import {menuChanger} from "../scrollHandlers/menuChanger.js";

export const clientWidthHandler = () => {
    const clientWidth = document.documentElement.clientWidth;
    let positions;
    mediaWidth.every((media)=> {
        if(clientWidth <= media.width) {
            positions = positionsObject[media.name];
            menuChanger(positions);
            sliderArrowsWeightHandler(media.name);
            return false;
        }
        return true;
    });
    if(!positions) menuChanger(positionsObject.PC)
}
