for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) {
    output += 'google';
  }
  if (i % 5 === 0) {
    output += 'facebook';
  }
  console.log(output || i);
}
