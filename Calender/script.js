const monthYear = document.getElementById("month-year");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");
const daysContainer = document.getElementById("days");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Function to generate calendar days
function generateDays() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = [];

  for (let i = 1; i <= lastDay; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    day.classList.add("day");
    days.push(day);
  }

  return days;
}

// Function to render calendar
function renderCalendar() {
  const days = generateDays();
  daysContainer.innerHTML = "";
  days.forEach((day) => daysContainer.appendChild(day));
  monthYear.textContent = `${currentMonth + 1}/${currentYear}`;
}

// Event listeners
prevMonth.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Initial render

renderCalendar();
