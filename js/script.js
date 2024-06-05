const setupMobileNav = () => {
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const bookmarkIcon = document.querySelector("#bookmark-icon");
    const mobileNav = document.querySelector("#mobile-nav");
    const closeIcon = document.querySelector("#close-icon");

    const toggleMobileNav = () => {
        hamburgerIcon.classList.toggle("hidden");
        bookmarkIcon.classList.toggle("hidden");
        mobileNav.classList.toggle("hidden");
    };

    hamburgerIcon.addEventListener("click", () => {
        toggleMobileNav();
    });

    closeIcon.addEventListener("click", () => {
        toggleMobileNav();
    });
};

const setupFeaturesSection = () => {
    const simpleBookmarkingTab = document.querySelector(
        "#simple-bookmarking-tab"
    );
    const speedySearchingTab = document.querySelector("#speedy-searching-tab");
    const easySharingTab = document.querySelector("#easy-sharing-tab");
    const tab1 = document.querySelector("#tab-1");
    const tab2 = document.querySelector("#tab-2");
    const tab3 = document.querySelector("#tab-3");

    simpleBookmarkingTab.addEventListener("click", () => {
        simpleBookmarkingTab.classList.add("selected-tab");
        speedySearchingTab.classList.remove("selected-tab");
        easySharingTab.classList.remove("selected-tab");
        tab1.classList.remove("hidden");
        tab2.classList.add("hidden");
        tab3.classList.add("hidden");
    });

    speedySearchingTab.addEventListener("click", () => {
        speedySearchingTab.classList.add("selected-tab");
        easySharingTab.classList.remove("selected-tab");
        simpleBookmarkingTab.classList.remove("selected-tab");
        tab2.classList.remove("hidden");
        tab1.classList.add("hidden");
        tab3.classList.add("hidden");
    });

    easySharingTab.addEventListener("click", () => {
        easySharingTab.classList.add("selected-tab");
        simpleBookmarkingTab.classList.remove("selected-tab");
        speedySearchingTab.classList.remove("selected-tab");
        tab3.classList.remove("hidden");
        tab1.classList.add("hidden");
        tab2.classList.add("hidden");
    });
};

const setupFAQsSection = () => {
    const faqsQ1 = document.querySelector("#faqs-q-1");
    const faqsQ2 = document.querySelector("#faqs-q-2");
    const faqsQ3 = document.querySelector("#faqs-q-3");
    const faqsQ4 = document.querySelector("#faqs-q-4");

    const faqsQ1Content = document.querySelector("#q1-content");
    const faqsQ2Content = document.querySelector("#q2-content");
    const faqsQ3Content = document.querySelector("#q3-content");
    const faqsQ4Content = document.querySelector("#q4-content");

    const arrowIcons = document.querySelectorAll(".arrow-icon");

    const toggleArrowAnimation = (arrow) => {
        if (arrow.classList.contains("selected-accordion")) {
            arrow.classList.remove("selected-accordion");
            arrow.classList.add("not-selected-accordion");
        } else {
            arrow.classList.add("selected-accordion");
            arrow.classList.remove("not-selected-accordion");
        }
    };

    faqsQ1.addEventListener("click", () => {
        faqsQ1Content.classList.toggle("hidden");
        toggleArrowAnimation(arrowIcons[0]);
    });

    faqsQ2.addEventListener("click", () => {
        faqsQ2Content.classList.toggle("hidden");
        toggleArrowAnimation(arrowIcons[1]);
    });

    faqsQ3.addEventListener("click", () => {
        faqsQ3Content.classList.toggle("hidden");
        toggleArrowAnimation(arrowIcons[2]);
    });

    faqsQ4.addEventListener("click", () => {
        faqsQ4Content.classList.toggle("hidden");
        toggleArrowAnimation(arrowIcons[3]);
    });
};

const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const setupContactUsSection = () => {
    const contactEmailInput = document.querySelector("#contact-email-input");
    const contactBtn = document.querySelector("#contact-btn");
    const emailErrorDiv = document.querySelector("#email-error-div");

    contactBtn.addEventListener("click", () => {
        if (isValidEmail(contactEmailInput.value)) {
            emailErrorDiv.classList.add("hidden");
        } else {
            emailErrorDiv.classList.remove("hidden");
        }
    });
};

const main = () => {
    setupMobileNav();
    setupFeaturesSection();
    setupFAQsSection();
    setupContactUsSection();
};

main();
