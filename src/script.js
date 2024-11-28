const moment = require("moment");
const Chart = require("chart.js/auto");
const $ = require("jquery").noConflict();

$(document).ready(() => {
  $("#addNewTask").on("click", () => {
    const taskText = prompt("Введите задачу:");
    if (taskText) {
      $(".task__list_ul").append(`<li>${taskText}</li>`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chart1 = new Chart(document.getElementById("chart1"), {
    type: "bar",
    data: {
      labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
      datasets: [
        {
          label: "# Количство выполненных задач",
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true, // График будет масштабироваться в зависимости от контейнера
      maintainAspectRatio: false, // Отключает сохранение пропорций при изменении размера
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
const timeNewYear = moment("2025-01-01");
const nowTime = moment();

const daysUntilNewYear = timeNewYear.diff(nowTime, "days");
let daysText = "дней";
if (daysUntilNewYear % 10 === 1) {
  daysText = "день";
} else if (daysUntilNewYear % 10 >= 2 && daysUntilNewYear % 10 <= 4) {
  daysText = "дня";
}
console.log(`Осталось ${daysUntilNewYear} ${daysText} до Нового года.`);

const dateNewYear = document.getElementById("dateNewYear");
dateNewYear.textContent = `Осталось ${daysUntilNewYear} ${daysText} до Нового года.`;
