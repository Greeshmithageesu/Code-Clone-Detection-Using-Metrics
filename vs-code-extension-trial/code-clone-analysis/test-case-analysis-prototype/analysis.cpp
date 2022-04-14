#include <bits/stdc++.h>
using namespace std;

vector<pair<vector<string>, vector<string>>> data_set;
int test_case_count = 1;
int total_match_count = 0;

int main()
{
    string language_1 = "cpp";
    string language_2 = "py";
    string input_filename_1 = "merge-sort.cpp";
    string input_filename_2 = "reverse-array.py";
    
    for (int i = 1; i <= test_case_count; i++)
    {
        string test_filename = "test-case-" + to_string(i) + ".txt";
        pair<vector<string>, vector<string>> temp;
        // for language-1
        if (language_1 == "cpp")
        {
            system("g++ merge-sort.cpp -o merge-sort");
            system("merge-sort");
            cout << "hi cpp" << endl;
            fstream file;
            string word, t, q, filename;
            vector<string> fileInputs;
            filename = "output.txt";
            file.open(filename.c_str());
            while (file >> word)
            {
                fileInputs.push_back(word);
            }
            temp.first = fileInputs;
        }

        // for language-2
        if (language_2 == "py")
        {
            system("python -u reverse-array.py");
            cout << "hi py" << endl;
            fstream file;
            string word, t, q, filename;
            vector<string> fileInputs;
            filename = "output.txt";
            file.open(filename.c_str());
            while (file >> word)
            {
                fileInputs.push_back(word);
            }
            temp.second = fileInputs;
        }
        data_set.push_back(temp);
    }

    cout << endl <<"************** DATA SET ****************" << endl << endl;
    for(int i=0; i<data_set.size(); i++){
        pair<vector<string>, vector<string>> temp;
        temp = data_set[i];
        cout << i+1 << ":" << endl;
        for(int j=0; j<temp.first.size(); j++){
            cout << temp.first[j] << " ";
        }
        cout << endl;
        for(int j=0; j<temp.second.size(); j++){
            cout << temp.second[j] << " ";
        }
        cout << endl;
    }

    cout << endl <<"************** MATCH PROBABILITY ****************" << endl << endl;
    for(int i=0; i<data_set.size(); i++){
        pair<vector<string>, vector<string>> temp;
        temp = data_set[i];
        if(temp.first == temp.second){
            total_match_count++;
        }
    }

    cout << total_match_count << "<---->" << test_case_count << endl;

    float match_probability = (total_match_count/(test_case_count+0.0));

    cout << "Match Probability: " << match_probability << "%" << endl;

    return 0;
}