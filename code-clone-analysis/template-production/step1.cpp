#include <bits/stdc++.h>
#include <regex>
using namespace std;

vector<string> datatypes = {"char","signed char","unsigned char","short","signed short","signed short int","unsigned short", "unsigned short int", "int", "signed int", "unsigned int", "long","signed long","signed long int", "unsigned long", "unsigned long int", "long long","long long int","signed long long","signed long long int","unsigned long long","unsigned long long int","float", "double", "long double"};
vector<string> symbols = {"(",")","{","}","[","]",";","=","+","-","/","%"};
bool belongsTo(string str, vector<string> container){
    for(int i=0; i<datatypes.size(); i++){
        if(str == datatypes[i]){
            return true;
        }
    }
    return false;
}

//it could be 10, 13.4, 'a', "hello world"
bool isAconst(string str){

}

unordered_map<string, vector<pair<int, vector<string>>>> returnTemplateCode(unordered_map<string, vector<pair<int, vector<string>>>> module){
    unordered_map<string, vector<pair<int, vector<string>>>> templatecode;
    for(auto item: module){
        //item.first
        vector<pair<int, vector<string>>> temp;
        for (int i = 0; i < item.second.size(); i++){
            temp[i].first = item.second[i].first;
            //temp[i].second is the vector<string> part

            for(int j=0; j<item.second[i].second.size(); j++){
                if(belongsTo(item.second[i].second[j],datatypes)){
                    temp[i].second.push_back("DATA");
                }
                else if(belongsTo(item.second[i].second[j],symbols)){
                    temp[i].second.push_back(item.second[i].second[j]);
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
    }
}