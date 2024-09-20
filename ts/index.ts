let age = 14;
let name1 = 'John';
{
  let name = 'qwe';
}

type Member = {
  name: string;
  addr: number;
  discountRate: number;
};

type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

// let customer: Customer = {
//   age: 14,
//   addr: 123,
// };
