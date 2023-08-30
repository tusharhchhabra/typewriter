const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => process.stdout.write(sentence[i]), 50 * i);

  if (i === sentence.length - 1) {
    setTimeout(() => process.stdout.write("\n"), 50 * i);
  }
}