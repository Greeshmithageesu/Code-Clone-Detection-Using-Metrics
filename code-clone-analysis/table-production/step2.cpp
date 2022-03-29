#include <bits/stdc++.h>
using namespace std;

const double threshold = 0.8;

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

unordered_map<string, vector<pair<int, vector<string>>>> module;
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
    for(int i=0; i<fun.size(); i++){
        count += getnFunsLine(fun[i].second);
    }
    return count;
}

int getnVars(vector<pair<int, vector<string>>> &fun, int ind){
    int count=0;
    for(int i=1; i<fun.size(); i++){
        bool isData = false;
        for(int j=0; j<fun[i].second.size(); j++){
            if(fun[i].second[j] == "DATA"){
                isData = true;
            }
            if(isData && (fun[i].second[j] == "X")){
                // if(((j+4)!=(fun[i].second.size()-1)) && (fun[i].second[j]=="CONST")){
                //     count += stoi(module[funNames[ind]][i].second[j]);
                // }
                // else
                count++;
            }
        }
    }
    return count;
}

double calc(int a, int b){
    return (abs(a-b))/(max(a, b)+0.0);
}

bool checkPairs(metrics m1, metrics m2){
    int count = 0;
    if(calc(m1.nArgs, m2.nArgs) >= threshold)
        count++;
    if(calc(m1.nConds, m2.nConds) >= threshold)
        count++;
    if(calc(m1.nFunCalls, m2.nFunCalls) >= threshold)
        count++;
    if(calc(m1.nLines, m2.nLines) >= threshold)
        count++;
    if(calc(m1.nLoops, m2.nLoops) >= threshold)
        count++;
    if(calc(m1.nReturn, m2.nReturn) >= threshold)
        count++;
    if(calc(m1.nVars, m2.nVars) >= threshold)
        count++;
    return count;
}

void printTable(metrics m){
    printf("%10s%10s%10s%10s%10s%10s%10s%10s\n", m.name, m.nArgs, m.nVars, m.nConds, m.nLoops, m.nLines, m.nReturn);
}

int main(){

    vector<metrics> table;

    for(auto i : module){
        funNames.push_back(i.first);
    }

    int ind = 0;
    for(auto i: module){
        metrics temp;
        temp.name = i.first;
        temp.nLines = i.second.size();
        
        int j = 3;
        vector<pair<int, vector<string>>> line = i.second;
        while(i.second[0].second[j] != ")"){
            temp.nArgs++;
        }

        temp.nConds = getnConds(i.second);
        temp.nLoops = getnLoops(i.second);
        temp.nReturn = getnReturns(i.second);
        temp.nFunCalls = getnFuns(i.second);

        temp.nVars = getnVars(templateCode[funNames[ind]], ind);

        ind++;

        table.push_back(temp);
    }


    vector<pair<int, int>> candidatePairs;
    for(int i=0; i<table.size(); i++){
        for(int j=i+1; j<table.size(); j++){
            if(checkPairs(table[i], table[j])){
                candidatePairs.push_back({i, j});
            }
        }
    }

    cout << "******** TABLE *********" << endl;
    printf("Name\t\t#Args\t\t#Vars\t\t#Conds\t\t#Loops\t\t#Lines\t\t#Return\n");
    for(int i=0; i<table.size(); i++){
        printTable(table[i]);
    }


    cout << "******** CANDIDATE PAIRS *********" << endl;
    for(int i=0; i<candidatePairs.size(); i++){
        cout << table[candidatePairs[i].first].name << " : " << table[candidatePairs[i].second].name << endl;
    }
}