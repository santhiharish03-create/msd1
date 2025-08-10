import { elements, initializeDropdowns, filterDropdown } from './ui.js';
import { updateTimetable } from './timetable.js';

// Event Listeners
elements.sectionSearch.addEventListener('input', () => filterDropdown(elements.sectionSearch, elements.sectionSelect));
elements.facultySearch.addEventListener('input', () => filterDropdown(elements.facultySearch, elements.facultySelect));
elements.roomSearch.addEventListener('input', () => filterDropdown(elements.roomSearch, elements.roomSelect));

elements.sectionSelect.addEventListener('change', (e) => updateTimetable('section', e.target.value));
elements.facultySelect.addEventListener('change', (e) => updateTimetable('faculty', e.target.value));
elements.roomSelect.addEventListener('change', (e) => updateTimetable('room', e.target.value));

elements.resetButton.addEventListener('click', () => {
    elements.sectionSelect.value = '';
    elements.facultySelect.value = '';
    elements.roomSelect.value = '';
    elements.sectionSearch.value = '';
    elements.facultySearch.value = '';
    elements.roomSearch.value = '';
    elements.facultyList.innerHTML = '';
    elements.roomList.innerHTML = '';
    elements.noDataMessage.classList.remove('hidden');
    elements.timetableElement.classList.add('hidden');
    elements.timetableElement.querySelectorAll('td').forEach(td => td.classList.remove('highlighted'));
});

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeDropdowns();
    elements.noDataMessage.classList.remove('hidden');
    elements.timetableElement.classList.add('hidden');
});
