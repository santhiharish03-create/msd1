import { elements, initializeDropdowns, filterDropdown } from './ui.js';
import { updateTimetable } from './timetable.js';

// Get only needed elements for faculty view
const facultyElements = {
    facultySelect: document.getElementById('faculty'),
    facultySearch: document.getElementById('faculty-search'),
    timetableElement: document.getElementById('timetable'),
    noDataMessage: document.getElementById('no-data-message')
};

// Initialize faculty dropdown
function initializeFacultyDropdown() {
    timetableData.faculty.forEach(faculty => {
        const option = document.createElement('option');
        option.value = faculty;
        option.textContent = faculty;
        facultyElements.facultySelect.appendChild(option);
    });
}

// Event Listeners
facultyElements.facultySearch.addEventListener('input', () => 
    filterDropdown(facultyElements.facultySearch, facultyElements.facultySelect)
);

facultyElements.facultySelect.addEventListener('change', (e) => 
    updateTimetable('faculty', e.target.value)
);

// Initialize the faculty view
document.addEventListener('DOMContentLoaded', () => {
    initializeFacultyDropdown();
    facultyElements.noDataMessage.classList.remove('hidden');
    facultyElements.timetableElement.classList.add('hidden');
});
