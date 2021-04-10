//for구문을 이용한 console 별찍기

let outPut = "";

for (var i = 0; i < 15; i++) {
  //1. 공백 감소
  for (var j = 15; j > i; j--) {
    // console.log(`i:${i} , j:${j}`);
    outPut += " ";
  }
  //2. 별 증가
  for (var k = 0; k < i * 2 + 1; k++) {
    console.log(`i:${i} , k:${k}`);
    outPut += "*";
  }
  //3.즐바꿈
  outPut += "\n";
}
console.log(outPut);

//j > i 는, i가 j보다 같거나 작을 때 까지 i를 반복해서 출력하는 것을 의미한다. 캡1

let outPut2 = "";
