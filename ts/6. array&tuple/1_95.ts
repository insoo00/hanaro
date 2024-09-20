const SIZE = [
  { id: 'XS', price: 8000 },
  { id: 'S', price: 10000 },
  { id: 'M', price: 12000 },
  { id: 'L', price: 14000 },
  { id: 'XL', price: 15000 },
];

// const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

// const totalPrice = SIZE.reduce(
//   (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
//   0
// );

// 1. SIZE 배열의 id 값들을 추출하여 타입으로 정의
type SizeId = (typeof SIZE)[number]['id'];

// 2. sizeOption 객체의 타입을 정의
const sizeOption: Record<SizeId, number> = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);
