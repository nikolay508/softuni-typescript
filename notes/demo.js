// ./node_modules/.bin/tsc demo.ts && node demo.js
// 1. Intro to TypeScript
// Arrays 
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr3 = ["a", "b", "c"];
var arr4 = [true, false, true];
// Tuple Object.entries
var tuple = ["age", 23];
// tuple = [123, 'age']
// Enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
})(DaysOfWeek || (DaysOfWeek = {}));
function tellMeIfIsMonday(day) {
    return DaysOfWeek.Monday === day;
}
// Any
var x = 5;
x = [1, 2, 3];
x = true;
x = { name: "Peshi" };
// Unknown
var y = 5;
y = [3, 4, 5];
y = false;
// Void
function printMe(msg) {
    //console.log(msg);
}
// printMe("Zdraveite kolegi!");
// Return Type
function getFullName(fN, lN) {
    if (lN) {
        return "".concat(fN, " ").concat(lN);
    }
    return fN;
}
var fName = getFullName("Ivan", "Peshov");
// Return Types 2
var sum = function (a, b) {
    if (b === void 0) { b = 5000; }
    return a + b;
};
// console.log(sum(123));
// DEMO
var intCollect = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach(function (int) {
    //console.log(int);
});
var person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling", "coding"],
};
var error;
error = '404';
var statusMsg;
statusMsg = 'success';
var users = [{
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
    }];
function printUser(user) {
    //console.log(user.name, user.age);
}
printUser(users[0]);
var createUser = function (name, age) {
    var user1 = { name: name, age: age };
    return user1;
};
var newUser = createUser('Pesho', 123456);
var point1 = { x: 10, y: 20, z: 30, a: 40, b: 50, c: 60 };
var point2 = {};
Object.keys(point1).forEach(function (key) {
    point2[key] = point1[key] * 2;
});
var dog = { name: 'Rex', age: 5 };
var dog2 = { age: 5 }; // name is not required now
var tree = {
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
};
var lion = {
    rawr: function () { console.log('rawr'); },
    name: 'Simba',
};
var cat = {
    meow: function () { console.log('meow'); },
    name: 'Whiskers',
};
var person1 = { name: 'John', age: 30, pincode: 123456 };
var person2 = { name: 'John', age: 30, gender: 'male' };
var townsObj = {};
function towns(arr) {
    arr.forEach(function (each) {
        var _a = each.split(' <-> '), name = _a[0], population = _a[1];
        if (townsObj.hasOwnProperty(name)) {
            townsObj[name] += Number(population);
        }
        else {
            townsObj[name] = Number(population);
        }
    });
    console.log(townsObj);
}
towns(['Sofia <-> 123456', 'Plovdiv <-> 123456', 'Varna <-> 123456', 'Sofia <-> 123456']);
