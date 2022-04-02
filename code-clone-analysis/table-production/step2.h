#include <bits/stdc++.h>
#include "../template-production/step1.h"
using namespace std;

const double threshold = 0.15;

struct metrics{
    string name;
    int nLines = 0;
    int nArgs = 0;
    int nVars = 0;
    int nFunCalls = 0;
    int nConds = 0;
    int nLoops = 0;
    int nReturn = 0;
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

        ind++;

        table.push_back(temp);

        // cout << temp.name << " " << temp.nArgs << endl;
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