/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Dates {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function isWeekend(day: Dates): boolean {
    const result = day === Dates.Saturday || day === Dates.Sunday;
    console.log(`Is ${Dates[day]} a weekend? ${result}`);
    return result;
}

// Test calls
isWeekend(Dates.Monday);
isWeekend(Dates.Friday);
isWeekend(Dates.Saturday);
isWeekend(Dates.Tuesday);
isWeekend(Dates.Sunday);
