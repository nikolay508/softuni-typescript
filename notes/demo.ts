// ./node_modules/.bin/tsc demo.ts && node demo.js


// 1. Intro to TypeScript

// Arrays
const arr: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [1, 2, 3, 4];
const arr3: string[] = ["a", "b", "c"];
const arr4: boolean[] = [true, false, true];

// Tuple Object.entries
let tuple: [string, number] = ["age", 23];
// tuple = [123, 'age']

// Enum
enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
}

function tellMeIfIsMonday(day: number) {
  return DaysOfWeek.Monday === day;
}

// Any
let x: any = 5;
x = [1, 2, 3];
x = true;
x = { name: "Peshi" };

// Unknown
let y: unknown = 5;
y = [3, 4, 5];
y = false;

// Void
function printMe(msg: string): void {
  //console.log(msg);
}

// printMe("Zdraveite kolegi!");

// Return Type
function getFullName(fN: string, lN?: string): string {
  if (lN) {
    return `${fN} ${lN}`;
  }
  return fN;
}

const fName = getFullName("Ivan", "Peshov");

// Return Types 2
const sum = (a: number, b = 5000): number => a + b;
// console.log(sum(123));

// DEMO
const intCollect: number[] = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach((int) => {
  //console.log(int);
});


// 2. Advanced Data Types and Interfaces

interface PersonDetails {
    name: string;
    age: number;
}

interface PersonHobbies {
    hobbies: string[];
}

const person: PersonDetails & PersonHobbies = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
}

let error: '404' | '505' | '403';
error = '404';

let statusMsg: 'success' | 'error' | 'loading';
statusMsg = 'success';

type User = {
    name: string;
    age: number;
}

const users: Array<User> = [{
    name: 'John',
    age: 30,
},
{
    name: 'Todd',
    age: 10,
},
{
    name: 'Ema',
    age: 20,
}]

function printUser(user: User) {
    //console.log(user.name, user.age);
}
printUser(users[0]);

const createUser = (name: string, age: number): User => {
    const user1 = {name, age};
    return user1;
}
const newUser = createUser('Pesho', 123456);
//console.log(newUser);

// -keyof
type Point = {x: number; y: number; z: number, a: number; b: number; c: number};
const point1: Point = {x: 10, y: 20, z: 30, a: 40, b: 50, c: 60};
const point2 = {} as Point;

Object.keys(point1).forEach((key) => {
    point2[key as keyof Point] = point1[key as keyof Point] * 2;
})

type Dog = {
    name: string;
    age?: number; // optional
}
const dog: Dog = {name: 'Rex', age: 5};

type Optional<T> = {[P in keyof T]?: T[P]};

const dog2: Optional<Dog> = {age: 5}; // name is not required now

// -Recursive
type myNode = {
    value: number;
    left: myNode | null;
    right: myNode | null;
}
const tree: myNode = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null,
    },
    right: {
        value: 3,
        left: null,
        right: null,
    }
}

interface Lion {
    rawr: () => void;
    name: string;
}
const lion: Lion = {
    rawr: () => { console.log('rawr'); },
    name: 'Simba',
}
//lion.rawr();

interface Cat {name: string;}
interface Cat {meow: () => void;} // overwrites the first Cat interface
const cat: Cat = {
    meow: () => { console.log('meow'); },
    name: 'Whiskers',
}

// -interface vs type
interface basicUser {
    name: string;
    age: number;
}
interface Admin extends basicUser {
    pincode: number;
}
const person1: Admin = {name: 'John', age: 30, pincode: 123456};


type firstInfo ={
    name: string;
    age: number;
}
type secondInfo = ({
    gender: string;
}) & firstInfo;
const person2: secondInfo = {name: 'John', age: 30, gender: 'male'};


