#include <bits/stdc++.h>
using namespace std;

// unordered_map<string, vector<pair<int, vector<string>>>> module;

double isClonePair(string a, string b, unordered_map<string, vector<pair<int, vector<string>>>>& module){
    int totalTokens = 0;
    int misMatchTokens = 0;
    float allowedProbability = 0.85;

    int i = module[a].size();
    int j = module[b].size();
    int idx_outer = 0;
    if(i!=j){
        if(i>j){
            for(int n = j; n<i; n++){
                misMatchTokens +=(module[a][n].second.size());
                totalTokens +=(module[a][n].second.size());
                idx_outer = j;
            }
        }
        else if(i<j){
            for(int n = i; n<j; n++){
                misMatchTokens +=(module[b][n].second.size());
                totalTokens +=(module[b][n].second.size());
                idx_outer = i;
            }
        }
    }
    for(int n=0; n<idx_outer; n++){
        int idx_inner = 0;
        int x = module[a][n].second.size();
        int y = module[b][n].second.size();
        if(x != y){
            if (x>y) { 
                misMatchTokens += (x-y);
                totalTokens += (x-y);
                idx_inner = y;
            } else if (y>x) {
                misMatchTokens += (y-x);
                totalTokens += (y-x);
                idx_inner = x;
            }
        }
        for(int m=0; m<idx_inner; m++){
            if(module[a][n].second[m] != module[b][n].second[m]){
                misMatchTokens++;
            }
            totalTokens++;
        }
    }

    cout << misMatchTokens << " " << totalTokens << endl;

    float probabilityClone = 1-(misMatchTokens/(totalTokens+0.0));
    
    return probabilityClone;

    // if(probabilityClone >= allowedProbability)
    //     return true;
    // else
    //     return false;
}
