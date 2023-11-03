import bcrypt from "bcryptjs";

// let pass = "mfee40team1";
let pass = "team1";
let hash = await bcrypt.hash(pass, 10);

console.log(hash);
