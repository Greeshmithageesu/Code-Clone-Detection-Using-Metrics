#include <bits/stdc++.h>
using namespace std;

void rvereseArray(int arr[], int start, int end)
{
	while (start < end)
	{
		int temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}	

void printArray(int arr[], int size)
{
for (int i = 0; i < size; i++)
cout << arr[i] << " ";

cout << endl;
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

	// int arr[] = {1, 2, 3, 4, 5, 6};
	
	// int n = sizeof(arr) / sizeof(arr[0]);

	// printArray(arr, n);
	
	rvereseArray(arr, 0, n-1);
	
	// cout << "Reversed array is" << endl;
	
	// printArray(arr, n);

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
