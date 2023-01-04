export const scrollToRefIntoSite = (ev)=> {
    const animationTime = 1200;
    const menuEl = ev.target;
    const id = menuEl.getAttribute('data-href');
    const children = menuEl.parentNode.children;
    $('.header__menu').off('click');
    for (const menuEl of children ) {
        menuEl.style.backgroundColor = 'unset';
    }
    menuEl.style.backgroundColor = 'rgb(237, 233, 225)';
    const destination = $(`span[id='ref__${id}']`);
    $('html').animate({
        scrollTop: destination.offset().top
    }, {
        duration: animationTime,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
        }});
    setTimeout(()=> {
        $('.header__menu').click(scrollToRefIntoSite);
        menuEl.style.backgroundColor = '';
        for (const menuEl of children ) {
            menuEl.style.backgroundColor = '';
        }
    }, animationTime);
}


