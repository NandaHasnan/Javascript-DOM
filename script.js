// Finding Elements
const redBgButton = document.getElementById('redBgButton');
const blueBgButton = document.getElementById('blueBgButton');
const whiteBgButton = document.getElementById('whiteBgButton');
const openGoogleButton = document.getElementById('openGoogle');
const openYoutubeButton = document.getElementById('openYoutube');
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const dateInput = document.getElementById('dateInput');
const todoTableBody = document.querySelector('#todoTable tbody');

let todoCount = 0;
let editingRow = null; // Variable to track the row being edited

// Change Background Color
redBgButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

blueBgButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});

whiteBgButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
});

// Open Google and Youtube
openGoogleButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

openYoutubeButton.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com';
});

// Add or Edit Todo Item
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    const todoDate = dateInput.value;

    if (!todoText || !todoDate) {
        alert('semua input wajib diisi');
        return;
    }

    if (editingRow) {
        // Update the existing row
        editingRow.cells[1].innerHTML = todoText;
        editingRow.cells[2].innerHTML = todoDate;
        editingRow = null;
        todoInput.value = '';
        dateInput.value = '';
        submitButton.innerHTML = 'Submit'; // Change button text back to Submit
    } else {
        // Add new row
        todoCount++;
        const newRow = todoTableBody.insertRow();

        newRow.insertCell(0).innerHTML = todoCount;
        newRow.insertCell(1).innerHTML = todoText;
        newRow.insertCell(2).innerHTML = todoDate;

        const actionCell = newRow.insertCell(3);

        // Edit Button
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.onclick = () => {
            todoInput.value = todoText;
            dateInput.value = todoDate;
            editingRow = newRow;
            submitButton.innerHTML = 'Submit'; // Change button text to Update
        };
        actionCell.appendChild(editButton);

        todoInput.value = '';
        dateInput.value = '';

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = () => {
            todoTableBody.deleteRow(newRow.rowIndex - 1);
            updateTodoIds();
        };
        actionCell.appendChild(deleteButton);
    }
});

// Function to update the IDs after a row is deleted
function updateTodoIds() {
    const rows = todoTableBody.rows;
    todoCount = rows.length;
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerHTML = i + 1;
    }
}

