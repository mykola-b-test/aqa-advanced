
let averageGrade = Math.round(Math.random() * 100); // random avarege point from 0 to 100
console.log(averageGrade);

switch (true) {
    case (averageGrade <= 100 && averageGrade > 90):
        console.log("Відмінно");
        break;
    case (averageGrade <= 90 && averageGrade > 80):
        console.log("Дуже добре");
        break;
    case (averageGrade <=80 && averageGrade > 70):
        console.log("Добре");
        break;
    case (averageGrade <=70 && averageGrade >= 60):
        console.log("Задовільно");
        break;
    case (averageGrade < 60 && averageGrade >= 0):
        console.log("Незадовільно");
        break;
    default:
        console.log("Оцінка поза межами допустимого діапазону (0-100)");
}
