import { elements, initializeDropdowns, filterDropdown } from './ui.js';
import { updateTimetable } from './timetable.js';

// Get only needed elements for room view
const roomElements = {
    roomSelect: document.getElementById('room'),
    roomSearch: document.getElementById('room-search'),
    timetableElement: document.getElementById('timetable'),
    noDataMessage: document.getElementById('no-data-message')
};

// Initialize room dropdown
function initializeRoomDropdown() {
    timetableData.rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room;
        option.textContent = room;
        roomElements.roomSelect.appendChild(option);
    });
}

// Event Listeners
roomElements.roomSearch.addEventListener('input', () => 
    filterDropdown(roomElements.roomSearch, roomElements.roomSelect)
);

roomElements.roomSelect.addEventListener('change', (e) => 
    updateTimetable('room', e.target.value)
);

// Initialize the room view
document.addEventListener('DOMContentLoaded', () => {
    initializeRoomDropdown();
    roomElements.noDataMessage.classList.remove('hidden');
    roomElements.timetableElement.classList.add('hidden');
});
