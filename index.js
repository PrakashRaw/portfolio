 
let fullName = "prakash Rawal"
console.log(fullName);

// sum
let num1 = 5;
let num2 = 3;
// let sum = num1 + num2;
// console.log(+ num1 + ' + ' + num2 + ' = ' + sum);
// console.log(`${num1} + ${num2}= ${num1 + num2}`);
console.log("num1+num2= ", num1 + num2);






// alert & promt message
// let num=prompt("Enter a number:");
// if(num%5===0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num, "is not a multiple of 5");
// }



// array and object
let userDetails = [
    {
        name: "ram",
        age: 20,
        address: {
            permanent: {
                district: "jahapa",
                ward: -10,
                province: 3
            },
            temporary: {
                district: "ktm",
                ward: 3,
                province: 2
            },
        },
        contact: {
            sim1: 9819559021,
            sim2: 9762558960,
        },
    },
    {
        name: "sita",
        age: 19,
        address: {
            permanent: {
                district: "butwal",
                ward: -10,
                province: 3
            },
            temporary: {
                district: "lalitpur",
                ward: 5,
                province: 3
            },
        },
        contact: {
            sim1: 9819559021,
            sim2: 9762558960,
        },


    }


];
console.log(userDetails);


let courseDetails = [
    {
        name: "mongoDb",
        students: [{
            name: "beenita",
            age: 23,
            contact: 9823348979,
        },
        {
            name: "rajita",
            age: 22,
            contact: 9823348978,
        },

        {
            name: "prakash",
            age: 22,
            contact: 9823348978,
        },
        ],
    },
    {
        name: "react",
        students: [{
            name: "shivesh",
            age: 23,
            contact: 9823348979,
        },
        {
            name: "bikesh",
            age: 22,
            contact: 9823348978,
        },
        {
            name: "sandip",
            age: 22,
            contact: 9823348978,
        },

        ],
    }
];
console.log(courseDetails);
courseDetails[0].students[1].age = 23;
console.log(courseDetails);


let topics = [
    {
        title: "html",
        status: "completed",
    },
    {
        title: "css",
        status: "completed",
    },
    {
        title: "array",
        status: "completed",
    },
    {
        title: "object",
        status: "completed",
    },
    {
        title: "function",
        status: "pending",
    },
];
console.log(`${topics[0].title}is ${topics[0].status}`);
console.log(`${topics[2].title} is ${topics[2].status}`);
console.log(topics);



/**
 * Function
 */

function myFunction() {
    console.log("welcome to the hell");
    console.log("we are learning js:)");
}
myFunction();


function sum(x, y) {
    console.log(x + y);
}
sum(1, 2);
sum(5, 9);


// conditional statement
let age = 20;
if (age > 18) {
    console.log(" u can vote");
}
else {
    console.log("U can't vote");
}

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
else {
    color = "white";
}
console.log(color);

/** arithematic operator */
// let number = 15;
// if (number % 2 === 0) {
//     console.log("num", "is even");
// }
// else {
//     console.log("num", "is odd");
// }

// ternary Operator
let personAge = 5;
let result = personAge >= 18 ? "adult" : "not adult";
console.log(result);

let todos = [
    {
        title: "html",
        status: true
    },
    {
        title: "react",
        status: false
    },
    {
        title: "express",
        status: true
    },
]
todos.forEach(check => {
    const title = check.title
    const status = check.status;
    status ? console.log(`${title} is completed`) : console.log(`${title} is pending`);
})

let title = todos[0].status ? "html is completed" : "html is pending";
console.log(title);


if (todos[0].status) {
    console.log("html is completed");
}
else {
    console.log("html is pending");
}

if (todos[1].status) {
    console.log("react is completed");
}
else {
    console.log("react is pending");
}

if (todos[2].status) {
    console.log("express is completed");
}
else {
    console.log("express is pending");
}

let students = [
    {
        name: "sagar sir",
        isVerified: true,
    },
    {
        name: "prakash",
        isVerified: false,
    },
    {
        name: "arjun",
        isVerified: true,
    },

];
console.log(students);

students.forEach(check => {
    const name = check.name
    const isVerified = check.isVerified
    isVerified ? console.log(`${name} is famous`) : console.log(`${name} is not famous`);
});

