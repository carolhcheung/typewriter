const sentence = "hello there from lighthouse labs";

let delay = 0;
let result = sentence + "\n"

for (let char of result) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
process.stdout.write('\n');

