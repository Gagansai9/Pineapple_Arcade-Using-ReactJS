
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let timeoutId;
    let autoplayInterval;

    const autoPlay = () => {
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;

        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

        // If the carousel is at the end, scroll to the beginning
        if (carousel.scrollLeft >= maxScrollLeft) {
            carousel.scrollLeft = 0;
        } else {
            // Autoplay the carousel to scroll by one card width
            carousel.scrollLeft += firstCardWidth;
        }
    };

    const startAutoPlay = () => {
        autoplayInterval = setInterval(autoPlay, 2750);
    };

    const stopAutoPlay = () => {
        clearInterval(autoplayInterval);
    };

    wrapper.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        stopAutoPlay();
    });

    wrapper.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(startAutoPlay, 1000);
    });

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ?
                -firstCardWidth : firstCardWidth;
        });
    });

    // Start autoplaying the carousel initially
    startAutoPlay();
