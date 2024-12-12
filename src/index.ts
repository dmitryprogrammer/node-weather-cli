import * as path from "path";

console.log(path.basename(__filename));

function A(a: any): any {
  return a;
}

console.log(A(123));
