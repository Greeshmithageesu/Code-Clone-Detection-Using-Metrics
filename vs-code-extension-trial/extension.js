const vscode = require('vscode');
const path = require("path");

const { execFile } = require("child_process");

const compiler = "g++";
const out = "-o";
const infile = "C:/Users/ruthv/vs-code-extension-trial/code-clone-analysis/module-division/step0.cpp";
const outfile = "C:/Users/ruthv/vs-code-extension-trial/code-clone-analysis/module-division/step0";
const command = "hello world";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "vs-code-extension-trial" is now active!');

	let disposable = vscode.commands.registerCommand('vs-code-extension-trial.helloWorld', function () {
		// vscode.window.showInformationMessage('Hello World from vs-code-extension-trial!');
		let currFile = vscode.window.activeTextEditor.document.fileName;
	  
		console.log(currFile);

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

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
