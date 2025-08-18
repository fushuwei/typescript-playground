// any 类型

console.log("\n# 基本含义");

let a: any;
a = 1;
a = "1";
a = true;
console.log(a);

let b: any = "hello";
b = 1;
b = {key: "这里是value值"};
console.log(b);

console.log("\n# 类型推断");

function add(a1: any, b1: any) {
  console.log(a1 + b1);
}

add("1_", [1, 2, 3]);

console.log([1, 2, 3].toString());
console.log("1_ + [1, 2, 3] = " + "1_" + [1, 2, 3]);

let c;
console.log(c);

const d = 100;
console.log(d);

console.log("\n# 污染问题");

let e: any = "hello";
let f: number = 100;
console.log(f.toFixed(2));
f = e;
console.log(f * 123);

console.log();
