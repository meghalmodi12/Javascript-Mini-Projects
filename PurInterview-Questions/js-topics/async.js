let num = 0;

async function increment() {
  num += await 2; // num = 0 (as this part will be executed in sequence without wait) + await 2
  console.log(num);
}

increment();
num += 1; // num = 0 + 1
console.log(num);