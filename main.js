// 1-masala  !10 yani 10 faktorialni hisoblash faktorial degani 1*2*3*...10 degani
let faktorial = 1;
for (let son = 1; son <= 10; son++) {
  faktorial *= son;
}
console.log(faktorial);

// 2-masala karra jadvalini chiqarish  daftar orqasidagidek.
for (let i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${j} x ${i} = ${j * i}`);
  }
}
// 3-masala 1dan 10gacha sonlar kvadratini chiqarish
for (let k = 1; k <= 10; k++) {
  console.log(k ** 2);
}
//4-masala 1dan 50gacha techta juft son borligini va nechta toq son borligini chiqarish
let juft = 0;
let toq = 0;
for (let son = 1; son <= 50; son++) {
  if (son % 2 === 0) {
    juft++;
  } else if (son % 2 !== 0) {
    toq++;
  }
}
console.log("Juft sonlar " + juft);
console.log("Toq sonlar " + toq);
//5-masala  foydalanuvchi son kiritadi uni tub yoki tub son emasligini aniqlash tub son degani faqat 1ga va o'ziga bo'linadigan son,

//num / 1 === num && num / num === 1 && num % 2 !== 0

// 6-masala 1 dan 100 gacha sonlar ichida 7 ga qoldiqsiz boвЂlinadigan sonlarni chiqarish
for (let k = 1; k <= 100; k++) {
  if (k % 7 === 0) {
    console.log(k);
  }
}
//7-masala 1 dan 50 gacha sonlar ichida 3 ga ham 5 ga ham boвЂlinadigan sonlarni chiqarish bir vaqtda ham 3ga ham 5ga bolinadigan
for (let k = 1; k <= 50; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log(k);
  }
}
// 8-masala  1 dan 100 gacha sonlar ichida juft sonlar yigвЂindisini topish
let yigindi = 0;
for (let son = 1; son <= 100; son++) {
  if (son % 2 === 0) {
    yigindi += son;
  }
}
console.log(yigindi);
// 9-masala  shu korinishda chiqsin
// output
// 12
// 123
// 1234
// 12345
console.log("output");
console.log(12);
console.log(123);
console.log(1234);
console.log(12345);
// 10-masala  1dan 50gacha bolgan sonlar orasida toqlarini 3ga qoldiqsiz bolinadiganlarini yegindisini hisoblash  bu degani ham toq bolsin ham 3ga qoldiqsiz bolinsin degani
let natija = 0;
for (let son = 1; son <= 50; son++) {
  if (son % 2 !== 0 && son % 3 === 0) {
    natija += son;
    console.log(natija);
  }
}
