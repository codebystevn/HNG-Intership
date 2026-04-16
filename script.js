const checkbox = document.getElementById('todoCheck');
const title = document.getElementById('title');
const status = document.getElementById('statusText');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        status.textContent = 'Completed';
        title.style.textDecoration = 'line-through';
    }
        else {
            status.textContent = 'In Progress';
            title.style.textDecoration = 'none';
        }
});

function editTask() {
    const newTitle = prompt('Enter new title:');
    if (newTitle) {
        title.textContent = newTitle;
    }
    console.log('Edit button clicked');
}

function deleteTask() {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        console.log('Delete button clicked');
    }
}