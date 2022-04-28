#include<bits/stdc++.h>
#include <regex>
#include <cstdlib>
#include <cstring>
#include <iostream>
using namespace std;


/////step 0;
vector<vector<string>> code;
vector<pair<int, vector<string>>> codeTest;
unordered_map<string, vector<pair<int, vector<string>>>> module;
vector<string> keywords = {"int", "(", ")", "{", "}", "=", "+", ";", "#", "include", "bits/stdc++.h", "<<", ">>", "int", "return", "cout", "<", "endl", "cin", ">", ","}; 

struct Tuple{
    string name;
    int start;
    int end;
};

vector<Tuple> module_locations;


int del;
bool m_cmt = false;

string rem_cmt(string str){
    int n = str.length();
    string res = "";
    bool s_cmt = false;
    for(int i=0; i<n; i++){
        if(str[i]=='/' && str[i+1]=='/'){
            s_cmt = true;
            m_cmt = false;
            del++;
            break;
        }
        else if(str[i]=='/'&&str[i+1]=='*'){
            m_cmt=true;
            i++;
            del++;
        }
        else if(str[i]=='*'&&str[i+1]=='/'){
            m_cmt=false;
            i++;
            s_cmt=false;
        }
        else if(s_cmt==false&&m_cmt==false){
            res+=str[i];
        }
    }
    return res;
}

void divideIntoTokens(){
  string currLine;

  ifstream MyReadFile("sample1.txt");
  int multiLineComment = 0;

  int lineNumber = 0;

  while (getline (MyReadFile, currLine)) {
    lineNumber++;
    currLine = rem_cmt(currLine);
    //cout << currLine;
    if(!currLine.size()){
        continue;
    }
    vector<string> line;
    string word = "";
    for(int i=0; i<currLine.size(); i++){
      if (currLine[i] == ' '){
        continue;
      }
      string tmp_string(1, currLine[i]);
      if (find(keywords.begin(), keywords.end(), tmp_string) != keywords.end()){
        if(word.size()){
          //cout << "word: " << word << endl;
          line.push_back(word);
          word = "";
        }
      }
      if (find(keywords.begin(), keywords.end(), word) != keywords.end()){
        //cout << "word: " << word << endl;
        line.push_back(word);
        word = "";
      }
      word += currLine[i];
      if(i==currLine.size()-1){
        //cout << "word: " << word << endl;
        line.push_back(word);
      }
    }
    if(line.size()){
      code.push_back(line);
      codeTest.push_back({lineNumber, line});
    }
    //cout << endl;
  }
  MyReadFile.close();
}

void printMatrix(){
  cout << endl << "************ MATRIX ************" << endl << endl;

  for (int i = 0; i < codeTest.size(); i++){
    cout << i << " : " << codeTest[i].first << " : ";
      for (int j = 0; j < codeTest[i].second.size(); j++){
          cout << codeTest[i].second[j] << ",";
      }   
      cout << endl;
  }
}

void getModules(){
  int open = 0;
  int close = 0;
  Tuple temp;
  temp.name = "";
  temp.start = 0;
  temp.end = 0;

  for(int i=0; i<codeTest.size(); i++){
      for(int j=0; j<codeTest[i].second.size(); j++){
            if(codeTest[i].second[j] == "{"){
                if((codeTest[i].second.size()>=2) && (codeTest[i].second[0] == "int") && (find(keywords.begin(), keywords.end(), codeTest[i].second[1]) == keywords.end())){  // fix for other dataTypes
                    //cout << codeTest[i].second[1] << endl;
                    temp.name = codeTest[i].second[1];
                    temp.start = i;
                }
                open ++;
            }
            if(codeTest[i].second[j] == "}")
                close++;
            if(open && open == close){
                temp.end = i;
                module_locations.push_back(temp);
                open = close = 0;
            }
      }
  }
}

void printModuleLocations(){
  cout << endl << "************ MODULE LOCATION ************" << endl << endl;

  for (int i = 0; i < module_locations.size(); i++){
    cout << module_locations[i].name << " : " << module_locations[i].start << ", " << module_locations[i].end << endl;
  }
  for (int i = 0; i < module_locations.size(); i++){
    vector<pair<int, vector<string>>> temp_module;
    pair<int, vector<string>> currFuncLine;
    for(int j = module_locations[i].start; j<=module_locations[i].end; j++){
        temp_module.push_back(codeTest[j]);
    }
    module[module_locations[i].name] = temp_module;
  }
}

void printModules(){
  cout << endl << "************ MODULES ************" << endl << endl;

  // cout << module.size() << endl;
  for(auto item: module){
      cout << "name: " << item.first << endl;
      for (int i = 0; i < item.second.size(); i++){
        cout << i << " : " << item.second[i].first << " : ";
        for (int j = 0; j < item.second[i].second.size(); j++){
            cout << item.second[i].second[j] << ",";
        }   
        cout << endl;
      }
  }
  cout << endl;
}
/////step 0;



