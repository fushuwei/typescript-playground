// 1、类型声明
let foo: string;
const bar: string = "hello world";

foo = "hello world";

console.log(foo);
console.log(bar);

// 2、类型推断
let x: string = "hello world";
let y = "hello world";

function test(type: string) {
  if (type === "foo") {
    return "1";
  } else if (type === "bar") {
    return "2";
  }
  return 3;
}

// 3、比较运算符 (!==、===、!=、==) https://chatgpt.com/c/68a34817-920c-832b-9fe7-e6648633da03
// @ts-ignore
// tslint:disable-next-line:triple-equals
console.log(1 == "1");
// @ts-ignore
// tslint:disable-next-line:triple-equals
console.log(1 != "1");
// @ts-ignore
// tslint:disable-next-line:triple-equals
console.log(1 === "1");
// @ts-ignore
// tslint:disable-next-line:triple-equals
console.log(1 !== "1");
// @ts-ignore
// tslint:disable-next-line:triple-equals
console.log(1 !== 2);

