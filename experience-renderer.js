function renderExperience(exp, index) {
    const techBadges = exp.techs.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

    const logoHTML = exp.logo
        ? `<img src="${exp.logo}" alt="${exp.company}" class="timeline-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div class="timeline-logo-placeholder" style="display:none;">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                   <line x1="8" y1="21" x2="16" y2="21"/>
                   <line x1="12" y1="17" x2="12" y2="21"/>
               </svg>
           </div>`
        : `<div class="timeline-logo-placeholder">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                   <line x1="8" y1="21" x2="16" y2="21"/>
                   <line x1="12" y1="17" x2="12" y2="21"/>
               </svg>
           </div>`;

    return `
        <article class="timeline-item" data-index="${index}">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    ${logoHTML}
                    <div class="timeline-title">
                        <h3>${exp.company}</h3>
                        <span class="timeline-role" data-i18n="${exp.roleKey}"></span>
                    </div>
                    <span class="timeline-date">${exp.date}</span>
                    <svg class="timeline-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <p class="timeline-desc" data-i18n="${exp.descKey}"></p>
                <div class="timeline-techs">${techBadges}</div>
                <div class="timeline-details">
                    <p class="timeline-details-content" data-i18n="${exp.detailsKey}"></p>
                </div>
            </div>
        </article>
    `;
}

function renderExperiences() {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = experiences.map((exp, index) => renderExperience(exp, index)).join('');

    // Setup accordion behavior
    setupAccordion();

    // Setup scroll animation
    observeTimelineItems();
}

function setupAccordion() {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        const content = item.querySelector('.timeline-content');

        content.addEventListener('click', () => {
            const isExpanded = item.classList.contains('expanded');

            // Close all other items
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('expanded');
                }
            });

            // Toggle current item
            item.classList.toggle('expanded', !isExpanded);
        });
    });
}

function observeTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation with delay
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    items.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', renderExperiences);