/////step 1;

vector<string> datatypes = {"char","signed char","unsigned char","short","signed short","signed short int","unsigned short", "unsigned short int", "int", "signed int", "unsigned int", "long","signed long","signed long int", "unsigned long", "unsigned long int", "long long","long long int","signed long long","signed long long int","unsigned long long","unsigned long long int","float", "double", "long double"};
vector<string> symbol1 = {"==","[","]",";","=",",","+","-","/","%","&&","||"};
vector<string> symbol2 = {"(",")","{","}"};
vector<string> conditionals = {"if","else","elseif","else if"};
vector<string> loop = {"for","while"};
vector<string> outputs = {"scanf","cout"};
vector<string> inputs = {"printf","cin"};

bool belongsTo(string str, vector<string> container){
    for(int i=0; i<container.size(); i++){
        if(str == container[i]){
            return true;
        }
    }
    return false;
}

bool isString(string str){
    
    regex strng("\"(.*)\"");

    if(regex_match(str,strng)){
        return true;
    }
    return false;
}

//it could be 10, 13.4, 'a', "hello world"
bool isAconst(string str){
    regex dec("[0-9]*.[0-9]+");
    regex numr ("[0-9]+");
    regex chartr("'[a-zA-Z0-9]'");

    if(regex_match(str,dec) || regex_match(str,numr) || regex_match(str,chartr) ){
        return true;
    }
    return false;
}

unordered_map<string, vector<pair<int, vector<string>>>> returnTemplateCode(unordered_map<string, vector<pair<int, vector<string>>>> module){
    unordered_map<string, vector<pair<int, vector<string>>>> templatecode;

    // cout << module["main"].size() << endl;
    // cout << "i came" << endl;

    for(auto item: module){
        //item.first
        vector<pair<int, vector<string>>> temp(item.second.size());
        for (int i = 0; i < item.second.size(); i++){
            temp[i].first = item.second[i].first;
            // temp[i].second is the vector<string> part

            for(int j=0; j<item.second[i].second.size(); j++){
                int w = temp[i].second.size();
                if(belongsTo(item.second[i].second[j],datatypes)){
                    temp[i].second.push_back(item.second[i].second[j]);
                }

                else if(belongsTo(item.second[i].second[j],symbol1)){
                    temp[i].second.push_back(item.second[i].second[j]);
                }
                else if(belongsTo(item.second[i].second[j],symbol2)){
          
                }
               
                else if(isString(item.second[i].second[j])){
                  
                }
                else if(isAconst(item.second[i].second[j])){
                    temp[i].second.push_back(item.second[i].second[j]);
                }

                else if(belongsTo(item.second[i].second[j],conditionals)){
                    temp[i].second.push_back("selection");
                }

                 else if(belongsTo(item.second[i].second[j],loop)){
                    temp[i].second.push_back("iteration");

                }

                else if(belongsTo(item.second[i].second[j],outputs)){
                    temp[i].second.push_back("scan");

                }

                else if(belongsTo(item.second[i].second[j],inputs)){
                    temp[i].second.push_back("print");
                }
        
                else{
                    temp[i].second.push_back(item.second[i].second[j]);
                }
            }
        }
        templatecode[item.first] = temp;
        // cout << temp[0].first << endl;
    }
    return templatecode;
}

void step1(unordered_map<string, vector<pair<int, vector<string>>>> tempTemplateCode){
    cout << endl << "************ TEMPLATE MODULES ************" << endl << endl;

    //initialise module to test
    // unordered_map<string, vector<pair<int, vector<string>>>> module;
    unordered_map<string, vector<pair<int, vector<string>>>> templatecode = tempTemplateCode;

    for(auto item: templatecode){
        cout << "name: " << item.first << endl;
        for (int i = 0; i < item.second.size(); i++){
            cout << i << " : " << item.second[i].first << " : ";
            for (int j = 0; j < item.second[i].second.size(); j++){
                cout << item.second[i].second[j] << ",";
            }   
            cout << endl;
        }
    }

    cout << endl;
}

/////step 1;

/////step 2;

const double threshold = 0.60;

struct metrics{
    string name;
    int nLines = 0;
    int nArgs = 0;
    int nVars = 0;
    int nFunCalls = 0;
    int nConds = 0;
    int nLoops = 0;
    int nReturn = 0;
    int nInputs=0;
    int nOutputs=0;
};

vector<string> funNames;
// vector<string> dataTypes = {"int", "char", "bool", "string", "float"};

