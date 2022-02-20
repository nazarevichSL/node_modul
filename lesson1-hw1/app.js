const path = require('path');
const fs = require('fs');

const onlineUsers = [
    {name: 'Oksana', age: 37, city: 'Kyiv'},
    {name: 'Alina', age: 35, city: 'Dnipro'},
    {name: 'Yana', age: 28, city: 'Odessa'},
];

const inPersonUsers = [
    {name: 'Serge', age: 21, city: 'Lviv'},
    {name: 'Genadii', age: 42, city: 'Kyiv'},
    {name: 'Constantin', age: 25, city: 'Kharkiv'},
]

const pathMain = path.join(__dirname, 'main');

fs.mkdir(path.join(pathMain), {recursive:true}, (err) => {
    if (err) {
        console.log(err);
    }
});

fs.mkdir(path.join(pathMain, 'online', 'User.txt'), {recursive:true}, (err) => {
    if (err) {
        console.log(err);
      }
});

fs.mkdir(path.join(pathMain, 'inPerson'), {recursive:true}, (err) => {
    if (err) {
        console.log(err);
    }
});

const onlineUser = path.join(pathMain, 'online', 'User.txt');
const inpersonPerson = path.join(pathMain, 'inPerson', 'Person.txt');

const users = onlineUsers.map(user => `\nNAME: ${user.name} \nAGE: ${user.age} \nCITY:${user.city}\n`);
fs.writeFile(path.join(onlineUser), `${users}`, (err) => {
        if (err){
            console.log(err);
            throw err;
        }
    });

const persons = inPersonUsers.map(person => `\nNAME: ${person.name} \nAGE: ${person.age} \nCITY:${person.city}\n\n`);
fs.writeFile(path.join(inpersonPerson), `${persons}`, (err) => {
    if (err){
        console.log(err);
        throw err;
    }
});

 const textUsersPersons = (online, inPerson) => {
    fs.appendFile(path.join(onlineUser), `${inPerson}`,
        {flag: 'w'},(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    fs.appendFile(path.join(inpersonPerson), `${online}`,
        {flag: 'w'},(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
};
textUsersPersons(users, persons);



