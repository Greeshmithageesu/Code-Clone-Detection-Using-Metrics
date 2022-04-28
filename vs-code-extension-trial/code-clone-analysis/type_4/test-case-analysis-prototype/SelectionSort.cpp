#include <bits/stdc++.h>
using namespace std;

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	for (i = 0; i < n-1; i++)
	{
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		swap(&arr[min_idx], &arr[i]);
	}
}

void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
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

	// int arr[] = {64, 25, 12, 22, 11};
	// int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	// cout << "Sorted array: \n";
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