unordered_map<string, vector<pair<int, vector<string>>>> module1;
unordered_map<string, vector<pair<int, vector<string>>>> templateCode;

//counts if-elif in a line
int getnCondsLine(vector<string> &line){
    int count = 0;
    for(int i=0; i<line.size(); i++){
        if((line[i] == "if") || (line[i] == "?") || (i!=line.size()-1 && line[i]=="else" && line[i+1] == "if")){
            count++;
        }
    }
    return count;
}

//counts if-elif in a function
int getnConds(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=0; i<fun.size(); i++){
        count += getnCondsLine(fun[i].second);
    }
    return count;
}

//counts loops in a function
int getnLoops(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=0; i<fun.size(); i++){
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "for" || fun[i].second[j] == "while"){
                count++;
            }
        }
    }
    return count;
}

//counts #return stmts in a function
int getnReturns(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=0; i<fun.size(); i++){
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "return"){
                count++;
            }
        }
    }
    return count;
}

int getnFunsLine(vector<string> &line){
    int count = 0;
    for(int i=0; i<line.size(); i++){
        for(int j=0; j<funNames.size(); j++){
            if(line[i] == funNames[j]){
                count++;
            }
        }
    }
    return count;
}

//counts #function calls in a function
int getnFuns(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=1; i<fun.size(); i++){
        count += getnFunsLine(fun[i].second);
    }
    return count;
}

int getnVars(vector<pair<int, vector<string>>> &fun, int ind){
    int count=0;
    for(int i=1; i<fun.size(); i++){
        bool isData = false;
        bool isComma = true;
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "DATA"){
                isData = true;
            }
            else if(fun[i].second[j] == ","){
                isComma = true;
            }
            else if(isData && isComma && (fun[i].second[j] == "X")){
                // if(((j+4)!=(fun[i].second.size()-1)) && (fun[i].second[j]=="CONST")){
                //     count += stoi(module[funNames[ind]][i].second[j]);
                // }
                // else
                count++;
                isComma = false;
            }
        }
    }
    return count;
}

//counts inputs in a function
int getnInputs(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=0; i<fun.size(); i++){
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "scanf" || fun[i].second[j] == "cin"){
                count++;
            }
        }
    }
    return count;
}

//counts outputs in a function
int getnOutputs(vector<pair<int, vector<string>>> &fun){
    int count = 0;
    for(int i=0; i<fun.size(); i++){
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "printf" || fun[i].second[j] == "cout"){
                count++;
            }
        }
    }
    return count;
}

bool calc(int a, int b){
    if(a == b)
        return true;
    if(a == 0 || b == 0)
        return false;

    float hold = abs(a-b)/(max(max(a, b), 1)+0.0);
    if(hold < threshold){
        return true;
    }
    return false;
}

bool checkPairs(metrics m1, metrics m2){
    int count = 0;
    if(calc(m1.nArgs, m2.nArgs))
        count++;
    if(calc(m1.nConds, m2.nConds))
        count++;
    if(calc(m1.nFunCalls, m2.nFunCalls))
        count++;
    if(calc(m1.nLines, m2.nLines))
        count++;
    if(calc(m1.nLoops, m2.nLoops))
        count++;
    if(calc(m1.nReturn, m2.nReturn))
        count++;
    if(calc(m1.nVars, m2.nVars))
        count++;
    if(calc(m1.nInputs, m2.nInputs))
        count++;
    if(calc(m1.nOutputs, m2.nOutputs))
        count++;
    
    if(count >= 5){
        return true;
    }
    return false;
}

void printRow(metrics m){
    int w = 10;
    char sep = ' ';
    cout << setw(10) << setfill(' ') <<  m.name;
    // cout << left << m.name << setw(w) << setfill(sep) << ;
    printf("%10d%10d%10d%10d%10d%10d%10d\n", m.nArgs, m.nVars, m.nConds, m.nLoops, m.nLines, m.nFunCalls, m.nReturn);
}

void printTable(vector<metrics> table){

    cout << "******** TABLE *********" << endl;
    string name="Name", args="Args", vars="Vars", conds="Conds", loops="Loops", lines="Lines", funcalls="Funcalls", ret="Return";
    cout << setw(10) << setfill(' ') << name;
    cout << setw(10) << setfill(' ') << args;
    cout << setw(10) << setfill(' ') << vars;
    cout << setw(10) << setfill(' ') << conds;
    cout << setw(10) << setfill(' ') << loops;
    cout << setw(10) << setfill(' ') << lines;
    cout << setw(10) << setfill(' ') << funcalls;
    cout << setw(10) << setfill(' ') << ret;
   // cout << setw(10) << setfill(' ') << "Inputs";
   // cout << setw(10) << setfill(' ') << "Outputs";
    cout << endl;
    for(int i=0; i<table.size(); i++){
        printRow(table[i]);
    }
}

