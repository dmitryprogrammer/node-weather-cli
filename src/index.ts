import { program } from "commander";

program.option("--first").option("-s, --separator <char>");

program.parse();

console.log(program.args);

console.log(process.argv);
