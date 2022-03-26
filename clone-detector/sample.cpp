#include <bits/stdc++.h>
using namespace std;

vector<vector<string>> code;
vector<pair<int, vector<string>>> codeTest;
map<pair<int, int>, int> cloneDB;
map<pair<int, int>, int> visited;
vector<string> keywords = {"int", "main", "(", ")", "{", "}", "=", "+", ";", "#", "include", "bits/stdc++.h", "<<", ">>", "int", "return", "cout", "<", "endl", "cin", ">"};

struct Tuple
{
    int start;
    int end;
};

int del;
bool m_cmt = false;

string rem_cmt(string str)
{
    int n = str.length();
    string res = "";
    bool s_cmt = false;
    for (int i = 0; i < n; i++)
    {
        if (str[i] == '/' && str[i + 1] == '/')
        {
            s_cmt = true;
            m_cmt = false;
            del++;
            break;
        }
        else if (str[i] == '/' && str[i + 1] == '*')
        {
            m_cmt = true;
            i++;
            del++;
        }
        else if (str[i] == '*' && str[i + 1] == '/')
        {
            m_cmt = false;
            i++;
            s_cmt = false;
        }
        else if (s_cmt == false && m_cmt == false)
        {
            res += str[i];
        }
    }
    return res;
}

int main(int argc, char **argv)
{
    // ofstream MyWriteFile("output.txt");
    // MyWriteFile << "Files can be tricky, but it is fun enough!";
    // MyWriteFile.close();

    string currLine;

    string inputFile;
    inputFile = argv[1];
    cout << inputFile << endl;

    ifstream MyReadFile(inputFile);
    int multiLineComment = 0;

    int lineNumber = 0;

    while (getline(MyReadFile, currLine))
    {
        lineNumber++;
        currLine = rem_cmt(currLine);
        // cout << currLine;
        if (!currLine.size())
        {
            continue;
        }
        vector<string> line;
        string word = "";
        for (int i = 0; i < currLine.size(); i++)
        {
            if (currLine[i] == ' ')
            {
                continue;
            }
            string tmp_string(1, currLine[i]);
            if (find(keywords.begin(), keywords.end(), tmp_string) != keywords.end())
            {
                if (word.size())
                {
                    cout << "word: " << word << endl;
                    line.push_back(word);
                    word = "";
                }
            }
            if (find(keywords.begin(), keywords.end(), word) != keywords.end())
            {
                cout << "word: " << word << endl;
                line.push_back(word);
                word = "";
            }
            word += currLine[i];
            if (i == currLine.size() - 1)
            {
                cout << "word: " << word << endl;
                line.push_back(word);
            }
        }
        if (line.size())
        {
            code.push_back(line);
            codeTest.push_back({lineNumber, line});
        }
        // cout << endl;
    }
    MyReadFile.close();

    cout << endl
         << "************ MATRIX ************" << endl
         << endl;

    for (int i = 0; i < codeTest.size(); i++)
    {
        cout << codeTest[i].first << " : ";
        for (int j = 0; j < codeTest[i].second.size(); j++)
        {
            cout << codeTest[i].second[j] << ",";
        }
        cout << endl;
    }

    vector<Tuple> cloneData;
    int flag = 0;
    for (int i = 0; i < codeTest.size(); i++)
    {
        flag = 0;
        Tuple t;
        t.start = codeTest[i].first;
        t.end = codeTest[i].first;
        for (int j = i + 1; j < codeTest.size(); j++)
        {
            if (codeTest[i].second == codeTest[j].second)
            {
                int x = i;
                int y = j;
                while (x < codeTest.size() && y < codeTest.size() && codeTest[x].second == codeTest[y].second)
                {
                    flag = 1;
                    x++;
                    y++;
                }
                if (flag)
                {
                    t.end = codeTest[--x].first;
                    if (!visited[{t.start, t.end}])
                    {
                        bool check = false;
                        for(auto item : visited){
                            if(item.first.first <= t.start && item.first.second >= t.end){
                                check = true;
                                break;
                            }
                        }
                        cloneDB[{t.start, t.end}]++;
                        visited[{codeTest[j].first, codeTest[--y].first}] = 1;
                    }
                    cloneData.push_back({t.start, t.end});
                }
            }
        }
    }

    cout << endl
         << "************ CLONE DATA ************" << endl
         << endl;

    for (int i = 0; i < cloneData.size(); i++)
    {
        cout << cloneData[i].start << " : " << cloneData[i].end << endl;
    }

    cout << endl
         << "************ CLONE MAP1 ************" << endl
         << endl;
    pair<pair<int, int>, int> prev = {{0, 0}, 0};
    for (auto item : cloneDB)
    {
        if (!(item.first.first >= prev.first.first && item.first.second <= prev.first.second && (item.first.second == prev.second)))
        {
            cout << item.first.first << " " << item.first.second << " :: " << item.second << endl;
            prev = {{item.first.first, item.first.second}, item.second};
        }
    }

    cout << endl
         << "************ CLONE MAP2 ************" << endl
         << endl;
    prev = {{0, 0}, 0};
    for (auto item : cloneDB)
    {
        cout << "prev: " << prev.first.first << " " << prev.first.second << " :: " << prev.second << endl;
        if (!(item.first.first >= prev.first.first && item.first.second <= prev.first.second) && (item.first.second != prev.second))
        {
            cout << item.first.first << " " << item.first.second << " :: " << item.second << endl;
        }
        prev = {{item.first.first, item.first.second}, item.second};
    }

    // cout << endl << "************ VISITED CLONES ************" << endl << endl;

    // for(auto item : visited){
    //   cout << item.first.first << " " << item.first.second << "::" << item.second << endl;
    // }

    return 0;
}
