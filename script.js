// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
const Number = (number) => {
  if (number > 0) {
    console.log("დადებითია");
  } else {
    console.log("უარყოფითია");
  }
};

// Example usage:
Number(5);
Number(-2);
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
const sum = (() => {
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  return result;
})();

console.log(sum);
// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი
const number = 7;

let result;

if (number % 2 === 0) {
  result = "even";
} else {
  result = "odd";
}

console.log(`The number ${number} is ${result}.`);
// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
const car = {
  year: 1993,
  model: "mercedes c class",
  calculateAge: function () {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    return age;
  },
};

console.log(`The ${car.model} is ${car.calculateAge()} years old.`);
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
const inputWord = "ჭუჭრუტანა";
const reversedWord = inputWord.split("").reverse().join("");

console.log(`The reversed word is: ${reversedWord}`);
