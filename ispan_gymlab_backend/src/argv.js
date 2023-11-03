console.log(process.argv);
// const fName = process.argv[2];
// const lName = process.argv[3];
const [fName, lName] = process.argv.slice(2);
const printName = (fName, lName) => {
    console.log(`${fName} ${lName}`);
}

printName(fName, lName);