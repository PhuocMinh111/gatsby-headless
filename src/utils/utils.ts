export const currencyFormat = (number: number, isPayment: boolean) => {
  return isPayment
    ? new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
      }).format(number)
    : number;
};

const step = 50;
type position = {
  x: number | any;
  y: number | any;
  rotate: number | any;
};
export const calculateMove = (w: number, h: number): any => {
  let base: position = { x: 0, y: 0, rotate: 0 };
  let final: position = { x: 0, y: 0, rotate: 0 };
  const ceilX = w / 2;
  const ceilY = h / 2;
  // let x:number=0,y:number=0,rotateYdeg:number=0,rotateXdeg:number=0;
  const deg = [90, 0, -45, -125, -90];

  const rotateY = Math.floor(Math.random() * 10) % 2 === 0 ? true : false;

  // if (!rotateY) {
  // set front to end;

  //------rotation
  const ranDeg = [0, 45, -90, 90, 45];
  const finalDeg = randomFromArr(ranDeg);

  base.rotate = finalDeg;
  final.rotate = finalDeg;
  base.x = -ceilX;
  final.x = ceilX;
  //------------

  // 90 deg
  if (finalDeg === -90) {
    base.x = randomFromRange(-(w - step), w - step);
    final.x = base.x;
    base.y = ceilY;
    final.y = -ceilY;
  } else if (finalDeg === 45) {
    base.y = -ceilY;
    final.y = ceilY;
  } else if (finalDeg === -45) {
    base.y = h / 2;
    final.y = -(h / 2);
  } else if (finalDeg === 0) {
    let fixed = randomFromRange(-ceilY, ceilY);
    base.y = fixed;
    final.y = fixed;
  } else if (finalDeg === 90) {
    base.x = randomFromRange(-(w - step), w - step);
    final.x = base.x;
    base.y = -ceilY;
    final.y = ceilY;
  }

  // } else {

  // }

  return {
    begin: base,
    end: final
  };
};

export function randomFromArr(arr: Array<number>, step = 0): number {
  const size = arr.length;
  const random = arr.find(
    (num, index) => index === Math.floor(Math.random() * size - 1)
  );
  if (!random) return arr[0];
  return random;
}

export function randomFromRange(min: number, max: number): number {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;

  return ranNum;
}

export function flip() {
  return Math.floor(Math.random() * 10) % 2 === 0;
}
