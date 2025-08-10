// Timetable data structure
const timetableData = {
    sections: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'E1', 'E2'],
    faculty: [
        'Dr. Smith (Physics)',
        'Dr. Johnson (Mathematics)',
        'Prof. Williams (Chemistry)',
        'Dr. Brown (Biology)',
        'Prof. Davis (Computer Science)',
        'Dr. Miller (English)',
        'Prof. Wilson (History)',
        'Dr. Moore (Economics)',
        'Prof. Taylor (Statistics)',
        'Dr. Anderson (Psychology)'
    ],
    rooms: [
        'R101 (Physics Lab)',
        'R102 (Chemistry Lab)',
        'R103 (Biology Lab)',
        'R104 (Computer Lab)',
        'R105 (Lecture Hall)',
        'R106 (Smart Class)',
        'R107 (Conference Room)',
        'R108 (Library)',
        'R109 (Study Room)',
        'R110 (Seminar Hall)'
    ],
    schedules: {
        'A1': {
            Monday: ['Dr. Smith-R101', 'Dr. Johnson-R102', 'Prof. Williams-R103', 'Dr. Brown-R104', 'Prof. Davis-R105', 'Dr. Miller-R106', 'Dr. Smith-R101'],
            Tuesday: ['Prof. Williams-R103', 'Dr. Brown-R104', 'Dr. Smith-R101', 'Dr. Johnson-R102', 'Dr. Miller-R106', 'Prof. Davis-R105', 'Dr. Brown-R104'],
            Wednesday: ['Dr. Johnson-R102', 'Prof. Davis-R105', 'Dr. Brown-R104', 'Prof. Williams-R103', 'Dr. Smith-R101', 'Dr. Miller-R106', 'Prof. Davis-R105'],
            Thursday: ['Dr. Brown-R104', 'Dr. Smith-R101', 'Dr. Miller-R106', 'Prof. Davis-R105', 'Prof. Williams-R103', 'Dr. Johnson-R102', 'Dr. Miller-R106'],
            Friday: ['Prof. Davis-R105', 'Prof. Williams-R103', 'Dr. Johnson-R102', 'Dr. Miller-R106', 'Dr. Brown-R104', 'Dr. Smith-R101', 'Prof. Williams-R103']
        },
        'B1': {
            Monday: ['Prof. Davis-R105', 'Dr. Miller-R106', 'Dr. Smith-R101', 'Dr. Johnson-R102', 'Prof. Williams-R103', 'Dr. Brown-R104', 'Dr. Miller-R106'],
            Tuesday: ['Dr. Smith-R101', 'Prof. Williams-R103', 'Dr. Miller-R106', 'Prof. Davis-R105', 'Dr. Brown-R104', 'Dr. Johnson-R102', 'Dr. Smith-R101'],
            Wednesday: ['Dr. Miller-R106', 'Dr. Brown-R104', 'Prof. Davis-R105', 'Dr. Smith-R101', 'Dr. Johnson-R102', 'Prof. Williams-R103', 'Prof. Davis-R105'],
            Thursday: ['Prof. Williams-R103', 'Prof. Davis-R105', 'Dr. Johnson-R102', 'Dr. Miller-R106', 'Dr. Smith-R101', 'Dr. Brown-R104', 'Dr. Johnson-R102'],
            Friday: ['Dr. Brown-R104', 'Dr. Johnson-R102', 'Prof. Williams-R103', 'Dr. Smith-R101', 'Prof. Davis-R105', 'Dr. Miller-R106', 'Dr. Brown-R104']
        }
    }
};
