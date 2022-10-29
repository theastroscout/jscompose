process.env.test = true;
import jscompose from "../jscompose.js";
let result = jscompose("test/files/file.1.js");
console.log(result);