// ./node_modules/.bin/tsc demo.ts && node demo.js
// 
// 
// // 1. Intro to TypeScript
// 
// // Arrays
// const arr: number[] = [1, 2, 3, 4];
// const arr2: Array<number> = [1, 2, 3, 4];
// const arr3: string[] = ["a", "b", "c"];
// const arr4: boolean[] = [true, false, true];
// 
// // Tuple Object.entries
// let tuple: [string, number] = ["age", 23];
// // tuple = [123, 'age']
// 
// // Enum
// enum DaysOfWeek {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
// }
// 
// function tellMeIfIsMonday(day: number) {
//   return DaysOfWeek.Monday === day;
// }
// 
// // Any
// let x: any = 5;
// x = [1, 2, 3];
// x = true;
// x = { name: "Peshi" };
// 
// // Unknown
// let y: unknown = 5;
// y = [3, 4, 5];
// y = false;
// 
// // Void
// function printMe(msg: string): void {
//   //console.log(msg);
// }
// 
// // printMe("Zdraveite kolegi!");
// 
// // Return Type
// function getFullName(fN: string, lN?: string): string {
//   if (lN) {
//     return `${fN} ${lN}`;
//   }
//   return fN;
// }
// 
// const fName = getFullName("Ivan", "Peshov");
// 
// // Return Types 2
// const sum = (a: number, b = 5000): number => a + b;
// // console.log(sum(123));
// 
// // DEMO
// const intCollect: number[] = [1, 2, 3, 4, 5, 6, 7];
// intCollect.forEach((int) => {
//   //console.log(int);
// });
// 
// 
// // 2. Advanced Data Types and Interfaces
// 
// interface PersonDetails {
//     name: string;
//     age: number;
// }
// 
// interface PersonHobbies {
//     hobbies: string[];
// }
// 
// const person: PersonDetails & PersonHobbies = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "traveling", "coding"],
// }
// 
// let error: '404' | '505' | '403';
// error = '404';
// 
// let statusMsg: 'success' | 'error' | 'loading';
// statusMsg = 'success';
// 
// type User = {
//     name: string;
//     age: number;
// }
// 
// const users: Array<User> = [{
//     name: 'John',
//     age: 30,
// },
// {
//     name: 'Todd',
//     age: 10,
// },
// {
//     name: 'Ema',
//     age: 20,
// }]
// 
// function printUser(user: User) {
//     //console.log(user.name, user.age);
// }
// printUser(users[0]);
// 
// const createUser = (name: string, age: number): User => {
//     const user1 = {name, age};
//     return user1;
// }
// const newUser = createUser('Pesho', 123456);
// //console.log(newUser);
// 
// // -keyof
// type Point = {x: number; y: number; z: number, a: number; b: number; c: number};
// const point1: Point = {x: 10, y: 20, z: 30, a: 40, b: 50, c: 60};
// const point2 = {} as Point;
// 
// Object.keys(point1).forEach((key) => {
//     point2[key as keyof Point] = point1[key as keyof Point] * 2;
// })
// 
// type Dog = {
//     name: string;
//     age?: number; // optional
// }
// const dog: Dog = {name: 'Rex', age: 5};
// 
// type Optional<T> = {[P in keyof T]?: T[P]};
// 
// const dog2: Optional<Dog> = {age: 5}; // name is not required now
// 
// // -Recursive
// type myNode = {
//     value: number;
//     left: myNode | null;
//     right: myNode | null;
// }
// const tree: myNode = {
//     value: 1,
//     left: {
//         value: 2,
//         left: null,
//         right: null,
//     },
//     right: {
//         value: 3,
//         left: null,
//         right: null,
//     }
// }
// 
// interface Lion {
//     rawr: () => void;
//     name: string;
// }
// const lion: Lion = {
//     rawr: () => { console.log('rawr'); },
//     name: 'Simba',
// }
// //lion.rawr();
// 
// interface Cat {name: string;}
// interface Cat {meow: () => void;} // overwrites the first Cat interface
// const cat: Cat = {
//     meow: () => { console.log('meow'); },
//     name: 'Whiskers',
// }
// 
// // -interface vs type
// interface basicUser {
//     name: string;
//     age: number;
// }
// interface Admin extends basicUser {
//     pincode: number;
// }
// const person1: Admin = {name: 'John', age: 30, pincode: 123456};
// 
// 
// type firstInfo ={
//     name: string;
//     age: number;
// }
// type secondInfo = ({
//     gender: string;
// }) & firstInfo;
// const person2: secondInfo = {name: 'John', age: 30, gender: 'male'};
// 
// 3. OOP
// Class vs Object
// class Mammal {
//   numberOfLeg: number;
//   fulor: string;
//   suhozemenLiE: boolean;
//   constructor(numberOfLeg: number, furColor: string, suhozemenLiE: boolean) {
//     this.numberOfLeg = numberOfLeg;
//     this.furColor = furColor;
//     this.suhozemenLiE = suhozemenLiE;
//   }
//   getDetails(): void {
//     console.log(
//       `This mammal is living on the ground: ${this.suhozemenLiE}, it has fur color: ${this.furColor}, it has ${this.numberOfLeg} number of legs.`
//     );
//   }
// }
// const dog = new Mammal(4, "brown", true);
// dog.getDetails();
// const cat = new Mammal(4, "black", true);
// cat.getDetails();
// const dolphin = new Mammal(0, "none", false);
// dolphin.getDetails();
// Procedural Programming
// let salary = 30000;
// let overtime = 10;
// let rate = 20;
// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }
// console.log(getWage(salary, overtime, rate));
// OOP - Encapsulation
// const employee = {
//   salary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.salary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());
// class Person {
//   firstName: string;
//   lastName: string;
//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullNameInUpperCase() {
//     return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
//   }
// }
// const ivanPerson = new Person("Ivan", "Petrov");
// console.log(ivanPerson.getFullNameInUpperCase());
// const martinPerson = new Person("Martin", "Ivanov");
// console.log(martinPerson.getFullNameInUpperCase());
// Abstraction
// interface MyRemote {
//   switchChannelDown: () => void;
//   switchChannelUp: () => void;
//   toggleTurnOnTv: () => void;
// }
// class Remote implements MyRemote {
//   private channelNumber: number = 1;
//   private tvIsOff = true;
//   private provideSignalToA() {
//     return "A";
//   }
//   private provideSignalToB() {
//     return "B";
//   }
//   private provideSignalToC() {
//     return "C";
//   }
//   private provideSignalToD() {
//     return "D";
//   }
//   private turnOnTV() {
//     console.log("TV is turned ON");
//     this.tvIsOff = !this.tvIsOff;
//   }
//   private turnOffTV() {
//     console.log("TV is turned OFF");
//     this.tvIsOff = !this.tvIsOff;
//   }
//   public toggleTurnOnTv() {
//     if (this.tvIsOff) {
//       this.turnOnTV();
//     } else {
//       this.turnOffTV();
//     }
//   }
//   public switchChannelUp() {
//     const a = this.provideSignalToA();
//     const b = this.provideSignalToB();
//     const d = this.provideSignalToD();
//     const signal = a + b + d;
//     if (signal === "ABD") {
//       this.channelNumber += 1;
//       console.log("Channel switched to " + this.channelNumber);
//     }
//   }
//   public switchChannelDown() {
//     const d = this.provideSignalToD();
//     const b = this.provideSignalToB();
//     const c = this.provideSignalToC();
//     const signal = d + b + c;
//     if (signal === "DBC") {
//       this.channelNumber -= 1;
//       console.log("Channel switched to " + this.channelNumber);
//     }
//   }
// }
// const myRemote = new Remote();
// myRemote.toggleTurnOnTv();
// myRemote.switchChannelUp();
// myRemote.switchChannelUp();
// myRemote.switchChannelUp();
// myRemote.switchChannelDown();
// myRemote.toggleTurnOnTv();
// Inheritance
// class HtmlElement {
//   innerHtml = "";
//   constructor(innerHtml: string) {
//     this.innerHtml = innerHtml;
//   }
//   click() {
//     console.log("Element was clicked!");
//   }
//   focus() {
//     console.log("This element is on focus!");
//   }
// }
// class TextBox extends HtmlElement {
//   name = "TextBox";
//   constructor() {
//     super("This is the innerHtml for TextBox");
//   }
// }
// class Select extends HtmlElement {
//   name = "Select";
//   constructor() {
//     super("This is the innerHtml for Select");
//   }
// }
// class CheckBox extends HtmlElement {
//   name = "Checkbox";
//   constructor() {
//     super("This is the innerHtml for Checkbox");
//   }
// }
// const myTextBox = new TextBox();
// console.log(myTextBox.innerHtml);
// myTextBox.click();
// const mySelect = new Select();
// console.log(mySelect.innerHtml);
// mySelect.focus();
// const myCheckbox = new CheckBox();
// console.log(myCheckbox.innerHtml);
// myCheckbox.click();
// Polymorphism
// interface Shape {
//   draw: () => void;
// }
// class Triangle implements Shape {
//   draw() {
//     console.log("Draw a triangle");
//   }
// }
// class Square implements Shape {
//   draw() {
//     console.log("Draw a square");
//   }
// }
// class Circle implements Shape {
//   draw() {
//     console.log("Draw a circle");
//   }
// }
// const circle = new Circle();
// circle.draw();
// const triangle = new Triangle();
// triangle.draw();
// function renderSelect() {
//   console.log("Render Select");
// }
// function renderText() {
//   console.log("Render Text");
// }
// function renderCheckbox() {
//   console.log("Render Checkbox");
// }
// function renderHtmlElement(element: string) {
//   switch (element) {
//     case "select":
//       renderSelect();
//       break;
//     case "text":
//       renderText();
//       break;
//     case "checkbox":
//       renderCheckbox();
//       break;
//   }
// }
// renderHtmlElement("checkbox");
// interface HTMLRenderer {
//   render: () => void;
// }
// class TextBox implements HTMLRenderer {
//   render() {
//     console.log("Render Text");
//   }
// }
// class Select implements HTMLRenderer {
//   render() {
//     console.log("Render Select");
//   }
// }
// class Checkbox implements HTMLRenderer {
//   render() {
//     console.log("Render Checkbox");
//   }
// }
// function renderElement(element: HTMLRenderer): void {
//   element.render();
// }
// const textBoxEl = new TextBox();
// const selectEl = new Select();
// const checkboxEl = new Checkbox();
// renderElement(textBoxEl);
// renderElement(selectEl);
// renderElement(checkboxEl);
// Single responsibility
// class StudentWorst {}
// class EmailService {
//   sendAnEmail(email: string) {}
// }
// class Student {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
// }
// class EnrolmentService {
//   enrolCourse() {}
// }
// class StudentRepository {
//   saveToDB() {}
//   // CRUD operations
//   // create
//   // read
//   // update
//   // delete
// }
// Open-closed
// open for extension, closed for modification
// class Machine {
//   engineType: string;
//   constructor(engineType: string) {
//     this.engineType = engineType;
//   }
//   engine() {
//     console.log("Engine type: " + this.engineType);
//   }
// }
// class Car extends Machine {
//   constructor(engineType: string) {
//     super(engineType);
//   }
//   private model: string;
// }
// const car1 = new Car("Petrol");
// car1.engine();
// class Parent {
//   protected x: string;
//   constructor() {}
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     this.x;
//   }
// }
// const parentTest = new Parent();
// const child = new Child();
// interface UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// interface Geo {
//   lat: string;
//   lng: string;
// }
// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// class MyGeo implements Geo {
//   lat: string;
//   lng: string;
// }
// class MyAddress implements Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }
// interface MyUser extends UserDetails {
//   address: Address;
//   phone: string;
//   website: string;
//   company: MyCompany;
// }
// interface MyCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// class User implements UserDetails {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
// class Company implements MyCompany {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }
// // Dependancy Inversion (Principle) -> Dependency Injection (Pattern)
// class Wallet {
//   balance: number;
//   //   currency: string;
//   constructor(balance: number) {
//     this.balance = balance;
//     // this.currency = currency;
//   }
// }
// class Course {
//   courses: string;
//   constructor(courses: string) {
//     this.courses = courses;
//   }
// }
// class User {
//   username: string;
//   wallet: Wallet;
//   course: Course;
//   constructor(username: string, wallet: Wallet, courses: Course) {
//     this.username = username;
//     this.wallet = wallet;
//     this.course = courses;
//   }
// }
// const ivansWallet = new Wallet(400);
// const ivansCourses = new Course("Programming Basics");
// const ivanUser = new User("vankata92", ivansWallet, ivansCourses);
// console.log(ivanUser.wallet.balance);
// const mariasWallet = new Wallet(3400);
// const mariasCourses = new Course("Programming Advanced");
// const mariasUser = new User("maria", mariasWallet, mariasCourses);
// console.log(mariasUser.wallet.balance);
// THE WORST PRACTICE
// class User {
//   username: string;
//   wallet: Wallet;
//   course: Course;
//   constructor(
//     username: string,
//     balance: number,
//     currency: string,
//     courses: string
//   ) {
//     this.username = username;
//     this.wallet = new Wallet(balance, currency);
//     this.course = new Course(courses);
//   }
// }
// const peshoUser = new User("pesho123", 500, "BGN", "Art,Sports,Math");
// console.log(peshoUser.username);
// console.log(peshoUser.wallet.balance);
// const mariaUser = new User("Maria213", 300, "USD", "Art, Math");
// console.log(mariaUser.username);
// console.log(mariaUser.wallet.balance);
// class Person {
//   static personInitiatedCount = 0;
//   constructor() {
//     Person.personInitiatedCount += 1;
//   }
// }
// const p1 = new Person();
// const p2 = new Person();
// const p3 = new Person();
// console.log(Person.personInitiatedCount);
// class Person {
//     readonly id = "asdksahkjdhsa";
//     private _fullName;
//     constructor(_fullName: string) {
//         this._fullName = _fullName;
//     }
//   
//     get fullName(): string {
//       console.log("getter invoked");
//       // INVOKE FUNTIONALITY ON READ
//       return this._fullName;
//     }
//   
//     set fullName(fName: string) {
//       console.log("setter invoked");
//       // VALIDATINF INPUT
//       this._fullName = fName;
//     }
// }
// const p = new Person('a');
// // p.id = 123;
//   
// p.fullName = "Ivan Kirov";
// console.log(p.fullName);
var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "fullInfo", {
        get: function () {
            console.log('getter');
            return this._carInfo;
        },
        set: function (input) {
            console.log('setter');
            var _a = input.split(' '), brand = _a[0], model = _a[1], hp = _a[2];
            this._carInfo = "The car is: ".concat(brand, " ").concat(model, " - ").concat(hp, " HP.");
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car = new Car();
car.fullInfo = 'Mazda Corolla 351';
console.log(car.fullInfo);
