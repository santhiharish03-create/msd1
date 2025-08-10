// Hide loading spinner and show content
function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    const container = document.querySelector('.container');
    
    spinner.style.display = 'none';
    container.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading time
    setTimeout(hideLoading, 1000);
    
    // Animate statistics with counting effect
    animateCount('total-sections', timetableData.sections.length);
    animateCount('total-faculty', timetableData.faculty.length);
    animateCount('total-rooms', timetableData.rooms.length);

    // Add entrance animations for cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Function to animate counting
function animateCount(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;
    let current = 0;

    const increment = target / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

// Add hover effect for cards
const cards = document.querySelectorAll('.dashboard-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
