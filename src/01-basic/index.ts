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
