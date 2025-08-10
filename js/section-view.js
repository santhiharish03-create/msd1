import { elements, initializeDropdowns, filterDropdown } from './ui.js';
import { updateTimetable } from './timetable.js';

// Get only needed elements for section view
const sectionElements = {
    sectionSelect: document.getElementById('section'),
    sectionSearch: document.getElementById('section-search'),
    timetableElement: document.getElementById('timetable'),
    noDataMessage: document.getElementById('no-data-message'),
    facultyList: document.getElementById('faculty-list').querySelector('ul'),
    roomList: document.getElementById('room-list').querySelector('ul')
};

// Initialize section dropdown
function initializeSectionDropdown() {
    timetableData.sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section;
        option.textContent = section;
        sectionElements.sectionSelect.appendChild(option);
    });
}

// Event Listeners
sectionElements.sectionSearch.addEventListener('input', () => 
    filterDropdown(sectionElements.sectionSearch, sectionElements.sectionSelect)
);

sectionElements.sectionSelect.addEventListener('change', (e) => 
    updateTimetable('section', e.target.value)
);

// Initialize the section view
document.addEventListener('DOMContentLoaded', () => {
    initializeSectionDropdown();
    sectionElements.noDataMessage.classList.remove('hidden');
    sectionElements.timetableElement.classList.add('hidden');
});
