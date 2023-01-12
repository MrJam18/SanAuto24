import {changeMenuById} from "../utils/changeMenuById.js";
export let changeMenu;

export const menuChanger = (positions) => {
 changeMenu = ()=> {
     const menu = document.querySelector('.header__menu');
     const scrollPos = window.scrollY;
     if(scrollPos >= positions[positions.length - 1].scroll) {
         changeMenuById(menu, 'contacts');
         return false
     }
     let prevELScroll = {
         menuId: 'main',
         scroll: 0
     };
     positions.every((el)=> {
         if(scrollPos >= prevELScroll.scroll && scrollPos <= el.scroll) {
             changeMenuById(menu, prevELScroll.menuId);
             return false;
         }
         return prevELScroll = el;
     });
 }
}
// export const menuChanger = () => {
//     const menu = document.querySelector('.header__menu');
//     const scrollPos = window.scrollY;
//     if(scrollPos >= positions[positions.length - 1].scroll) {
//         changeMenuById(menu, 'contacts');
//         return false
//     }
//     let prevELScroll = {
//         menuId: 'main',
//         scroll: 0
//     };
//     positions.every((el)=> {
//         if(scrollPos >= prevELScroll.scroll && scrollPos <= el.scroll) {
//             changeMenuById(menu, prevELScroll.menuId);
//             return false;
//         }
//         return prevELScroll = el;
//     });
// }