let studentDatas = [
    {
        name: "sagar sir",
        hasPaid: true,
        hasSholorship: false,
        fullAttendance: true,
    },
    {
        name: "prakash",
        hasPaid: false,
        hasSholorship: false,
        fullAttendance: false,
    },
    {
        name: "arjun",
        hasPaid: false,
        hasSholorship: true,
        fullAttendance: false,

    },

    {
        name: "rajita",
        hasPaid: true,
        hasSholorship: true,
        fullAttendance: true
    },

];
studentDatas.forEach(check => {
    const name = check.name;
    const hasPaid = check.hasPaid;
    const hasSholorship = check.hasSholorship;
    const fullAttendance = check.fullAttendance;
    if ((hasPaid || hasSholorship) && fullAttendance) {
        console.log(`${name} can give exam`);
    }
    else {
        console.log(`${name} can't give exam`);
    }
});

//     hasPaid? console.log(`${name} is allow to enter exam hall`) : hasSholorship? console.log(`${name} is allow to enter the exam hall`):console.log(`${name} is not allow to enter the exam hall`)
// });





let facebookUser =
{
    userName: "prakash",
    password: "pk@123",
    isActivated: false,
};
let inputUsername = "prakash"
let inputPassword = "pk@123"

if (facebookUser.userName == inputUsername && facebookUser.password == inputPassword
    && facebookUser.isActivated) {
    console.log(" can login ");
}
else {
    console.log("can't login ");
};

/**loop */
let users = ["ram", "shyam", "hari"];
for (let i = 0; i < 3; i++) {
    console.log(i);
    console.log(users[i]);
};

let todoss = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: false,
    },
    {
        title: "array",
        status: true,
    },
    {
        title: "object",
        status: false,
    },
    {
        title: "function",
        status: true,
    },
];



for (let index = 0; index <= 4; index++) {
    if (todoss[index].status) {
        console.log(`${todoss[index].title} is completed`);
    }
    else {
        console.log(`${todoss[index].title} is not pending`);
    }
};


todoss.forEach(check => {
    const title = check.title
    const status = check.status
    if (status) {
        console.log(`${title} is completed`);
    }
    else {
        console.log(`${title} is pending`);
    }
});

// code to find multiplication of given input
let number = 6;
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}

let numbers = [1, 2, 3, 4, 5, 6]
let even = [];
let odd = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        even.push(numbers[i]);
}
console.log(`Even number is ${even}`);


numbers.forEach(number => {
    if (numbers % 2 == 0)
        even.push(numbers);
});
console.log(`even number is ${even}`);





/* function */
const double = (input) => {
    return input * 2;
};
console.log(double(100));


/* asynchronous */
/**callback function  */
const doSomething = () => {
    console.log("do something");
};
setTimeout(doSomething, 2000);
console.log('after set timeout');

let numberss = [1, 2, 3, 4, 5, 6];
const printElement = (element) => {
    console.log(element);
}
numberss.forEach(printElement);


numberss.forEach((element) => {
    console.log(element);
});

let tods = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "js",
        status: true,
    },
    {
        title: "react",
        status: false,
    },
];

tods.forEach((element) => {
    if (element.status) {
        console.log(`${element.title} is completed`);
    }
    else {
        console.log(`${element.title} is pending`);
    }
});

let userss = [
    {
        name: "ram",
        cartItems: [
            {
                product: "watch",
                quantity: 1,
                rate: 1000,
            },
            {
                product: "mouse",
                quantity: -2,
                rate: 2000,
            },
        ],
    },
    {
        name: "hari",
        cartItems: [
            {
                product: "keyboard",
                quantity: -1,
                rate: 2000,
            },
        ],
    },
];

userss.forEach((user) => {
    let total = 0;
    user.cartItems.forEach((item) => {
        // if(item.quantity>0){
        //     total = total+ item.rate*item.quantity;

        // }
        total = total + (item.quantity > 0 ? item.quantity * item.rate : 0)
    });
    console.log(`${user.name} has order of rs: ${total}`);
});

let todoos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "js",
        status: false,
    },
    {
        title: "react",
        status: false,
    },
]; 
let completedTodoos = todoos.map(item => item);
todoos.forEach((element) => 
 {
    element.status? element.status="completed":element.status="not completed"
});
console.log(completedTodoos);
