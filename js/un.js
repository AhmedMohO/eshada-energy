let up = document.querySelector(".up");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        up.style.opacity = 1;
        up.style.transform = "scale(1)";
    } else {
        up.style.transform = "scale(0)";
    }
};
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
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
