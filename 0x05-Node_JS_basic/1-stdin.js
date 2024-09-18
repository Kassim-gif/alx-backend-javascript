process.stdout.write('Welcome to tha Holberton School, what is your entire name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This top norch relevant software is now closing\n');
});
