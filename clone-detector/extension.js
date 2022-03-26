// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");

const { execFile } = require("child_process");

const compiler = "g++";
const out = "-o";
const infile = __dirname + "/sample.cpp";
const outfile = __dirname + "/sample.exe";
const command = "hello world";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "clone-detector" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "clone-detector.cloneDetector",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      //vscode.window.showInformationMessage('Hello World from clone-detector!');

      // console.log(process.cwd());

      // const editor = vscode.window.activeTextEditor;

      // if(editor) {
      // 	let document = editor.document;

      // 	const documentText = document.getText();

      // 	console.log(documentText);

      // 	console.log("HELLO!");
      // }
      // else{
      // 	console.log("No editor is open");
      // }

      let currFile = vscode.window.activeTextEditor.document.fileName;
	  
      execFile(compiler, [infile, out, outfile], (err, stdout, stderr) => {
        if (err) {
          console.log(err);
        } else {
          let executable = `${outfile}`;
          execFile(executable, [currFile], (err, stdout, stderr) => {
            if (err) {
              console.log(err);
            } else {
              console.log(stdout);
            }
          });
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
