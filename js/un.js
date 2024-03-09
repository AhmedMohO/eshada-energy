let up = document.querySelector(".up");
let nums = document.querySelectorAll(".l2info1 .l2onfo1n1");
let section = document.querySelector(".landing2");
let darkMode = localStorage.getItem('darkMode');
let l2back = document.querySelectorAll(".l2back, .lback")
let BlaDark = document.querySelectorAll(".blogMain, .wh2, .c1 input, body, .footer2, .c1 textarea");
let iicDark = document.querySelectorAll(".iicon");
let TextWDark = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, h3 strong, .l2onfo1n1, .l2onfo1t1, .al .ih4, .ih4, .ip, .c1 label,.links li a, .eng, .c1 textarea, .c1 input, .menu-icon, .sidebar a");
let backTextWDark = document.querySelectorAll("#next1, #prev1, #next2, #prev2, #pagination,.swiper-pagination-bullet");
let headerEtcDark = document.querySelectorAll("header, .pinfo1, .blog, .contact .container >.row, .sub_content, .c2 .c2l, .button_hover, .sidebar");
const darkModeToggle = document.querySelector('#darkmode-toggle');
const enableDarkMode = () => {
    BlaDark.forEach(element => {
        element.classList.add('darkmode');
    });
    iicDark.forEach(element => {
        element.classList.add('darkmode1');
    });
    TextWDark.forEach(element => {
        element.classList.add('darkmode2');
    });
    backTextWDark.forEach(element => {
        element.classList.add('darkmode3');
    });
    headerEtcDark.forEach(element => {
        element.classList.add('darkmode4');
    });
    l2back.forEach(element => {
        elementclassList.add('noneBack');
    });
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    BlaDark.forEach(element => {
        element.classList.remove('darkmode');
    });
    iicDark.forEach(element => {
        element.classList.remove('darkmode1');
    });
    TextWDark.forEach(element => {
        element.classList.remove('darkmode2');
    });
    backTextWDark.forEach(element => {
        element.classList.remove('darkmode3');
    });
    headerEtcDark.forEach(element => {
        element.classList.remove('darkmode4');
    });
    l2back.forEach(element => {
        element.classList.remove('noneBack');
    });
    localStorage.setItem('darkMode', null);
}

if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
    let darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    if (darkMode !== 'enabled') {
        darkModeToggle.checked = true;
    } else {
        darkModeToggle.checked = false;
    }
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 5000,
    },
    speed: 500,
    navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
    },
});
const swiper1 = new Swiper('.swip1', {
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 5000,
    },
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    }
});
const swiper2 = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 5000,
    },
    speed: 500,
    navigation: {
        nextEl: '#prev2',
        prevEl: '#next2',
    },
    pagination: {
        el: "#pagination",
        type: "progressbar",
    },
});

const key = 'JjgIEU6olMwcyQTsKXQn';
const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`,
    center: [31.2357, 30.0444],
    zoom: 6
});
const egyptMarker = new maplibregl.Marker()
    .setLngLat([31.2357, 30.0444])
    .addTo(map);
map.on('error', function (err) {
    throw new Error("To load the map, you must replace YOUR_MAPTILER_API_KEY_HERE first, see README");
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let isFilled = true;
        inputs.forEach(function (input) {
            const parent = input.parentElement;
            const warningMessage = parent.querySelector('.warning-message');

            if (input.value.trim() === '' && input.hasAttribute('required')) {
                isFilled = false;
                if (!warningMessage) {
                    const newWarningMessage = document.createElement('div');
                    newWarningMessage.className = 'warning-message';
                    newWarningMessage.textContent = 'This field is required.';
                    parent.appendChild(newWarningMessage);
                }
            } else {
                if (warningMessage) {
                    parent.removeChild(warningMessage);
                }
            }
        });
        if (!isFilled) {
            return;
        }
        form.submit();
    });
    form.querySelectorAll('input, textarea').forEach(function (input) {
        input.addEventListener('input', function () {
            const parent = input.parentElement;
            const warningMessage = parent.querySelector('.warning-message');

            if (input.value.trim() !== '' && input.hasAttribute('required') && warningMessage) {
                parent.removeChild(warningMessage);
            }
        });
    });
});

let started = false;
window.onscroll = function () {
    if (window.scrollY >= 600) {
        up.style.opacity = 1;
        up.style.transform = "scale(1)";
    } else {
        up.style.transform = "scale(0)";
    }
    if (window.scrollY >= section.offsetTop - 250) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visibility", "visible");
            entry.target.style.animationDuration = "1s";
            entry.target.style.animationDelay = "0s";
            entry.target.style.animationName = "zoomInRight";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

var targets = document.querySelectorAll('.wow');
targets.forEach(function (target) {
    observer.observe(target);
});

let observer1 = new IntersectionObserver(function (entries1, observer1) {
    entries1.forEach(function (entry1) {
        if (entry1.isIntersecting) {
            entry1.target.style.cssText = "visibility: visible; animation-duration: 1s; animation-delay: 0s; animation-name: fadeInUp;";
            observer1.unobserve(entry1.target);
        }
    });
}, { threshold: 0 });

let targets1 = document.querySelectorAll('.wow1');
targets1.forEach(function (target1) {
    observer1.observe(target1);
});
