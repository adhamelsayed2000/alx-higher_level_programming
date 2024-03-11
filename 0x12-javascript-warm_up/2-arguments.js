#!/usr/bin/node
const argsCount = process.argv.length - 2; // Subtracting 2 to exclude the default arguments (node and script filename)

if (argsCount === 0) {
  console.log('No argument');
} else if (argsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
