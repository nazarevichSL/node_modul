const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive:true}, (err) => {
    if (err) {
        console.log(err);
      }
});

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive:true}, (err) => {
    if (err) {
        console.log(err);
    }
});

const onlineUsers = [
    {name: 'Oksana', age: 37, city: 'Kyiv'},
    {name: 'Alina', age: 35, city: 'Dnipro'},
    {name: 'Yana', age: 28, city: 'Odessa'},
];

let inPersonUsers = [
    {name: 'Serge', age: 21, city: 'Lviv'},
    {name: 'Genadii', age: 42, city: 'Kyiv'},
    {name: 'Constantin', age: 25, city: 'Kharkiv'},
]

const users = onlineUsers.map(user => `\nNAME: ${user.name} AGE: ${user.age} CITY:${user.city}`);
fs.writeFile(path.join(__dirname, 'main', 'online', 'User.txt'), `${users}`, (err) => {
        if (err){
            console.log(err);
            throw err;
        }
    });

const persons = inPersonUsers.map(person => `\nNAME: ${person.name} AGE: ${person.age} CITY:${person.city}`);
fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'Person.txt'), `${persons}`, (err) => {
    if (err){
        console.log(err);
        throw err;
    }
});

 const textUsersPersons = (online, inPerson) => {
    fs.appendFile(path.join(__dirname, 'main', 'online', 'User.txt'), `${inPerson}`,
        {flag: 'w'},(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'Person.txt'), `${online}`,
        {flag: 'w'},(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
};
textUsersPersons(users, persons);



