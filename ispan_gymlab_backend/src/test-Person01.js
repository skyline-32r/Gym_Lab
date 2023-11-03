// const f1 = require("./func01.js");
// 25 won't be console logged twice even though func02.js requires func01.js because node uses paths to determine whether a module has already been required before, and if it has been, it will directly return the address that was returned before by require("path")
// const f2 = require("./func02.js");
// const Person = require("./Person01.js");

import { f1 } from "./func01.js";
import { f2 } from "./func02.js";
import { Person } from "./Person01.js";

const p1 = new Person("Jayce");

console.log(p1);
p1.toString();