vector<pair<string, string>> returnCandidatePairs(unordered_map<string, vector<pair<int, vector<string>>>> tempModule, unordered_map<string, vector<pair<int, vector<string>>>> tempTemplateCode){

    module1 = tempModule;
    templateCode = tempTemplateCode;

    vector<metrics> table;

    for(auto i : module1){
        funNames.push_back(i.first);
    }

    int ind = 0;
    for(auto i: module1){
        metrics temp; 
        temp.name = i.first;
        temp.nLines = i.second.size();
        
        int j = 3;
        vector<pair<int, vector<string>>> line = i.second;
        while(i.second[0].second[j] != ")"){
            // cout << i.second[0].second[j] << endl;
            if(belongsTo(i.second[0].second[j], datatypes))
                temp.nArgs++;
            j++;
        }

        temp.nConds = getnConds(i.second);
        temp.nLoops = getnLoops(i.second);
        temp.nReturn = getnReturns(i.second);
        temp.nFunCalls = getnFuns(i.second);
        
        temp.nVars = getnVars(templateCode[funNames[ind]], ind);
        temp.nInputs = getnInputs(i.second);
        temp.nOutputs = getnOutputs(i.second);

        ind++;

        table.push_back(temp);
    }

    printTable(table);

    vector<pair<string, string>> candidatePairs;
    for(int i=0; i<table.size(); i++){
        for(int j=i+1; j<table.size(); j++){
            if(checkPairs(table[i], table[j])){
                candidatePairs.push_back({table[i].name, table[j].name});
            }
        }
    }

    for(int i=0; i<candidatePairs.size(); i++){
        cout << "Pair " << i << ": " << candidatePairs[i].first << " " << candidatePairs[i].second << endl;
    }
    

    return candidatePairs;
}




/////step 2;

/////step 3;

/* Returns length of LCS for X[0..m-1], Y[0..n-1] */
string lcs(string X, string Y, int m, int n)
{
    int L[m + 1][n + 1];
 
    /* Following steps build L[m+1][n+1] in bottom up
      fashion. Note that L[i][j] contains length of LCS of
      X[0..i-1] and Y[0..j-1] */
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }

    // Following code is used to print LCS
    int index = L[m][n];
 
    // Create a character array to store the lcs string
    char lcs[index + 1];
    lcs[index] = '\0'; // Set the terminating character
 
    // Start from the right-most-bottom-most corner and
    // one by one store characters in lcs[]
    int i = m, j = n;
    while (i > 0 && j > 0) {
        // If current character in X[] and Y are same, then
        // current character is part of LCS
        if (X[i - 1] == Y[j - 1]) {
            lcs[index - 1]
                = X[i - 1]; // Put current character in result
            i--;
            j--;
            index--; // reduce values of i, j and index
        }
 
        // If not same, then find the larger of two and
        // go in the direction of larger value
        else if (L[i - 1][j] > L[i][j - 1])
            i--;
        else
            j--;
    }
 
    // Print the lcs
    //cout << "LCS of " << X << " and " << Y << " is " << lcs;
    return lcs;
}


double isClonePair(string a, string b, unordered_map<string, vector<pair<int, vector<string>>>>& module){
    int totalTokens = 0;
    int misMatchTokens = 0;

    vector<pair<int, vector<string>>> temp1 = module[a];
    vector<pair<int, vector<string>>> temp2= module[b];
    string str1;
    string str2;
    int idx_outer = 0;

    for(auto item: temp1){
      
        for (int i = 0; i < item.second.size(); i++){
            str1+=item.second[i];
        }   
    }

     for(auto item: temp2){
      
        for (int i = 0; i < item.second.size(); i++){
            str2+=item.second[i];
        }   
    }

    string str3 = lcs(str1,str2,str1.size(),str2.size());

    double max=str2.size();
    if(str1.size()<str2.size()){
        max=str1.size();
    }
    return str3.size()/max;

}

////step 3



int main () {
  divideIntoTokens();
  getModules();
  printModuleLocations();

  vector<pair<string, string>> candidatePairs;
  unordered_map<string, vector<pair<int, vector<string>>>> templateCode;

  templateCode = returnTemplateCode(module);  

  step1(templateCode);

  candidatePairs = returnCandidatePairs(module, templateCode);

  for(int i=0; i<candidatePairs.size(); i++){
    string fun1 = candidatePairs[i].first;
    string fun2 = candidatePairs[i].second;
    cout << "Matching Percentage " << fun1 << " " << fun2 << " " << 100*isClonePair(fun1, fun2, module) << endl;
  }

  return 0;
}
