const vscode = require('vscode');
const path = require("path");

const { execFile } = require("child_process");

const compiler = "g++";
const out = "-o";
const directory = __dirname;
const infile = __dirname + "/code-clone-analysis/module-division/step0.cpp";
const outfile = __dirname + "/code-clone-analysis/module-division/step0";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('vs-code-extension-trial.detectClones', function () {
		vscode.window.showInformationMessage('Code Clone Detector is now active!');

		let currFile = vscode.window.activeTextEditor.document.fileName;

		execFile(compiler, [infile, out, outfile], (err, stdout, stderr) => {
			if (err) {
			console.log(err);
			} else {
			let executable = `${outfile}`;
			execFile(executable, [currFile, directory], (err, stdout, stderr) => {
				if (err) {
				console.log(err);
				} else {
				console.log(stdout);
				}
			});
			}
		});

		vscode.env.openExternal(vscode.Uri.parse('http://localhost:3000/'));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
