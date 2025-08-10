import { elements } from './ui.js';

// Update timetable based on selection
export function updateTimetable(filterType, value) {
    const tbody = elements.timetableElement.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    
    // Reset highlighting
    tbody.querySelectorAll('td').forEach(td => td.classList.remove('highlighted'));
    
    if (!value) {
        elements.noDataMessage.classList.remove('hidden');
        elements.timetableElement.classList.add('hidden');
        return;
    }

    if (filterType === 'section' && timetableData.schedules[value]) {
        elements.noDataMessage.classList.add('hidden');
        elements.timetableElement.classList.remove('hidden');
        
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
        elements.noDataMessage.classList.add('hidden');
        elements.timetableElement.classList.remove('hidden');
        
        // Highlight cells containing the selected faculty or room
        tbody.querySelectorAll('td').forEach(td => {
            if (td.textContent.includes(value)) {
                td.classList.add('highlighted');
            }
        });
    }
}

// Update faculty list for selected section
export function updateFacultyList(section) {
    elements.facultyList.innerHTML = '';
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
            elements.facultyList.appendChild(li);
        });
    }
}

// Update room list for selected section
export function updateRoomList(section) {
    elements.roomList.innerHTML = '';
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
            elements.roomList.appendChild(li);
        });
    }
}
