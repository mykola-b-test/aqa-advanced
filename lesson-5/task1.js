
let averageGrade = Math.round(Math.random() * 100); // random avarege point from 0 to 100
console.log(averageGrade);

if (averageGrade <= 100 && averageGrade > 90) {
    console.log("Відмінно");
} else if (averageGrade <= 90 && averageGrade > 80) {
    console.log("Дуже добре");
} else if (averageGrade <=80 && averageGrade > 70) {
    console.log("Добре");
} else if (averageGrade <=70 && averageGrade >= 60) {
    console.log("Задовільно");
} else if (averageGrade < 60 && averageGrade >= 0) {
    console.log("Незадовільно");
} else {
    console.log("Оцінка поза межами допустимого діапазону (0-100)");
}