# include <bits/stdc++.h>
using namespace std;

void rotate(int arr[], int n)
{
	int x = arr[n - 1], i;
	for (i = n - 1; i > 0; i--)
	arr[i] = arr[i - 1];
	arr[0] = x;
}

int main(int argc, char** argv)
{

    fstream file;
    string word, t, q, filename;
    vector<int> fileInputs;
    char str1[100] = "../test-case-analysis-prototype/test-cases/";
    strcat(str1, argv[1]);
    // printf("Filepath: %s\n", str1);
    // filename = "../test-case-analysis-prototype/"+argv[1];
    file.open(str1);
    while (file >> word)
    {
        fileInputs.push_back(stoi(word));
    }
    // for(int i=0; i<fileInputs.size(); i++){
    //     cout << fileInputs[i] << endl;
    // }

    int n = fileInputs[0];
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        arr[i] = fileInputs[i + 1];
    }

	// int arr[] = {1, 2, 3, 4, 5}, i;
	// int n = sizeof(arr) /
	// 		sizeof(arr[0]);

	// cout << "Given array is \n";
	// for (i = 0; i < n; i++)
	// 	cout << arr[i] << ' ';

	rotate(arr, n);

	// cout << "\nRotated array is\n";
	// for (i = 0; i < n; i++)
	// 	cout << arr[i] << ' ';
    fstream myfile;
    myfile.open("../test-case-analysis-prototype/output.txt");
    if (myfile.is_open())
    {
        for (int count = 0; count < n; count++)
        {
            myfile << arr[count] << endl;
        }
        myfile.close();
    }
    else
        cout << "Unable to open file";

	return 0;
}