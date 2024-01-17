const { generateMeta } = require("./controller/openaiController");

const readline = require("readline");

const consoleInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consoleInput.question("Enter a URL to check > ", generateMeta);