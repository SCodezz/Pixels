if (screen.width < 400) {

    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   

    text.style.top = 50 + value * -0.2 + '%';
    // text.style.top = 50 + value * -0.1 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

})


var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/.vini._0/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab19/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKuma02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.ntlify.app/", "_blank");
    }

}
