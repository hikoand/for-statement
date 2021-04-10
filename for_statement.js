//1. basic for statement

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i : ${i}, j : ${j}`);
  }
}

//2. break

let outPut = "";
for (let i = 0; i < 10; i++) {
  outPut += "*";
  console.log(outPut);
  if (i == 5) {
    console.log("6번째 입니다.");
    break; //for구문에서 빠져나감
  }
}

//3. even, odd

let outPut2 = "";

for (let i = 1; i < 10; i++) {
  if (i % 2 == 1) {
    outPut2 += "홀";
    console.log(outPut2);
    console.log(i);
  } else if (i % 2 == 0) {
    outPut2 += "짝";
    console.log(outPut2);
    console.log(i);
  }
}

//3. for 구문은 1분에 몇 분 도는가 테스트!

// let startTime = new Date().getTime(); //시작시간
// console.log(startTime);

// for (let i = 0; new Date().getTime() < startTime + 1000; i++) {
//   console.log(startTime + "," + new Date().getTime());
// }

//4. array

let checkNum = 0;
let fruits = ["apple", "banana", "orange", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`We have a ${fruits[i]}.`);
}

//Checking array index
let shopping = "apple";

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == shopping) {
    checkNum = 1;
  }
}

if (checkNum == 1) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == shopping) {
      console.log(`맛있는 ${shopping}을 구매하였습니다.`);
      break;
    }
  }
} else {
  console.log(`${shopping}는 미입고 상품입니다.`);
}

//array가 두개 일 때

checkNum = 0;
let array = [
  ["반바지", "슬랙스", "치마"],
  ["자켓", "조끼"],
];

let cloths = "슬랙스";

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] == cloths) {
      checkNum = 1;
    }
  }
}

if (checkNum == 1) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++)
      if (array[i][j] == cloths) {
        console.log(`${cloths}는 재고가 있습니다`);
        break;
      }
  }
} else {
  console.log(`${cloths}는 재고가 없습니다.`);
}
