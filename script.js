// Sample data - Replace with your actual data
const timetableData = {
    sections: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    faculty: ['Dr. Smith', 'Dr. Johnson', 'Prof. Williams', 'Dr. Brown', 'Prof. Davis', 'Dr. Miller'],
    rooms: ['R101', 'R102', 'R103', 'R104', 'R105', 'R106'],
    schedules: {
        'A1': {
            Monday: ['Dr. Smith-R101', 'Dr. Johnson-R102', 'Prof. Williams-R103', 'Dr. Brown-R104', 'Prof. Davis-R105', 'Dr. Miller-R106', 'Dr. Smith-R101'],
            Tuesday: ['Prof. Williams-R103', 'Dr. Brown-R104', 'Dr. Smith-R101', 'Dr. Johnson-R102', 'Dr. Miller-R106', 'Prof. Davis-R105', 'Dr. Brown-R104'],
            Wednesday: ['Dr. Johnson-R102', 'Prof. Davis-R105', 'Dr. Brown-R104', 'Prof. Williams-R103', 'Dr. Smith-R101', 'Dr. Miller-R106', 'Prof. Davis-R105'],
            Thursday: ['Dr. Brown-R104', 'Dr. Smith-R101', 'Dr. Miller-R106', 'Prof. Davis-R105', 'Prof. Williams-R103', 'Dr. Johnson-R102', 'Dr. Miller-R106'],
            Friday: ['Prof. Davis-R105', 'Prof. Williams-R103', 'Dr. Johnson-R102', 'Dr. Miller-R106', 'Dr. Brown-R104', 'Dr. Smith-R101', 'Prof. Williams-R103']
        }
        // Add more section schedules as needed
    }
};

// DOM Elements
const sectionSelect = document.getElementById('section');
const facultySelect = document.getElementById('faculty');
const roomSelect = document.getElementById('room');
const sectionSearch = document.getElementById('section-search');
const facultySearch = document.getElementById('faculty-search');
const roomSearch = document.getElementById('room-search');
const resetButton = document.getElementById('reset-filters');
const timetableElement = document.getElementById('timetable');
const noDataMessage = document.getElementById('no-data-message');
const facultyList = document.getElementById('faculty-list').querySelector('ul');
const roomList = document.getElementById('room-list').querySelector('ul');

// Initialize dropdowns
function initializeDropdowns() {
    // Populate sections dropdown
    timetableData.sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section;
        option.textContent = section;
        sectionSelect.appendChild(option);
    });

    // Populate faculty dropdown
    timetableData.faculty.forEach(faculty => {
        const option = document.createElement('option');
        option.value = faculty;
        option.textContent = faculty;
        facultySelect.appendChild(option);
    });

    // Populate rooms dropdown
    timetableData.rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room;
        option.textContent = room;
        roomSelect.appendChild(option);
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

// Update timetable based on selection
function updateTimetable(filterType, value) {
    const tbody = timetableElement.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    
    // Reset highlighting
    tbody.querySelectorAll('td').forEach(td => td.classList.remove('highlighted'));
    
    if (!value) {
        noDataMessage.classList.remove('hidden');
        timetableElement.classList.add('hidden');
        return;
    }

    if (filterType === 'section' && timetableData.schedules[value]) {
        noDataMessage.classList.add('hidden');
        timetableElement.classList.remove('hidden');
        
        const schedule = timetableData.schedules[value];
        Object.entries(schedule).forEach(([day, periods], rowIndex) => {
            const row = rows[rowIndex];
            periods.forEach((period, colIndex) => {
                row.cells[colIndex + 1].textContent = period;
            });
        });

        // Update faculty and room lists
        updateFacultyList(value);
        updateRoomList(value);
    } else if (filterType === 'faculty' || filterType === 'room') {
        noDataMessage.classList.add('hidden');
        timetableElement.classList.remove('hidden');
        
        // Highlight cells containing the selected faculty or room
        tbody.querySelectorAll('td').forEach(td => {
            if (td.textContent.includes(value)) {
                td.classList.add('highlighted');
            }
        });
    }
}

// Update faculty list for selected section
function updateFacultyList(section) {
    facultyList.innerHTML = '';
    if (timetableData.schedules[section]) {
        const uniqueFaculty = new Set();
        Object.values(timetableData.schedules[section]).forEach(periods => {
            periods.forEach(period => {
                const faculty = period.split('-')[0];
                uniqueFaculty.add(faculty);
            });
        });

        uniqueFaculty.forEach(faculty => {
            const li = document.createElement('li');
            li.textContent = faculty;
            facultyList.appendChild(li);
        });
    }
}

// Update room list for selected section
function updateRoomList(section) {
    roomList.innerHTML = '';
    if (timetableData.schedules[section]) {
        const uniqueRooms = new Set();
        Object.values(timetableData.schedules[section]).forEach(periods => {
            periods.forEach(period => {
                const room = period.split('-')[1];
                uniqueRooms.add(room);
            });
        });

        uniqueRooms.forEach(room => {
            const li = document.createElement('li');
            li.textContent = room;
            roomList.appendChild(li);
        });
    }
}

// Event Listeners
sectionSearch.addEventListener('input', () => filterDropdown(sectionSearch, sectionSelect));
facultySearch.addEventListener('input', () => filterDropdown(facultySearch, facultySelect));
roomSearch.addEventListener('input', () => filterDropdown(roomSearch, roomSelect));

sectionSelect.addEventListener('change', (e) => updateTimetable('section', e.target.value));
facultySelect.addEventListener('change', (e) => updateTimetable('faculty', e.target.value));
roomSelect.addEventListener('change', (e) => updateTimetable('room', e.target.value));

resetButton.addEventListener('click', () => {
    sectionSelect.value = '';
    facultySelect.value = '';
    roomSelect.value = '';
    sectionSearch.value = '';
    facultySearch.value = '';
    roomSearch.value = '';
    facultyList.innerHTML = '';
    roomList.innerHTML = '';
    noDataMessage.classList.remove('hidden');
    timetableElement.classList.add('hidden');
    timetableElement.querySelectorAll('td').forEach(td => td.classList.remove('highlighted'));
});

// Initialize the dashboard
initializeDropdowns();
noDataMessage.classList.remove('hidden');
timetableElement.classList.add('hidden');
