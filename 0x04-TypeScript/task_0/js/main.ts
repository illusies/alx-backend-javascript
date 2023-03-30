interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
}


const student_1: Student = {
  firstName: 'John',
  lastName: 'McDove',
  age: 31,
  location: 'Lagos',
}

const student_2: Student = {
  firstName: 'Ashley',
  lastName: 'Baker',
  age: 32,
  location: 'Connecticut',
}


const studentList = [student_1, student_2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
