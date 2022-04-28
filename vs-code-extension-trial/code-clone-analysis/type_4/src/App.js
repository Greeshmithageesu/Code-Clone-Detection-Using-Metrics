import "./App.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Codes from "./Codes";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import axios from "axios";

function App() {
  const [lang1, setLang1] = useState("");
  const [lang2, setLang2] = useState("");
  const [prog1, setProg1] = useState("");
  const [prog2, setProg2] = useState("");
  const [program1, setProgram1] = useState("");
  const [program2, setProgram2] = useState("");

  const [output, setOutput] = useState("");

  const request = {
    lang1, lang2, prog1, prog2
  };

  const findMatch = async () => {
    setOutput("LOADING...");
    await axios.post("http://localhost:3001/", request).then((res) => {
      console.log(res.data);
      setOutput(res.data);
    })

  //   await fetch("http://localhost:3001/", request)
  //     .then(async (res) => {
  //       console.log(res.json());
  //       await fetch("http://localhost:3001/").then(
  //         res.json.then((data) => {
  //           console.log(data);
  //           setOutput(data);
  //         })
  //       );
  //     })
  //     .catch((err) => console.log(err));
  };

  //takes care of the names of the programs
  const handleProgram = (programName, progNum) => {
    let codes = new Codes();
    switch (programName) {
      case "cppMergeSort":
        progNum === 1
          ? setProgram1(codes.cppMergeSort)
          : setProgram2(codes.cppMergeSort);
        break;
      case "cppQuickSort":
        progNum === 1
          ? setProgram1(codes.cppQuickSort)
          : setProgram2(codes.cppQuickSort);
        break;
      case "cppSelectionSort":
        progNum === 1
          ? setProgram1(codes.cppSelectionSort)
          : setProgram2(codes.cppSelectionSort);
        break;
      case "cppBubbleSort":
        progNum === 1
          ? setProgram1(codes.cppBubbleSort)
          : setProgram2(codes.cppBubbleSort);
        break;
      case "cppInsertionSort":
        progNum === 1
          ? setProgram1(codes.cppInsertionSort)
          : setProgram2(codes.cppInsertionSort);
        break;
      case "cppReverseArray":
        progNum === 1
          ? setProgram1(codes.cppReverseArray)
          : setProgram2(codes.cppReverseArray);
        break;
      case "cppCyclicArray":
        progNum === 1
          ? setProgram1(codes.cppCyclicArray)
          : setProgram2(codes.cppCyclicArray);
        break;
        case "cMergeSort":
          progNum === 1
            ? setProgram1(codes.cMergeSort)
            : setProgram2(codes.cMergeSort);
          break;
        case "cQuickSort":
          progNum === 1
            ? setProgram1(codes.cQuickSort)
            : setProgram2(codes.cQuickSort);
          break;
        case "cSelectionSort":
          progNum === 1
            ? setProgram1(codes.cSelectionSort)
            : setProgram2(codes.cSelectionSort);
          break;
        case "cBubbleSort":
          progNum === 1
            ? setProgram1(codes.cBubbleSort)
            : setProgram2(codes.cBubbleSort);
          break;
        case "cInsertionSort":
          progNum === 1
            ? setProgram1(codes.cInsertionSort)
            : setProgram2(codes.cInsertionSort);
          break;
        case "cReverseArray":
          progNum === 1
            ? setProgram1(codes.cReverseArray)
            : setProgram2(codes.cReverseArray);
          break;
        case "cCyclicArray":
          progNum === 1
            ? setProgram1(codes.cCyclicArray)
            : setProgram2(codes.cCyclicArray);
          break;
          case "pyMergeSort":
            progNum === 1
              ? setProgram1(codes.pyMergeSort)
              : setProgram2(codes.pyMergeSort);
            break;
          case "pyQuickSort":
            progNum === 1
              ? setProgram1(codes.pyQuickSort)
              : setProgram2(codes.pyQuickSort);
            break;
          case "pySelectionSort":
            progNum === 1
              ? setProgram1(codes.pySelectionSort)
              : setProgram2(codes.pySelectionSort);
            break;
          case "pyBubbleSort":
            progNum === 1
              ? setProgram1(codes.pyBubbleSort)
              : setProgram2(codes.pyBubbleSort);
            break;
          case "pyInsertionSort":
            progNum === 1
              ? setProgram1(codes.pyInsertionSort)
              : setProgram2(codes.pyInsertionSort);
            break;
          case "pyReverseArray":
            progNum === 1
              ? setProgram1(codes.pyReverseArray)
              : setProgram2(codes.pyReverseArray);
            break;
          case "pyCyclicArray":
            progNum === 1
              ? setProgram1(codes.pyCyclicArray)
              : setProgram2(codes.pyCyclicArray);
            break;
      default:
        progNum === 1 ? setProgram1("") : setProgram2("");
        break;
    }
  };

  const handleLang1 = (e) => {
    setLang1(e.target.value);
  };

  const handleLang2 = (e) => {
    setLang2(e.target.value);
  };

  const handleProg1 = (e) => {
    if (lang1 === "") {
      alert("Please select a language for program 1");
      return;
    }
    setProg1(e.target.value);
    let programName = lang1 + e.target.value;
    handleProgram(programName, 1);
  };

  const handleProg2 = (e) => {
    if (lang2 === "") {
      alert("Please select a language for program 2");
      return;
    }

    setProg2(e.target.value);
    let programName = lang2 + e.target.value;
    handleProgram(programName, 2);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={12} style={{ height: "10vh" }}>
            <Card className="headerCard">
              <Card.Body>
                <div className="bg-blue-800">
                  <h1>Prototype for Type 4 Clone Detection using TestCases</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={2} style={{ height: "100vh" }}>
            <Card className="leftCard">
              <Card.Body>
                <Stack gap={5}>
                  <Form.Select
                    aria-label="Default select example"
                    className="item"
                    onChange={handleLang1}
                  >
                    <option>Language 1</option>
                    <option value="c"> C</option>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="item"
                    onChange={handleLang2}
                  >
                    <option>Language 2</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="item"
                    onChange={handleProg1}
                  >
                    <option>Program 1</option>
                    <option value="MergeSort">Merge Sort</option>
                    <option value="SelectionSort">Selection Sort</option>
                    <option value="QuickSort">Quick Sort</option>
                    <option value="InsertionSort">Insertion Sort</option>
                    <option value="BubbleSort">Bubble Sort</option>
                    <option value="ReverseArray">Reverse Array</option>
                    <option value="CyclicArray">Cyclic Array</option>
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="item"
                    onChange={handleProg2}
                  >
                    <option>Program 2</option>
                    <option value="MergeSort">Merge Sort</option>
                    <option value="SelectionSort">Selection Sort</option>
                    <option value="QuickSort">Quick Sort</option>
                    <option value="InsertionSort">Insertion Sort</option>
                    <option value="BubbleSort">Bubble Sort</option>
                    <option value="ReverseArray">Reverse Array</option>
                    <option value="CyclicArray">Cyclic Array</option>
                  </Form.Select>
                  <Button variant="dark" className="button" onClick={findMatch}>
                    Match
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col md={10}>
            <Row md={9}>
              <Col md={6}>
                <Card className="rightCard">
                  {/* <Card.Body> */}
                  <AceEditor
                    placeholder="# Program 1"
                    fontSize={16}
                    showPrintMargin={false}
                    value={program1}
                    style={{ width: "100%", zIndex: `0`, height: `440px` }}
                    name="mipsIDE"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{ tabSize: 4, wrap: false, readOnly: true }}
                    enableBasicAutocompletion
                    autoScrollEditorIntoView
                    mode="javascript"
                    theme="dracula"
                  />
                  {/* </Card.Body> */}
                </Card>
              </Col>
              <Col md={6}>
                <Card className="rightCard">
                  {/* <Card.Body> */}
                  <AceEditor
                    theme="dracula"
                    placeholder="# Program 2"
                    fontSize={16}
                    showPrintMargin={false}
                    value={program2}
                    style={{ width: "100%", zIndex: `0`, height: `440px` }}
                    name="mipsIDE"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{ tabSize: 4, wrap: false, readOnly: true }}
                    enableBasicAutocompletion
                    autoScrollEditorIntoView
                    mode="javascript"
                  />
                  {/* </Card.Body> */}
                </Card>
              </Col>
            </Row>
            <Row md={3}>
              <Col md={12}>
                <Card className="bottomCard">
                  {/* <Card.Body> */}
                    <AceEditor
                    theme="dracula"
                    placeholder=""
                    fontSize={16}
                    showPrintMargin={false}
                    showGutter={false}
                    value={output}
                    focus={false}
                    style={{ width: "100%", zIndex: `0`, height: `200px` }}
                    name="mipsIDE"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{ tabSize: 4, wrap: false, readOnly: true }}
                    enableBasicAutocompletion
                    autoScrollEditorIntoView
                    mode="javascript"
                  />
                  {/* </Card.Body> */}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
