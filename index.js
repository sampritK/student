function sortStudents(students) {
  // Sort by total marks
  students.sort((a, b) => {
    const totalMarksA = a.biology + a.chemistry;
    const totalMarksB = b.biology + b.chemistry;
    if (totalMarksA > totalMarksB) {
      return -1;
    } else if (totalMarksA < totalMarksB) {
      return 1;
    } else {
      // If total marks are the same, sort by biology marks
      if (a.biology > b.biology) {
        return -1;
      } else if (a.biology < b.biology) {
        return 1;
      } else {
        // If biology marks are the same, sort by date of birth
        const dobA = new Date(a.dob.split('-').reverse().join('-'));
        const dobB = new Date(b.dob.split('-').reverse().join('-'));
        if (dobA > dobB) {
          return 1;
        } else if (dobA < dobB) {
          return -1;
        } else {
          // If date of birth is the same, any order is acceptable
          return 0;
        }
      }
    }
  });
  return students.map((student) => student.name);
}

let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase1)); // [ 'Virat Kohli', 'Leo Messi', 'Cristiano Ronaldo', 'Rohit Sharma', 'Viswanathan Anand' ]

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

console.log(sortStudents(testCase2)); // [ 'Leo Messi', 'Cristiano Ronaldo', 'Viswanathan Anand', 'Rohit Sharma', 'Virat Kohli' ]
