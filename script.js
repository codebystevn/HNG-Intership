//logic for the todo item card
const todo = {
  title: "Design Landing Page",
  description:
    "Create a responsive todo item card. Make sure to use html, css and vanilla js.",
  priority: "High",
  status: "In Progress",
  dueDate: new Date("2024-04-18T23:59:59"),
  completed: false,
};

const checkbox = document.getElementById("todoCheck");
const title = document.getElementById("title");
const statusText = document.getElementById("statusText");
const statusControl = document.getElementById("statusControl");
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDueDate = document.getElementById("editDueDate");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const deleteBtn = document.querySelector(
  '[data-testid="test-todo-delete-button"]',
);
const descElement = document.querySelector(
  '[data-testid="test-todo-description"]',
);
descElement.textContent = todo.description;
const timeRemaining = document.getElementById("timeRemaining");
const priorityIndicator = document.querySelector(
  '[data-testid="test-todo-priority-indicator"]',
);
const expandBtn = document.getElementById("expandBtn");
const descBox = document.getElementById("descBox");
const showMoreBtn = document.getElementById("expandBtn");
const showlessBtn = document.getElementById("expandBtn");

function updateUI() {
  statusText.textContent = todo.status;
  statusControl.value = todo.status;
  checkbox.checked = todo.status === "Completed";
  title.style.textDecoration =
    todo.status === "Completed" ? "line-through" : "none";
  title.textContent = todo.title;
  descElement.textContent = todo.description;
  updatePriorityUI();
  updateTime();
}

statusControl.addEventListener("change", function () {
  todo.status = statusControl.value;
  updateUI();
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    todo.status = "Completed";
  } else {
    todo.status = "In Progress";
  }
  updateUI();
});

function editTask() {
  const newTitle = prompt("Enter new title:");
  if (newTitle) {
    title.textContent = newTitle;
  }
  console.log("Edit button clicked");
}

editBtn.addEventListener("click", function (event) {
  editForm.hidden = false;
});

// preload values into the form
editTitle.value = todo.title;
editDesc.value = todo.description;
editPriority.value = todo.priority;

saveBtn.addEventListener("click", function () {
  todo.title = editTitle.value;
  todo.description = editDesc.value;
  todo.priority = editPriority.value;
  todo.dueDate = new Date(editDueDate.value);
  editForm.hidden = true;
  updateUI();
});

function saveTask() {
  console.log("Save button clicked");
}

cancelBtn.addEventListener("click", function () {
  editForm.hidden = true;
});

function cancelTask() {
  const confirmCancel = confirm(
    "Are you sure you want to cancel editing this task?",
  );
  if (confirmCancel) {
    editForm.hidden = true;
  }
  console.log("Cancel button clicked");
}

function deleteTask() {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    console.log("Delete button clicked");
  }
}

let expanded = false;

expandBtn.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    descBox.style.maxHeight = "none";
    expandBtn.textContent = "Show Less";
  } else {
    descBox.style.maxHeight = "60px";
    expandBtn.textContent = "Show More";
  }
});

function updatePriorityUI() {
  const prioritySpan = document.querySelector(
    '[data-testid="test-todo-priority"]',
  );
  prioritySpan.textContent = todo.priority;
  prioritySpan.className = `priority ${todo.priority.toLowerCase()}`;
}

function updateTime() {
  if (todo.status === "Done") {
    timeRemaining.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = todo.dueDate - now;

  if (diff < 0) {
    const absDiff = Math.abs(diff);
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((absDiff / 60000) % 60);

    if (days > 0) {
      timeRemaining.textContent = `Overdue by ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      timeRemaining.textContent = `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      timeRemaining.textContent = `Overdue by ${mins} minute${mins > 1 ? "s" : ""}`;
    }
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 60000) % 60);

    if (days > 0) {
      timeRemaining.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      timeRemaining.textContent = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      timeRemaining.textContent = `Due in ${mins} minute${mins > 1 ? "s" : ""}`;
    }
  }
}

setInterval(updateTime, 60000);
updateTime();
