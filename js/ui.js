// DOM Elements
const elements = {
    sectionSelect: document.getElementById('section'),
    facultySelect: document.getElementById('faculty'),
    roomSelect: document.getElementById('room'),
    sectionSearch: document.getElementById('section-search'),
    facultySearch: document.getElementById('faculty-search'),
    roomSearch: document.getElementById('room-search'),
    resetButton: document.getElementById('reset-filters'),
    timetableElement: document.getElementById('timetable'),
    noDataMessage: document.getElementById('no-data-message'),
    facultyList: document.getElementById('faculty-list').querySelector('ul'),
    roomList: document.getElementById('room-list').querySelector('ul')
};

// Initialize dropdowns
function initializeDropdowns() {
    // Populate sections dropdown
    timetableData.sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section;
        option.textContent = section;
        elements.sectionSelect.appendChild(option);
    });

    // Populate faculty dropdown
    timetableData.faculty.forEach(faculty => {
        const option = document.createElement('option');
        option.value = faculty;
        option.textContent = faculty;
        elements.facultySelect.appendChild(option);
    });

    // Populate rooms dropdown
    timetableData.rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room;
        option.textContent = room;
        elements.roomSelect.appendChild(option);
    });
}

// Filter dropdown options based on search input
function filterDropdown(searchInput, selectElement) {
    const filter = searchInput.value.toLowerCase();
    const options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
        const txtValue = options[i].textContent || options[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }
}

// Export functions and elements
export { elements, initializeDropdowns, filterDropdown };
