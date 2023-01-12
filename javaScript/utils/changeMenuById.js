
export const changeMenuById = (menu, menuId) => {
    for(const el of menu.children) {
        el.classList.remove('header__menu-link_active');
    }
    menu.querySelector(`#menu__${menuId}`).classList.add('header__menu-link_active');
}