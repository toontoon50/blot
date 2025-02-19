/*
@title: kajonkietsuksa_logo
@author: toontoon
@snapshot: snapshot.png
*/

const width = 125;
const height = 125;

setDocDimensions(width, height);
//text eng__________________________________________________________
const t = new bt.Turtle();

// console.log(t);

// t.left = function (num) {
//   console.log(`LEFT ${num}`);
//   return t.left(num);
// }

// testArr.map((lol) => lol * 10)

const scale = 1

const originalLeft = t.left;
const originalRight = t.right;
const originalJump = t.jump;
const originalForward = t.forward;

// t.left = function (...args) {
//   console.log(`LEFT`, ...args);
//   return originalLeft.apply(t, args.map((lol) => lol * scale));
// };

// t.right = function (...args) {
//   console.log(`RIGHT`, ...args);
//   return originalRight.apply(t, args.map((lol) => lol * scale));
// };

t.jump = function (...args) {
  console.log(`JUMP`, ...args);

  const converted = args.map((lol) => {
    console.log(lol);
    return lol.map((ddd) => ddd * scale);
  });
  console.log("CONVERTED", converted[0]);
  return originalJump.apply(t, converted);
};

t.forward = function (...args) {
  console.log(`FORWARD`, ...args);
  return originalForward.apply(t, args.map((lol) => lol * scale));
};

function drawSnow(offsetcords, snowSize) {
  let lineSize = snowSize / 2;

  for (let i = 0; i < 8;i++) {
      t.jump(offsetcords);
      t.forward(lineSize);
      t.left(45);
  }
}

function randomFromRange(min,max) {
  return parseInt((Math.random() * (max - min) + min).toString().split(".")[0])
}

let bypass = 0;

function randomSnow(coords) {
  let randomSize = randomFromRange(5, 10);

  bypass = randomSize + 2;

  drawSnow(coords, randomSize);

  console.log("Draw snow random");
}

// drawSnow([6, 100], 10);

// 12 cus padding
// max snow size is 10
// extra 2

// for (let x = 12;x<height;x++) {
  // for (let y = 12;y<width;y++) {
  //   if (bypass > 0) {
  //     bypass--;
  //     continue;
  //   }
    
  //   let random = randomFromRange(1,4);

  //   console.log("snow random", random);

  //   console.log("loop snow");
  //   if (random == 1) {
  //     randomSnow([12,y])
  //   }
    
  // }
// }

let rangelol = randomFromRange(13,23)

for (let x = 0;x<rangelol;x++){

randomSnow([randomFromRange(10, 120), randomFromRange(10, 120)])
}
t.jump([0,0]);
t.setAngle(0);


