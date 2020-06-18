// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
// // const person = {
//   name: "David",
//   age: 32,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY,AUTHOR}

const person = {
  name: "David",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin','user']

//
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
//
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()) !!!Error
// }

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
