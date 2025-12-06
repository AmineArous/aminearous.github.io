// Navigation scroll spy and smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    const sections = document.querySelectorAll('section[id]');

    // Initialize indicator position
    updateIndicator(document.querySelector('.nav-link.active'));

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const sectionNavHeight = document.querySelector('.section-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - sectionNavHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                setActiveLink(link);
            }
        });
    });

    // Scroll spy
    function onScroll() {
        const sectionNavHeight = document.querySelector('.section-nav').offsetHeight;
        const offset = sectionNavHeight + 50;
        const scrollPosition = window.scrollY + offset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (correspondingLink && !correspondingLink.classList.contains('active')) {
                    setActiveLink(correspondingLink);
                }
            }
        });
    }

    // Set active link and update indicator
    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
        updateIndicator(activeLink);
    }

    // Update indicator position
    function updateIndicator(activeLink) {
        if (!activeLink || !navIndicator) return;

        const linkRect = activeLink.getBoundingClientRect();
        const menuRect = activeLink.parentElement.getBoundingClientRect();

        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - menuRect.left}px`;
    }

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Update indicator on resize
    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.nav-link.active');
        updateIndicator(activeLink);
    });
});
