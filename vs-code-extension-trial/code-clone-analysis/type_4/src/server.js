const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { execFile } = require("child_process");
const compiler = "g++";
const out = "-o";
const infile = __dirname + "/../test-case-analysis-prototype/analysis.cpp";
const outfile = __dirname + "/../test-case-analysis-prototype/analysis";

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

});

app.post('/', (req, res) => {
    // console.log(req.body);

    execFile(compiler, [infile, out, outfile], (err, stdout, stderr) => {
        if (err) {
            console.log("Error\n");
            console.log(err);
        } else {
        let executable = `${outfile}`;
        execFile(executable, [req.body.lang1, req.body.lang2, req.body.prog1, req.body.prog2], (err, stdout, stderr) => {
            console.log(req.body.lang1);
            if (err) {
                console.log("Error\n");
                console.log(err);
            } else {
                res.json(stdout);
                console.log(stdout);

            }
        });
        }
    });
    // res.json("Hello World!!!");
    // console.log('Hello world');
});

// if(process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.join(__dirname, 'src', 'build')));

// 	app.get('*', (req, res) => {
// 		res.sendFile(path.join(__dirname, 'src', 'build', 'index.html'))
// 	});
// }

app.listen(port, () => console.log(`Listening on port ${port}!`));