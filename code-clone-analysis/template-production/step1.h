#include <bits/stdc++.h>
#include <regex>
using namespace std;

vector<string> datatypes = {"char","signed char","unsigned char","short","signed short","signed short int","unsigned short", "unsigned short int", "int", "signed int", "unsigned int", "long","signed long","signed long int", "unsigned long", "unsigned long int", "long long","long long int","signed long long","signed long long int","unsigned long long","unsigned long long int","float", "double", "long double"};
vector<string> symbols = {"(",")","{","}","[","]",";","=",",","+","-","/","%"};
bool belongsTo(string str, vector<string> container){
    for(int i=0; i<container.size(); i++){
        if(str == container[i]){
            return true;
        }
    }
    return false;
}

//it could be 10, 13.4, 'a', "hello world"
bool isAconst(string str){
    regex dec("[0-9]*.[0-9]+");
    regex numr ("[0-9]+");
    regex chartr("'[a-zA-Z0-9]'");
    regex strng("\"(.*)\"");

    if(regex_match(str,dec) || regex_match(str,numr) || regex_match(str,chartr) || regex_match(str,strng)){
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
                if(belongsTo(item.second[i].second[j],datatypes)){
                    temp[i].second.push_back("DATA");
                }
                else if(belongsTo(item.second[i].second[j],symbols)){
                    temp[i].second.push_back(item.second[i].second[j]);
                    // cout << item.second[i].second[j] << endl;
                }
                else if(isAconst(item.second[i].second[j])){
                    temp[i].second.push_back("CONST");
                }
                else{
                    temp[i].second.push_back("X");
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


    // for(int i=)

    // vector<pair<int, vector<string>>> temp;
    // vector<string> temp_;
    // temp_.push_back("int");
    // temp_.push_back("cp_main");
    // temp_.push_back("(");
    // temp_.push_back(")");
    // temp_.push_back("{");
    // temp.push_back(18,temp_);
    // module["cp_main"] = 



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