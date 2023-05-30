const navBar = document.querySelector('nav');
const navOffset = navBar.offsetTop;
const htmlDiv = document.querySelector('#htmlDiv');
const cssDiv = document.querySelector('#cssDiv');
const jsDiv = document.querySelector('#jsDiv');
const htmlOffset = htmlDiv.offsetTop;
const cssOffset = cssDiv.offsetTop;
const jsOffset = jsDiv.offsetTop;
const htmlDesc = document.querySelector('.htmlDesc');
const cssDesc = document.querySelector('.cssDesc');
const jsDesc = document.querySelector('.jsDesc');

function handleScroll(e) {
    if (window.scrollY >= navOffset) {
        navBar.classList.add('fixedNav');
    } else {
        navBar.classList.remove('fixedNav');
    }
    if ((window.scrollY + window.innerHeight) < (htmlOffset + (htmlDiv.offsetHeight / 2))) {
        document.documentElement.style.setProperty('--backgroundColor', 'linear-gradient(135deg, hsl(218, 39%, 5%)50%, hsl(222, 41%, 15%)80%, hsl(222, 41%, 25%))');
        document.documentElement.style.setProperty('--textColor', '#ddd');
    }
    if ((window.scrollY + window.innerHeight) >= (htmlOffset + (htmlDiv.offsetHeight / 2)) && (window.scrollY + (window.innerHeight / 4 * 3)) <= (htmlOffset + htmlDiv.offsetHeight)) {
        htmlDesc.classList.add('visibleDesc');
        document.documentElement.style.setProperty('--backgroundColor', 'linear-gradient(135deg, hsl(12, 74%, 33%)50%, hsl(15, 82%, 40%)80%, hsl(15, 83%, 54%))');
        document.documentElement.style.setProperty('--textColor', '#ddd');
    } else {
        htmlDesc.classList.remove('visibleDesc');
    }
    if ((window.scrollY + window.innerHeight) >= (cssOffset + (cssDiv.offsetHeight / 2)) && (window.scrollY + (window.innerHeight / 4 * 3)) <= (cssOffset + cssDiv.offsetHeight)) {
        cssDesc.classList.add('visibleDesc');
        document.documentElement.style.setProperty('--backgroundColor', 'linear-gradient(135deg, hsl(228, 75%, 33%)50%, hsl(222, 85%, 40%)80%, hsl(222, 87%, 54%))');
        document.documentElement.style.setProperty('--textColor', '#ddd');
    } else {
        cssDesc.classList.remove('visibleDesc');
    }
    if ((window.scrollY + window.innerHeight) >= (jsOffset + (jsDiv.offsetHeight / 2)) && (window.scrollY + (window.innerHeight / 4 * 3)) <= (jsOffset + jsDiv.offsetHeight)) {
        jsDesc.classList.add('visibleDesc');
        document.documentElement.style.setProperty('--backgroundColor', 'linear-gradient(135deg, hsl(56, 61%, 33%)50%, hsl(53, 55%, 40%)80%, hsl(53, 54%, 54%))');
        document.documentElement.style.setProperty('--textColor', '#222');
    } else {
        jsDesc.classList.remove('visibleDesc');
    }
    if ((window.scrollY + (window.innerHeight / 2)) > (jsOffset + jsDiv.offsetHeight)) {
        document.documentElement.style.setProperty('--backgroundColor', 'linear-gradient(135deg, hsl(218, 39%, 5%)50%, hsl(222, 41%, 15%)80%, hsl(222, 41%, 25%))');
        document.documentElement.style.setProperty('--textColor', '#ddd');
    }
}

window.addEventListener('scroll', handleScroll);