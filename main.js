console.log("Hello World!")

let dogName = "Ada Grace"
let ownerName = "Kristen"

console.log(`${dogName} is owned by ${ownerName}`);

dogName = "Raleigh";
ownerName= "Margaret";

console.log(`${dogName} is owned by ${ownerName}`)

dogName = "Francis";
ownerName= "Jane";

console.log(`${dogName} is owned by ${ownerName}`)

function dogOwners (dogName, ownerName) {
    console.log(`${dogName} is owned by ${ownerName}`);
}

dogOwners("Ada Grace", "Kristen");
dogOwners("Raleigh", "Margaret");
dogOwners("Francis", "Jane");

function randomNumbers (num) {
    const newNumber = Math.random() * num;
    console.log(newNumber);
}





