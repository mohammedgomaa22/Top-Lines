// Light and Dark Mode
const lightAndDark = () => {
    const btnChange = document.querySelector(".mode"),
        mode = document.querySelector(".mode i"),
        root = document.querySelector(":root");
    // -----------------
    // Check localStorage
    if (localStorage.getItem("dark") && localStorage.getItem("light") && localStorage.getItem("white")) {
        // Set Color in page
        root.style.setProperty('--dark-color', `${localStorage.getItem("dark")}`);
        root.style.setProperty('--light-color', `${localStorage.getItem("light")}`);
        root.style.setProperty('--white-color', `${localStorage.getItem("white")}`);
        // --------
        if (localStorage.getItem("icon")) {
            mode.className = `fa-regular ${localStorage.getItem("icon")}`;
        }
        // --------
        if (localStorage.getItem("icon-opc")) {
            document.querySelectorAll(".feat .number").forEach((num) => {
                num.classList.replace(`opacity-100`, `${localStorage.getItem("icon-opc")}`);
            });
        }
    };
    // localStorage.clear();
    btnChange.addEventListener(("click"), () => {
        if (mode.classList.contains("fa-sun")) {
            // Change Icon BTN
            mode.classList.replace("fa-sun", "fa-moon");
            // Set Color in page
            root.style.setProperty('--dark-color', '#ECF2FF');
            root.style.setProperty('--light-color', '#121212');
            root.style.setProperty('--white-color', '#121212');
            // Icons opc 
            document.querySelectorAll(".feat .number").forEach((num) => {
                num.classList.replace("opacity-100", "opacity-1");
            });
            // Set Color in local
            localStorage.setItem("dark", "#ECF2FF");
            localStorage.setItem("light", "#121212");
            localStorage.setItem("white", "#121212");
            // ---------
            localStorage.setItem("icon", "fa-moon");
            // ---------
            localStorage.setItem("icon-opc", "opacity-1");
        } else {
            // Change Icon BTN
            mode.classList.replace("fa-moon", "fa-sun");
            // Set Color in page
            root.style.setProperty('--dark-color', '#121212');
            root.style.setProperty('--light-color', '#ECF2FF');
            root.style.setProperty('--white-color', 'white');
            // Icons opc 
            document.querySelectorAll(".feat .number").forEach((num) => {
                num.classList.replace("opacity-1", "opacity-100");
            });
            // Set Color in local
            localStorage.setItem("dark", "#121212");
            localStorage.setItem("light", "#ECF2FF");
            localStorage.setItem("white", "white");
            // ---------
            localStorage.setItem("icon", "fa-sun");
            // ---------
            localStorage.setItem("icon-opc", "opacity-100");
        }
    });
};
lightAndDark();
// ------------------------------------------
// Toggle Navbar
const navbar = () => {
    const btn = document.querySelector(".toggle-btn"),
        menu = document.querySelector(".toggle-nav"),
        nav = document.querySelector(".navbar");
    // ------------------
    btn.addEventListener(("click"), () => {
        if (menu.classList.contains("opacity-0")) {
            // Nav
            menu.classList.replace("opacity-0", "opacity-100");
            menu.classList.replace("-right-5", "right-0");
            menu.classList.replace("w-0", "w-full");
            // Btn
            btn.classList.replace("hover:bg-gray-900", "bg-gray-900");
            btn.classList.replace("hover:text-white", "text-white");
            // Nav
            nav.classList.replace("overflow-hidden", "overflow-visible")
        } else {
            // Nav
            menu.classList.replace("opacity-100", "opacity-0");
            menu.classList.replace("right-0", "-right-5");
            menu.classList.replace("w-full", "w-0");
            // Btn
            btn.classList.replace("bg-gray-900", "hover:bg-gray-900");
            btn.classList.replace("text-white", "hover:text-white");
            setTimeout(() => {
                nav.classList.replace("overflow-visible", "overflow-hidden")
            }, 500);
            // Nav
        }
    });
};
navbar();
// ------------------------------------------
// Scroll top
const scrollToTop = () => {
    document.querySelector(".scrolling").onclick = () => {
        window.scrollTo(top, 0);
    };
    // hidden
    window.onscroll = () => {
        if (window.scrollY >= 700) {
                document.querySelector(".scrolling").classList.replace("-right-20", "right-6");
            } else {
            document.querySelector(".scrolling").classList.replace("right-6", "-right-20");
        }
    };
};
scrollToTop();
// ------------------------------------------