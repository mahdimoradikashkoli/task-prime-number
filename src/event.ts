import { input } from "./getElement.js";
export function generatRandomeNumber() {
  const number = Math.floor(Math.random() * 1000) + 9000;
  input!.value = number.toString();
}

export function clearInput() {
  console.log("click");
  input!.value = "";
}

export function generateFirstPrimeNumber() {
  // const primeNumber=0
  while (true) {
    const number = Math.floor(Math.random() * 1000);
    if (number <= 1) continue; // اگر عدد کمتر یا مساوی 1 بود، به تولید عدد بعدی ادامه بده
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break; // اگر عدد بخش‌پذیر بود، از حلقه خارج شو و عدد جدیدی تولید کن
      }
    }
    if (isPrime) return input!.value=number.toString() ; // اگر عدد اول بود، آن را برگردان
  }
}


