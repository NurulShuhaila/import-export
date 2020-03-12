let Student = require ('./student.js');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Name : ' , (name) => {
    rl.question ('Matric Number : ', (matricNo) =>{
        rl.question ('Major : ', (major) =>{
            console.log('________________');
            console.log('Student Name : ', (name));
            console.log('Student Matric Number : ', (matricNo));
            console.log('Student Major : ', (major));
            rl.close();
        });
    });
});