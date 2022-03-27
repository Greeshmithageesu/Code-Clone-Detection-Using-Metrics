#include <bits/stdc++.h>
#include <regex>
using namespace std;

int main(){
    //string a = "helloorldbfdkbnfdslkgndflkn";
    string a;
    cin >> a;

    regex temp("(hello)(w)(.*)");
    regex dec("'[a-zA-Z0-9]'");
    regex strng("\"(.*)\"");

    if(regex_match(a, strng)){
        cout << "yes";
    }
    else{
        cout << "no";
    }
}