//_______________________________________________________________
//leaf
t.left(-75)
t.jump([62,39])
t.left(162)
t.forward(5)
t.right(21)
t.forward(3)
t.right(72)
t.forward(6)
for (let i = 0; i < 10; i++) t.left(9).forward(3)
for (let i = 0; i < 21; i++) t.left(3).forward(2)
for (let i = 0; i < 12; i++) t.right(4).forward(1)
t.forward(5)
t.left(5)
t.forward(8)
t.left(164)
t.forward(4)
for (let i = 0; i < 16; i++) t.forward(1).left(-1)
t.right(17)
t.forward(3)
t.left(-19)
for (let i = 0; i < 35; i++)t.forward(1).left(1)
for (let i = 0; i < 32; i++)t.left(3.2).forward(1.1)
t.left(15)
t.forward(8)
t.jump([62,39])
t.left(167)
t.forward(1.5)
t.right(91)
t.forward(5)
t.right(20)
t.forward(4)
t.left(18)
t.forward(9)
t.left(7)
t.forward(18)
t.left(3)
t.forward(48)
t.jump([62,48.89])
t.left(352)
t.forward(8)
t.left(6)
t.forward(60)
t.jump([62.21,51])
t.left(71)
t.forward(4.92)
for (let i = 0; i < 4; i++)t.right(4).forward(4)
t.right(13)
t.forward(11)
t.jump([62.76,59])
t.left(23)
for (let i = 0; i < 3; i++)t.forward(8).right(7)
t.right(7)
t.forward(6.58)
t.jump([62.72,64])
t.left(16)
t.forward(13)
t.right(2)
t.forward(6)
for (let i = 0; i < 9.; i++)t.right(2).forward(1.06)
t.jump([62.64,74])
t.left(18)
t.forward(12)
for (let i = 0; i < 6; i++)t.right(7).forward(2)
t.jump([62.56,82])
t.left(45)
t.forward(7)
for (let i = 0; i < 6; i++)t.right(7).forward(1.85)
t.jump([62.44,92])
t.left(42)
t.forward(3)
for (let i = 0; i < 6; i++)t.right(7).forward(1.22)
t.jump([63.11,51])
t.right(90)
t.forward(5)
for (let i = 0; i < 6; i++)t.left(7).forward(4.48)
t.jump([64,60])
t.right(36)
t.forward(5)
for (let i = 0; i < 4; i++)t.left(7).forward(6.09)
t.jump([64,71])
t.right(29)
t.forward(5)
for (let i = 0; i < 5; i++)t.left(9).forward(4.32)
t.jump([64,78])
t.right(34)
t.forward(4)
for (let i = 0; i < 6; i++)t.left(9).forward(3.19)
t.jump([63.63,87])
t.right(59)
t.forward(2)
for (let i = 0; i < 6; i++)t.left(8).forward(2.31)
t.jump([63.3,94])
t.right(39)
t.forward(1)
for (let i = 0; i < 6; i++)t.left(4).forward(1.48)
//----------------------------------
//text
t.jump([15.625,7])
t.right(56.37)
t.forward(93.75)
t.jump([15.625,30])
t.forward(18.75)
t.jump([90,30])
t.forward(18.75)
t.jump([30,25])
t.right(90)
t.forward(6)
t.jump([30,22])
t.left(45)
t.forward(4)
t.jump([30,22])
t.left(90)
t.forward(4)
t.jump([34,19])
t.left(33)
t.forward(6)
t.right(156)
t.forward(6)
t.jump([34.60,22])
t.left(78)
t.forward(1.3)
t.jump([39,25])
t.forward(3)
t.jump([40.5,25])
t.right(90)
t.forward(4.5)
for (let i = 0; i < 59; i++)t.right(3).forward(0.075)
t.jump([43,24])
t.left(177)
t.forward(4)
for (let i = 0; i < 5; i++)t.left(30).forward(0.65)
t.left(30)
t.forward(4)
for (let i = 0; i < 5; i++)t.left(30).forward(0.65)
t.jump([47,25])
t.right(-30)
t.forward(6)
t.jump([47,25])
t.left(30)
t.forward(7)
t.right(210)
t.forward(6)
t.jump([52,19])
t.forward(6)
t.jump([52,22])
t.right(45)
t.forward(4)
t.jump([52,22])
t.right(90)
t.forward(4)
t.jump([56,25])
t.left(45)
t.forward(3)
t.jump([57.6,25])
t.right(90)
t.forward(6)
t.jump([59,19])
t.right(90)
t.forward(3)
t.jump([61,25])
t.left(90)
t.forward(6)
t.left(90)
t.forward(3)
t.jump([61,22])
t.forward(3)
t.jump([61,25])
t.forward(3)
t.jump([66,25])
t.forward(3)
t.jump([67.6,25])
t.right(90)
t.forward(6)
t.jump([74,25])
t.right(90)
t.forward(4)
t.left(90)
t.forward(3)
t.left(90)
t.forward(4)
t.right(90)
t.forward(3)
t.right(90)
t.forward(4)
t.jump([76,25])
t.left(90)
t.forward(6)
t.left(90)
t.forward(4)
t.left(90)
t.forward(6)
t.jump([82,19])
t.forward(6)
t.jump([82,22])
t.right(45)
t.forward(4)
t.jump([82,22])
t.right(90)
t.forward(4)
t.jump([86,25])
t.left(45)
t.forward(4)
t.jump([86,25])
t.right(90)
t.forward(3)
t.left(90)
t.forward(4)
t.right(90)
t.forward(3)
t.right(90)
t.forward(4)
t.jump([94,25])
t.left(82)
t.forward(6)
t.jump([94,25])
t.right(-18)
t.forward(6)
t.jump([93.60,22])
t.right(100)
t.forward(-0.95)
t.jump([50,14])
t.forward(4)
t.left(90)
t.forward(3)
t.left(90)
t.forward(4)
t.right(90)
t.forward(3)
t.right(90)
t.forward(4)
t.jump([56,14])
t.forward(4)
t.left(90)
t.forward(6)
t.left(90)
t.forward(4)
t.jump([58,14])
t.right(90)
t.forward(6)
t.jump([62,14])
t.forward(6)
t.jump([58,11])
t.left(90)
t.forward(4)

t.jump([70,14])
t.forward(4)
t.right(90)
t.forward(6)
t.right(90)
t.forward(4)
t.right(90)
t.forward(6)
t.jump([64,14])
t.right(90)
t.forward(4)
t.right(90)
t.forward(6)
t.right(90)
t.forward(4)
t.right(90)
t.forward(6)
t.right(180)
t.jump([76,14])
t.forward(6)
t.left(90)
t.forward(4)

t.jump([45.64,28])
t.left(90)
t.forward(2)

