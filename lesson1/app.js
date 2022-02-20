const path = require('path')
// const os =require('os')
// console.log(os.cpus())
// console.log(os.arch())

// const joinedPath=path.join(__dirname, 'test', 'test2', 'fels', 'public', 'text.txt')
// console.log(joinedPath)

// const normalizePath=path.normalize('test///files///pablic//text.txt')
//
// console.log(normalizePath)
//
// const resolvedPath = path.resolve('test///files///pablic//text.txt')
//
// console.log(resolvedPath)

const fs = require('fs')
// fs.writeFileSync(path.join(__dirname, 'files', 'files.txt'),'SOME DATA')

// fs.writeFile(path.join(__dirname, 'files', 'files2.txt'), 'SOME DATA2', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'files', 'files2.txt'), 'utf8', (err,data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data)
// })

// for (let i=0; i < 100; i++) {
//
//     fs.appendFile(path.join(__dirname, 'files', 'files2.txt'), '\nNEW DATA', {flag:'a'}, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }

// fs.truncate(path.join(__dirname, 'files', 'files2.txt'), (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
//
// fs.unlink(path.join(__dirname, 'files', 'files2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'public2', 'files2', 'test2','test23'), {recursive:true}, (err) => {
//     if (err) {
//         console.log(err);
//       }
// })

// fs.rmdir(path.join(__dirname, 'public', 'files', 'test','test2'), (err) => {
//     if (err) {
//         console.log(err);
//       }
// })

// fs.readdir(path.join(__dirname, 'test2'), (err,data)=>{
//     console.log(data)
// })

// fs.rename(path.join(__dirname, 'test2', 'test.txt'), path.join(__dirname, 'test2', 'test2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//       }
// })

// fs.rename(path.join(__dirname, 'test2', 'test2.txt'),
//     path.join(__dirname, 'public', 'files', 'test', 'test2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

