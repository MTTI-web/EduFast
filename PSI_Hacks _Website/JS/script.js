const header = document.querySelector('header');
const headerText = document.querySelector('.page-title');
const landingSection = document.querySelector('.landing-section');
const copyrightYear = document.querySelector('.copyright-year');
const backToTopButton = document.querySelector('.back-to-top-btn');
const edufastLetters = document.querySelectorAll('.edufast-letter');
const animationLoadingCover = document.querySelector('.load-animation-outer-cover');
const navOpen = document.querySelector('.navigation-open');
const navContent = document.querySelector('.nav-content');
const navLinks = document.querySelectorAll('.link');

navLinks.forEach(navLink => {
    navLink.addEventListener("click", event => {
        const sectionToReach = document.querySelector(`#${event.currentTarget.dataset.href}`);
        const sectionFromTop = window.pageYOffset + sectionToReach.getBoundingClientRect().top;
        // window.pageYOffset + el.getBoundingClientRect().top
        scrollTo({ top: sectionFromTop - header.getBoundingClientRect().height });
        navContent.classList.add('hidden');
        navOpen.classList.remove('down');
    });
});

navOpen.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
    navOpen.classList.toggle('down');
});

setTimeout(() => {
    edufastLetters.forEach(edufastLetter => {
        edufastLetter.classList.add('disappear');
        setTimeout(() => {
            animationLoadingCover.classList.add('cover-disappear');
        }, 500);
    });
}, 2000);

copyrightYear.textContent = new Date().getFullYear();

landingSection.style.paddingTop = `${header.getBoundingClientRect().height + 60}px`;
const headerHeight = header.getBoundingClientRect().height;
const initialHeaderHeight = header.getBoundingClientRect().height;
navOpen.style.top = `${initialHeaderHeight}px`;

addEventListener('scroll', () => {
    if (pageYOffset > headerHeight) {
        headerText.style.fontSize = `100%`;
        header.style.padding = `15px`;
    } else {
        headerText.style.fontSize = '130%';
        header.style.padding = `20px`;
    };

    if (pageYOffset > landingSection.getBoundingClientRect().height / 2) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
    navOpen.style.top = `${header.getBoundingClientRect().height}px`;
});