for (let i = 0; i < 4; i++)t.left(22).forward(0.27)
for (let i = 0; i < 6; i++)t.right(30).forward(0.30)
t.forward(1)
t.jump([46.55,28])
t.left(332)
for (let i = 0; i < 7; i++)t.left(30).forward(0.27)
t.forward(-0.1)
for (let i = 0; i < 7; i++)t.right(30).forward(0.27)
t.jump([48.11,30])
t.left(20)
for (let i = 0; i < 4; i++)t.right(34).forward(0.64)
t.right(98)
t.forward(1)
t.jump([49,30])
t.left(155)
t.forward(1.8)
for (let i = 0; i < 7; i++)t.left(23).forward(0.13)
t.jump([50.2,28])
t.left(258)
for (let i = 0; i < 7; i++)t.left(30).forward(0.27)
t.forward(-0.1)
for (let i = 0; i < 7; i++)t.right(30).forward(0.27)
t.jump([49.8,30.6])
t.right(-30)
t.forward(1)
t.left(90)
t.forward(0.5)
t.jump([52.1,29.94])
t.left(45)
for (let i = 0; i < 13; i++)t.right(-19).forward(0.16)
t.left(-200)
for (let i = 0; i < 86; i++)t.right(-3.11).forward(0.031)
t.forward(1.4)
t.jump([53.3,30])
t.forward(-1.4)
t.right(175)
for (let i = 0; i < 82; i++)t.right(-2.02).forward(0.025)
t.jump([54.73,30])
t.right(171)
t.forward(2)
t.jump([55.47,29])
t.right(643)
for (let i = 0; i < 86; i++)t.right(-2.52).forward(0.019)
t.jump([55.47,29])
t.left(67)
t.forward(0.5)
for (let i = 0; i < 86; i++)t.right(-2.09).forward(0.018)
t.forward(1.33)
t.jump([57.02,29.76])
t.right(55)
for (let i = 0; i < 29; i++)t.left(-7.34).forward(0.122)
t.right(76)
t.forward(1)
t.jump([59.79,29.80])
t.left(38)
for (let i = 0; i < 31; i++)t.right(-7.48).forward(0.069)
t.left(-32)
for (let i = 0; i < 31; i++)t.left(-8.28).forward(0.064)
t.jump([60.98,29.78])
t.left(183)
t.forward(1.59)
for (let i = 0; i < 22; i++)t.right(-8.28).forward(0.032)
t.jump([62.27,28.02])
t.right(2)
t.forward(1.1)
for (let i = 0; i < 22; i++)t.left(-3.66).forward(0.024)
t.forward(0.5)
t.left(164)
t.forward(1)
for (let i = 0; i < 1; i++)t.right(510).forward(1)
for (let i = 0; i < 31; i++)t.left(-3.66).forward(0.043)
t.forward(1.4)
t.jump([63.62,31.24])
t.forward(0.5)
t.right(90)
t.forward(1)
t.jump([65.35,29.89])
t.left(-44)
for (let i = 0; i < 13; i++)t.right(-19).forward(0.16)
t.left(-200)
for (let i = 0; i < 86; i++)t.right(-3.11).forward(0.031)
t.forward(1.4)
t.jump([67.66,29.89])
t.left(50)
for (let i = 0; i < 78; i++)t.right(-3.11).forward(0.031)
t.left(-42)
for (let i = 0; i < 86; i++)t.left(-3.21).forward(0.028)
t.jump([69.57,28.87])
t.right(-102)
for (let i = 0; i < 26; i++)t.right(-2.89).forward(0.022)
t.right(-11)
t.forward(0.7)
t.left(195)
t.forward(1.2)
for (let i = 0; i < 55; i++)t.left(-3.26).forward(0.031)
t.forward(1.1)
t.jump([70.26,29.85])
t.right(54)
t.forward(0.5)
t.jump([68.96,30.59])
t.right(214)
t.forward(1)
for (let i = 0; i < 99; i++)t.right(-3.26).forward(0.010)
t.jump([70.91,28.02])
t.right(234)
t.right(2)
t.forward(1.3)
for (let i = 0; i < 22; i++)t.left(-3.66).forward(0.024)
t.forward(0.3)
t.left(153)
t.forward(1)
for (let i = 0; i < 1; i++)t.right(510).forward(1)
for (let i = 0; i < 31; i++)t.left(-3.23).forward(0.043)
t.forward(1.4)
t.jump([73.44,29.91])
t.forward(1.4)
for (let i = 0; i < 31; i++)t.right(-5.81).forward(0.070)
t.forward(1.3)
t.jump([75.32,28.88])
t.left(90)
t.forward(0.9)
for (let i = 0; i < 34; i++)t.left(-19.58).forward(0.072)
t.jump([77.06,29.51])
t.left(-144)
for (let i = 0; i < 31; i++)t.right(-5.81).forward(0.070)
t.jump([77.06,29.51])
t.forward(1.5)


drawLines(t.lines())
