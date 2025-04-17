const { stdin, stdout, stderr, argv, exit } = require("process");
const fs = require("fs");

// Get the first argument, and output the file content to stdout
const filePath = argv[2];

if (filePath) {
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(stdout);

  fileStream.on("end", () => {
    exit(0);
  });
}

stdin.pipe(stdout);

// in the case we want to manually implement draining
// stdin.on("data", (data) => {
//   stdout.write(data.toString("utf-8").toUpperCase());
// });
