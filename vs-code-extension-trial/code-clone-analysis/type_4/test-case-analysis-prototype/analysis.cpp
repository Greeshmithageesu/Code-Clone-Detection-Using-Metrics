#include <bits/stdc++.h>
using namespace std;

vector<pair<vector<string>, vector<string>>> data_set;
int test_case_count = 10;
int total_match_count = 0;

int main(int argc, char** argv)
{
    string language_1 = argv[1];
    string language_2 = argv[2];
    string input_filename_1 = argv[3];
    string input_filename_2 = argv[4];

    
    
    for (int i = 1; i <= test_case_count; i++)
    {

        std::ofstream ofs;
        ofs.open("../test-case-analysis-prototype/output.txt", std::ofstream::out | std::ofstream::trunc);
        ofs.close();

        string test_filename = "test-case-" + to_string(i) + ".txt";
        pair<vector<string>, vector<string>> temp;
        
        // for language-1
        if(language_1 == "cpp"){
            system(("g++ ../test-case-analysis-prototype/"+ input_filename_1 +".cpp -o ../test-case-analysis-prototype/"+ input_filename_1).c_str());
            string execute = "cd ../test-case-analysis-prototype && " + input_filename_1 + " " +test_filename;
            system(execute.c_str());
        }
        else if(language_1 == "py"){
            system(("python ../test-case-analysis-prototype/" + input_filename_1 + ".py " + test_filename).c_str());
        }
        else if(language_1 == "c"){
            system(("gcc ../test-case-analysis-prototype/"+ input_filename_1 +".c -o ../test-case-analysis-prototype/"+ input_filename_1).c_str());
            string execute = "cd ../test-case-analysis-prototype && " + input_filename_1 + " " +test_filename;
            system(execute.c_str());
        }
        else{
            cout << "Invalid Language1" << endl;
        }

        fstream file;
        string word, t, q, filename;
        vector<string> fileInputs;
        filename = "../test-case-analysis-prototype/output.txt";
        file.open(filename.c_str());
        while (file >> word)
        {
            fileInputs.push_back(word);
        }
        temp.first = fileInputs;

        // for language-2
        if(language_2 == "cpp"){
            system(("g++ ../test-case-analysis-prototype/"+ input_filename_2 +".cpp -o ../test-case-analysis-prototype/"+ input_filename_2).c_str());
            string execute = "cd ../test-case-analysis-prototype && " + input_filename_2 + " " +test_filename;
            system(execute.c_str());
        }
        else if(language_2 == "py"){
            system(("python ../test-case-analysis-prototype/" + input_filename_2 + ".py " + test_filename).c_str());
        }
        else if(language_2 == "c"){
            system(("gcc ../test-case-analysis-prototype/"+ input_filename_2 +".c -o ../test-case-analysis-prototype/"+ input_filename_2).c_str());
            string execute = "cd ../test-case-analysis-prototype && " + input_filename_2 + " " +test_filename;
            system(execute.c_str());
        }
        else{
            cout << "Invalid Language2" << endl;
        }

        fstream file1;
        string word1, t1, q1, filename1;
        vector<string> fileInputs1;
        filename1 = "../test-case-analysis-prototype/output.txt";
        file1.open(filename1.c_str());
        while (file1 >> word1)
        {
            fileInputs1.push_back(word1);
        }
        temp.second = fileInputs1;
        data_set.push_back(temp);
    }

    // cout << endl <<"************** DATA SET ****************" << endl << endl;
    // for(int i=0; i<data_set.size(); i++){
    //     pair<vector<string>, vector<string>> temp;
    //     temp = data_set[i];
        // cout << i+1 << ":" << endl;
        // cout << "first:" << endl;
        // for(int j=0; j<temp.first.size(); j++){
        //     cout << temp.first[j] << " ";
        // }
        // cout << endl;
        // cout << "second:" << endl;
    //     for(int j=0; j<temp.second.size(); j++){
    //         cout << temp.second[j] << " ";
    //     }
    //     cout << endl;
    // }

    // cout << endl <<"************** MATCH PROBABILITY ****************" << endl << endl;
    for(int i=0; i<data_set.size(); i++){
        pair<vector<string>, vector<string>> temp;
        temp = data_set[i];
        bool flag = false;
        if(temp.first == temp.second){
            total_match_count++;
            flag = true;
        }
        cout << "Test Case " << i+1 << ":" << endl;
        cout << "\t" << input_filename_1 << ": ";
        for(int i=0; i<temp.first.size(); i++){
            cout << temp.first[i] << " ";
        }
        cout << endl;
        cout << "\t" << input_filename_2 << ": " ;
        for(int i=0; i<temp.second.size(); i++){
            cout << temp.second[i] << " ";
        }
        cout << endl;
        cout << "\n";
    }
    cout << endl;

    // cout << total_match_count << "<---->" << test_case_count << endl;

    float match_probability = (total_match_count/(test_case_count+0.0));

    // cout << "Match Probability: " << match_probability*100 << "%" << endl;

    cout << "Total Test Case Count: " << test_case_count << endl << endl;
    cout << "Total Test Cases Matched: " << total_match_count << endl << endl;

    if(match_probability == 1){
        cout << "All the testcases are matched. We can infer that there is some semantic similarity between the two given programs. \nClear result can only be obtained by checking the intermediate changes of the structures inside the programs" << endl;
    }
    else{
        cout << "No testcases are matched. So they are not type-4 clones." << endl;
    }

    return 0;
}