// wc -l : Prints the number of lines in a file.
// wc -w : prints the number of words in a file.
// wc -c : Displays the count of bytes in a file.
// wc -m : prints the count of characters from a file.
// wc -L : prints only the length of the longest line in a file.

let { spawn } = require('child_process');

// ChildProcess instance, which implements the EventEmitter API.

let wc = spawn('wc' ); // , ['-m','waterloo.txt']
let ls = spawn('ls', ['-la']); // ls -la | wc

ls.stdout.pipe(process.stdout);

// node process.js < waterloo.txt
// node process.js THEN type in text and hit CTRL-D twice.

process.stdin.pipe(wc.stdin)

// ls.stdout.pipe(wc.stdin)

wc.stdout.on('data', (data) => {
  console.log(`${data}`);
});

wc.stderr.on('data', (data) => {
  console.log(`ERROR ${data}`);
});

wc.on('exit', function (code, signal) {
  // This signal variable is null when the child process exits normally.
  console.log(`exit ${code} and signal ${signal}`);
});
