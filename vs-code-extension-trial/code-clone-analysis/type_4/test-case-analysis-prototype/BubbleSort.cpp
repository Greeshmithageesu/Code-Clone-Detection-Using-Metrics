#include <bits/stdc++.h>
using namespace std;

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n-1; i++)	
	
	for (j = 0; j < n-i-1; j++)
		if (arr[j] > arr[j+1])
			swap(&arr[j], &arr[j+1]);
}

void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
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
    // filename = "test-case-1.txt";
    file.open(str1);
    while (file >> word)
    {
        // cout << word << endl;
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

	// int arr[] = {64, 34, 25, 12, 22, 11, 90};
	// int n = sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr, n);
	// cout<<"Sorted array: \n";
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
