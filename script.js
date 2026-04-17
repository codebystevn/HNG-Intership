// ================= STATE =================
const todo = {
  title: "Design Landing Page",
  description: "Create a responsive todo item card using HTML, CSS, JS.",
  priority: "High",
  status: "In Progress",
  dueDate: new Date("2026-04-18T23:59:59"),
};

// ================= ELEMENTS =================
const checkbox = document.getElementById("todoCheck");
const title = document.getElementById("title");
const statusText = document.getElementById("statusText");
const statusControl = document.getElementById("statusControl");

const viewMode = document.getElementById("viewMode");
const editForm = document.getElementById("editForm");
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDueDate = document.getElementById("editDueDate");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const descElement = document.querySelector(
  '[data-testid="test-todo-description"]',
);
const timeRemaining = document.getElementById("timeRemaining");
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');

const expandBtn = document.getElementById("expandBtn");
const descBox = document.getElementById("descBox");

// ================= UI UPDATE =================
function updateUI() {
  // status sync
  statusText.textContent = todo.status;
  statusControl.value = todo.status;
  checkbox.checked = todo.status === "Done";

  // title + desc
  title.textContent = todo.title;
  descElement.textContent = todo.description;

  // strike if done
  title.style.textDecoration = todo.status === "Done" ? "line-through" : "none";

  // priority
  updatePriorityUI();

  // date
  const formatted = todo.dueDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  dueDateEl.textContent = `• ${formatted}`;
  dueDateEl.setAttribute("datetime", todo.dueDate.toISOString());

  updateTime();
}

// ================= STATUS =================
statusControl.addEventListener("change", () => {
  todo.status = statusControl.value;
  updateUI();
});

checkbox.addEventListener("change", () => {
  todo.status = checkbox.checked ? "Done" : "Pending";
  updateUI();
});

// ================= EDIT MODE =================
editBtn.addEventListener("click", () => {
  editForm.style.display = "flex"; // show edit form
  viewMode.style.display = "none"; // hide view mode

  editTitle.value = todo.title;
  editDesc.value = todo.description;
  editPriority.value = todo.priority;
  editDueDate.value = todo.dueDate.toISOString().split("T")[0];
});

saveBtn.addEventListener("click", () => {
  todo.title = editTitle.value;
  todo.description = editDesc.value;
  todo.priority = editPriority.value;

  if (editDueDate.value) {
    todo.dueDate = new Date(editDueDate.value);
  }

  editForm.style.display = "none";
  viewMode.style.display = "block";
  updateUI();
});

cancelBtn.addEventListener("click", () => {
  editForm.style.display = "none";
  viewMode.style.display = "block";
});

// ================= DELETE =================
function deleteTask() {
  alert("Delete clicked");
}

// ================= EXPAND =================
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

// ================= PRIORITY =================
function updatePriorityUI() {
  const el = document.querySelector('[data-testid="test-todo-priority"]');
  el.textContent = todo.priority;
  el.className = `priority ${todo.priority.toLowerCase()}`;
}

// ================= TIME =================
function updateTime() {
  if (todo.status === "Done") {
    timeRemaining.textContent = "Completed";
    return;
  }

  const diff = todo.dueDate - new Date();

  if (diff < 0) {
    const hrs = Math.floor(Math.abs(diff) / 3600000);
    timeRemaining.textContent = `Overdue by ${hrs} hour(s)`;
  } else {
    const hrs = Math.floor(diff / 3600000);
    timeRemaining.textContent = `Due in ${hrs} hour(s)`;
  }
}

// ================= INIT =================
updateUI();
setInterval(updateTime, 60000);
