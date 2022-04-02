#include<bits/stdc++.h>
// #include "../template-production/step1.h"
#include "../table-production/step2.h"
#include "../process-clone-pairs/step3.h"

using namespace std;

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


int main () {
  divideIntoTokens();
  // printMatrix();
  getModules();
  printModuleLocations();
  // printModules();

  vector<pair<string, string>> candidatePairs;
  unordered_map<string, vector<pair<int, vector<string>>>> templateCode;

  templateCode = returnTemplateCode(module);
  

  // cout << endl << "************ TEMPLATE MODULES ************" << endl << endl;

  // for(auto item: templateCode){
  //       cout << "name: " << item.first << endl;
  //       for (int i = 0; i < item.second.size(); i++){
  //           cout << i << " : " << item.second[i].first << " : ";
  //           for (int j = 0; j < item.second[i].second.size(); j++){
  //               cout << item.second[i].second[j] << ",";
  //           }   
  //           cout << endl;
  //       }
  //   }

  step1(templateCode);

  candidatePairs = returnCandidatePairs(module, templateCode);

  for(int i=0; i<candidatePairs.size(); i++){
    string fun1 = candidatePairs[i].first;
    string fun2 = candidatePairs[i].second;
    cout << "Matching Percentage " << fun1 << " " << fun2 << " " << isClonePair(fun1, fun2, module) << endl;
  }

  return 0;
}
