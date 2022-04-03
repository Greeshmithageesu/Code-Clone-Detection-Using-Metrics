## Code-Clone-Detection-Using-Metrics
1. Code Clones: In a software system, similar or identical fragments of code are known as code clones. Instead of implementing a new code from scratch, most of the developers prefer copy–paste programming in which they use existing code fragments.
2. But a single bug in that fragment of code can magnify by affecting all of its code clones.
3. So we made an extension, to identify code clones, for a program in the development phase via the use of a Visual Studio code extension.

## Idea and Motivation
1. Fortunately, many techniques for the detection of code clones have been proposed. 
2. They show that lightweight text-based techniques can find clones with high accuracy and confidence, but detected clones often do not correspond to appropriate syntactic units .
3. Parser based syntactic (AST-based) techniques, find syntactically meaningful clones but tend to be more heavyweight, requiring a full parser and sub-tree comparison method.
4. An Incremental detection technique detects clones in less time in each revision separately. 
5. Moreover, it only detects similar clones of type 1. The complexity of all the methods is high and this can be reduced with the computed metrics values.
6. So we need a lightweight and more accurate method to detect clones, for which we referred to the research paper mentioned just below.
7. Detection of Type-1 and Type-2 Code Clones Using Textual Analysis and Metrics:-
https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5460547&tag=1
8. Based on the above paper we came up with an idea of simple textual analysis and a metric-based.

## User guide and Features
1. Clone this repository to local folder.
2. Open `/vscode-extension-trial` folder in VSCode.
3. Install `Prettier` extension using extension store of VSCode.
3. Open `extension.js` file in the `/vscode-extension-trial` and press F5.
4. An extension development window will be opened.
5. Open the file in which the code clones need to be checked.
6. Now open the command pallet by pressing `Crtl + Shift + P` and type ‘Format Document with Prettier’.
7. Now in the command pallet, search for the command `Detect Clones` and press Enter.
8. The clones present in the file and their matching percentage will be shown in the debug console.

## Team Members
1. B. Greeshmitha(CS19B004)
2. Bobba Ruthvik(CS19B007)
3. Suman P(CS19B039)
4. Sapparapu Rithika(CS19B048)<br />

## Links
1. Github link: https://github.com/RithikaSapparapu/Code-Clone-Detection-Using-Metrics.git
2. Setup and demonstration video link: 

## References
1. Detection of Type-1 and Type-2 Code Clones Using Textual Analysis and Metrics:-
https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5460547&tag=1
