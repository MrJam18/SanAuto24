import positionsObject from '../constants/positions.js';
import {mediaWidth} from "../constants/mediaWidth.js";

let positions;
const clientWidth = document.documentElement.clientWidth;
mediaWidth.every((media)=> {
    if(clientWidth <= media.width) {
        positions = positionsObject[media.name];
        return false;
    }
    return true;
});
if(!positions) positions = positionsObject.PC;

export const menuChanger = () => {
    const scrollPos = window.scrollY;
    if(scrollPos >= positions[positions.length - 1].scroll) {
        document.getElementById('menu__contacts').focus();
        return false
    }
    let prevELScroll = {
        menuId: 'main',
        scroll: 0
    };
    positions.every((el, index)=> {
        if(scrollPos >= prevELScroll.scroll && scrollPos <= el.scroll) {
            document.getElementById(`menu__${prevELScroll.menuId}`).focus();
            return false;
        }
        return prevELScroll = el;
    });

}
