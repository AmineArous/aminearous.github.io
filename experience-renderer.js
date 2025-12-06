function renderExperience(exp) {
    return `
        <article class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <img src="${exp.logo}" alt="${exp.company}" class="timeline-logo">
                    <div class="timeline-title">
                        <h3>${exp.company}</h3>
                        <span class="timeline-role" data-i18n="${exp.roleKey}"></span>
                    </div>
                    <span class="timeline-date">${exp.date}</span>
                </div>
                <p class="timeline-desc" data-i18n="${exp.descKey}"></p>
            </div>
        </article>
    `;
}

function renderExperiences() {
    const container = document.querySelector('.timeline');
    if (!container) return;

    container.innerHTML = experiences.map(renderExperience).join('');
}

document.addEventListener('DOMContentLoaded', renderExperiences);
