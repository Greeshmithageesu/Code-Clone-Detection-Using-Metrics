import React from 'react'

class Codes extends React.Component {
    cppBubbleSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int *xp, int *yp)\n'+
    '{\n'+
    '	int temp = *xp;\n'+
    '	*xp = *yp;\n'+
    '	*yp = temp;\n'+
    '}\n'+
    '\n'+
    'void bubbleSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, j;\n'+
    '	for (i = 0; i < n-1; i++)	\n'+
    '	\n'+
    '	for (j = 0; j < n-i-1; j++)\n'+
    '		if (arr[j] > arr[j+1])\n'+
    '			swap(&arr[j], &arr[j+1]);\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '    cout << "Bubble-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {64, 34, 25, 12, 22, 11, 90};\n'+
    '	// int n = sizeof(arr)/sizeof(arr[0]);\n'+
    '	bubbleSort(arr, n);\n'+
    '	// cout<<"Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '    ofstream myfile("test-case-1-bubble-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '	return 0;\n'+
    '}\n'+
    ';';
    cppInsertionSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void insertionSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, key, j;\n'+
    '	for (i = 1; i < n; i++)\n'+
    '	{\n'+
    '		key = arr[i];\n'+
    '		j = i - 1;\n'+
    '\n'+
    '		while (j >= 0 && arr[j] > key)\n'+
    '		{\n'+
    '			arr[j + 1] = arr[j];\n'+
    '			j = j - 1;\n'+
    '		}\n'+
    '		arr[j + 1] = key;\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int n)\n'+
    '{\n'+
    '    cout << "Insertion-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < n; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = { 12, 11, 13, 5, 6 };\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '\n'+
    '	insertionSort(arr, n);\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-insertion-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppMergeSort = '// C++ program for Merge Sort\n'+
    '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    '// Merges two subarrays of array[].\n'+
    '// First subarray is arr[begin..mid]\n'+
    '// Second subarray is arr[mid+1..end]\n'+
    'void merge(int array[], int const left, int const mid, int const right)\n'+
    '{\n'+
    '    auto const subArrayOne = mid - left + 1;\n'+
    '    auto const subArrayTwo = right - mid;\n'+
    '\n'+
    '    // Create temp arrays\n'+
    '    auto *leftArray = new int[subArrayOne],\n'+
    '         *rightArray = new int[subArrayTwo];\n'+
    '\n'+
    '    // Copy data to temp arrays leftArray[] and rightArray[]\n'+
    '    for (auto i = 0; i < subArrayOne; i++)\n'+
    '        leftArray[i] = array[left + i];\n'+
    '    for (auto j = 0; j < subArrayTwo; j++)\n'+
    '        rightArray[j] = array[mid + 1 + j];\n'+
    '\n'+
    '    auto indexOfSubArrayOne = 0,   // Initial index of first sub-array\n'+
    '        indexOfSubArrayTwo = 0;    // Initial index of second sub-array\n'+
    '    int indexOfMergedArray = left; // Initial index of merged array\n'+
    '\n'+
    '    // Merge the temp arrays back into array[left..right]\n'+
    '    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo)\n'+
    '    {\n'+
    '        if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo])\n'+
    '        {\n'+
    '            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];\n'+
    '            indexOfSubArrayOne++;\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];\n'+
    '            indexOfSubArrayTwo++;\n'+
    '        }\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '    // Copy the remaining elements of\n'+
    '    // left[], if there are any\n'+
    '    while (indexOfSubArrayOne < subArrayOne)\n'+
    '    {\n'+
    '        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];\n'+
    '        indexOfSubArrayOne++;\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '    // Copy the remaining elements of\n'+
    '    // right[], if there are any\n'+
    '    while (indexOfSubArrayTwo < subArrayTwo)\n'+
    '    {\n'+
    '        array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];\n'+
    '        indexOfSubArrayTwo++;\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '}\n'+
    '\n'+
    '// begin is for left index and end is\n'+
    '// right index of the sub-array\n'+
    '// of arr to be sorted */\n'+
    'void mergeSort(int array[], int const begin, int const end)\n'+
    '{\n'+
    '    if (begin >= end)\n'+
    '        return; // Returns recursively\n'+
    '\n'+
    '    auto mid = begin + (end - begin) / 2;\n'+
    '    mergeSort(array, begin, mid);\n'+
    '    mergeSort(array, mid + 1, end);\n'+
    '    merge(array, begin, mid, end);\n'+
    '}\n'+
    '\n'+
    '// UTILITY FUNCTIONS\n'+
    '// Function to print an array\n'+
    'void printArray(int A[], int size)\n'+
    '{\n'+
    '    cout << "Merge-sort output:" << endl;\n'+
    '    for (auto i = 0; i < size; i++)\n'+
    '        cout << A[i] << " ";\n'+
    '    cout << endl;\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main()\n'+
    '{\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '    // for(int i=0; i<n; i++){\n'+
    '    //     cout << arr[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    // int arr[] = { 12, 11, 13, 5, 6, 7 };\n'+
    '    auto arr_size = n;\n'+
    '\n'+
    '    // cout << "Given array is \n";\n'+
    '    // printArray(arr, arr_size);\n'+
    '\n'+
    '    mergeSort(arr, 0, arr_size - 1);\n'+
    '\n'+
    '    // cout << "\nSorted array is \n";\n'+
    '    printArray(arr, arr_size);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-merge-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '    return 0;\n'+
    '}\n'+
    '';
    cppQuickSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int* a, int* b)\n'+
    '{\n'+
    '	int t = *a;\n'+
    '	*a = *b;\n'+
    '	*b = t;\n'+
    '}\n'+
    '\n'+
    'int partition (int arr[], int low, int high)\n'+
    '{\n'+
    '	int pivot = arr[high]; // pivot\n'+
    '	int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far\n'+
    '\n'+
    '	for (int j = low; j <= high - 1; j++)\n'+
    '	{\n'+
    '		if (arr[j] < pivot)\n'+
    '		{\n'+
    '			i++; // increment index of smaller element\n'+
    '			swap(&arr[i], &arr[j]);\n'+
    '		}\n'+
    '	}\n'+
    '	swap(&arr[i + 1], &arr[high]);\n'+
    '	return (i + 1);\n'+
    '}\n'+
    '\n'+
    'void quickSort(int arr[], int low, int high)\n'+
    '{\n'+
    '	if (low < high)\n'+
    '	{\n'+
    '		int pi = partition(arr, low, high);\n'+
    '\n'+
    '		quickSort(arr, low, pi - 1);\n'+
    '		quickSort(arr, pi + 1, high);\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '	cout << "Quick-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '    \n'+
    '	// int arr[] = {10, 7, 8, 9, 1, 5};\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '	quickSort(arr, 0, n - 1);\n'+
    '	// cout << "Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-quick-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppSelectionSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int *xp, int *yp)\n'+
    '{\n'+
    '	int temp = *xp;\n'+
    '	*xp = *yp;\n'+
    '	*yp = temp;\n'+
    '}\n'+
    '\n'+
    'void selectionSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, j, min_idx;\n'+
    '\n'+
    '	for (i = 0; i < n-1; i++)\n'+
    '	{\n'+
    '		min_idx = i;\n'+
    '		for (j = i+1; j < n; j++)\n'+
    '		if (arr[j] < arr[min_idx])\n'+
    '			min_idx = j;\n'+
    '\n'+
    '		swap(&arr[min_idx], &arr[i]);\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '    cout << "Selection-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i=0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {64, 25, 12, 22, 11};\n'+
    '	// int n = sizeof(arr)/sizeof(arr[0]);\n'+
    '	selectionSort(arr, n);\n'+
    '	// cout << "Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-selection-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppReverseArray = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void rvereseArray(int arr[], int start, int end)\n'+
    '{\n'+
    '	while (start < end)\n'+
    '	{\n'+
    '		int temp = arr[start];\n'+
    '		arr[start] = arr[end];\n'+
    '		arr[end] = temp;\n'+
    '		start++;\n'+
    '		end--;\n'+
    '	}\n'+
    '}	\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    'for (int i = 0; i < size; i++)\n'+
    'cout << arr[i] << " ";\n'+
    '\n'+
    'cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {1, 2, 3, 4, 5, 6};\n'+
    '	\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '\n'+
    '	// printArray(arr, n);\n'+
    '	\n'+
    '	rvereseArray(arr, 0, n-1);\n'+
    '	\n'+
    '	// cout << "Reversed array is" << endl;\n'+
    '	\n'+
    '	// printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-reverse-array-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '	\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cppCyclicArray = '# include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void rotate(int arr[], int n)\n'+
    '{\n'+
    '	int x = arr[n - 1], i;\n'+
    '	for (i = n - 1; i > 0; i--)\n'+
    '	arr[i] = arr[i - 1];\n'+
    '	arr[0] = x;\n'+
    '}\n'+
    '\n'+
    'int main(int argc, char** argv)\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("Filepath: %s\n", str1);\n'+
    '    // filename = "../test-case-analysis-prototype/"+argv[1];\n'+
    '    file.open(str1);\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {1, 2, 3, 4, 5}, i;\n'+
    '	// int n = sizeof(arr) /\n'+
    '	// 		sizeof(arr[0]);\n'+
    '\n'+
    '	// cout << "Given array is \n";\n'+
    '	// for (i = 0; i < n; i++)\n'+
    '	// 	cout << arr[i] << \' \';\n'+
    '\n'+
    '	rotate(arr, n);\n'+
    '\n'+
    '	// cout << "\nRotated array is\n";\n'+
    '	// for (i = 0; i < n; i++)\n'+
    '	// 	cout << arr[i] << \' \';\n'+
    '    fstream myfile;\n'+
    '    myfile.open("../test-case-analysis-prototype/output.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';

    cBubbleSort = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void swap(int* xp, int* yp)\n'+
    '{\n'+
    '    int temp = *xp;\n'+
    '    *xp = *yp;\n'+
    '    *yp = temp;\n'+
    '}\n'+
    ' \n'+
    '// A function to implement bubble sort\n'+
    'void bubbleSort(int arr[], int n)\n'+
    '{\n'+
    '    int i, j;\n'+
    '    for (i = 0; i < n - 1; i++)\n'+
    ' \n'+
    '        // Last i elements are already in place\n'+
    '        for (j = 0; j < n - i - 1; j++)\n'+
    '            if (arr[j] > arr[j + 1])\n'+
    '                swap(&arr[j], &arr[j + 1]);\n'+
    '}\n'+
    '\n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    bubbleSort(arr, n);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    // printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr,"%d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cInsertionSort = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void insertionSort(int arr[], int n)\n'+
    '{\n'+
    '    int i, key, j;\n'+
    '    for (i = 1; i < n; i++) {\n'+
    '        key = arr[i];\n'+
    '        j = i - 1;\n'+
    ' \n'+
    '        /* Move elements of arr[0..i-1], that are\n'+
    '          greater than key, to one position ahead\n'+
    '          of their current position */\n'+
    '        while (j >= 0 && arr[j] > key) {\n'+
    '            arr[j + 1] = arr[j];\n'+
    '            j = j - 1;\n'+
    '        }\n'+
    '        arr[j + 1] = key;\n'+
    '    }\n'+
    '} \n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    insertionSort(arr, n);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    // printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr," %d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cMergeSort = '// C program to implement\n'+
'// the above approach\n'+
'#include <stdio.h>\n'+
'#include <stdlib.h>\n'+
'#include <string.h>\n'+
'\n'+
'void merge(int arr[], int l, int m, int r)\n'+
'{\n'+
'    int i, j, k;\n'+
'    int n1 = m - l + 1;\n'+
'    int n2 = r - m;\n'+
'  \n'+
'    /* create temp arrays */\n'+
'    int L[n1], R[n2];\n'+
'  \n'+
'    /* Copy data to temp arrays L[] and R[] */\n'+
'    for (i = 0; i < n1; i++)\n'+
'        L[i] = arr[l + i];\n'+
'    for (j = 0; j < n2; j++)\n'+
'        R[j] = arr[m + 1 + j];\n'+
'  \n'+
'    /* Merge the temp arrays back into arr[l..r]*/\n'+
'    i = 0; // Initial index of first subarray\n'+
'    j = 0; // Initial index of second subarray\n'+
'    k = l; // Initial index of merged subarray\n'+
'    while (i < n1 && j < n2) {\n'+
'        if (L[i] <= R[j]) {\n'+
'            arr[k] = L[i];\n'+
'            i++;\n'+
'        }\n'+
'        else {\n'+
'            arr[k] = R[j];\n'+
'            j++;\n'+
'        }\n'+
'        k++;\n'+
'    }\n'+
'  \n'+
'    /* Copy the remaining elements of L[], if there\n'+
'    are any */\n'+
'    while (i < n1) {\n'+
'        arr[k] = L[i];\n'+
'        i++;\n'+
'        k++;\n'+
'    }\n'+
'  \n'+
'    /* Copy the remaining elements of R[], if there\n'+
'    are any */\n'+
'    while (j < n2) {\n'+
'        arr[k] = R[j];\n'+
'        j++;\n'+
'        k++;\n'+
'    }\n'+
'}\n'+
'  \n'+
'/* l is for left index and r is right index of the\n'+
'sub-array of arr to be sorted */\n'+
'void mergeSort(int arr[], int l, int r)\n'+
'{\n'+
'    if (l < r) {\n'+
'        // Same as (l+r)/2, but avoids overflow for\n'+
'        // large l and h\n'+
'        int m = l + (r - l) / 2;\n'+
'  \n'+
'        // Sort first and second halves\n'+
'        mergeSort(arr, l, m);\n'+
'        mergeSort(arr, m + 1, r);\n'+
'  \n'+
'        merge(arr, l, m, r);\n'+
'    }\n'+
'}\n'+
'\n'+
' \n'+
'/* Utility that prints out an array on a line */\n'+
'void printArray(int arr[], int size)\n'+
'{\n'+
'  int i;\n'+
'  for (i=0; i < size; i++)\n'+
'    printf("%d ", arr[i]);\n'+
' \n'+
'  printf("\n");\n'+
'}\n'+
'\n'+
'// Driver code\n'+
'int main(int argc, char* argv[])\n'+
'{\n'+
'	FILE* ptr;\n'+
'	char ch;\n'+
'\n'+
'	// Opening file in reading mode\n'+
'    char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
'    strcat(str1, argv[1]);\n'+
'    printf("fileCPath: %s\n", str1);\n'+
'	ptr = fopen(str1, "r");\n'+
'\n'+
'	if (NULL == ptr) {\n'+
'		printf("file cant be opened \n");\n'+
'	}\n'+
'\n'+
'	// printf("content of this file are \n");\n'+
'\n'+
'	// Printing what is written in file\n'+
'	// character by character using loop.\n'+
'    char temp[101];\n'+
'    int idx = 0;\n'+
'    int arr_copy[101];\n'+
'    int arr_copy_idx = 0;\n'+
'	do {\n'+
'        char temp1[10] = "";\n'+
'        int idx1 = 0;\n'+
'		ch = fgetc(ptr);\n'+
'        if(ch==\'\\n\'){\n'+
'            for(int i=0; i<idx; i++){\n'+
'                temp1[idx1++] = temp[i];\n'+
'            }\n'+
'            // printf("\n");\n'+
'            idx = 0;\n'+
'            // printf("%d\n",atoi(temp1));\n'+
'            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
'        }\n'+
'        else{\n'+
'            temp[idx++] = ch;\n'+
'        }\n'+
'	} while (ch != EOF);\n'+
'\n'+
'    char temp1[10] = "";\n'+
'    int idx1 = 0;\n'+
'    for(int i=0; i<idx; i++){\n'+
'        for(int i=0; i<idx; i++){\n'+
'            temp1[idx1++] = temp[i];\n'+
'        }\n'+
'            // printf("\n");\n'+
'            idx = 0;\n'+
'            // printf("%d\n",atoi(temp1));\n'+
'            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
'    }\n'+
'    // printf("\n");\n'+
'\n'+
'	// Closing the file\n'+
'	fclose(ptr);\n'+
'\n'+
'\n'+
'    int n = arr_copy[0];\n'+
'    int arr[n];\n'+
'    for(int i=1; i<=n; i++){\n'+
'        arr[i-1] = arr_copy[i];\n'+
'    }\n'+
'\n'+
'    // for(int i=0; i<=n; i++){\n'+
'    //     printf("%d ",arr_copy[i]);\n'+
'    // }\n'+
'\n'+
'    mergeSort(arr, 0, n - 1);\n'+
'    // printf("Reversed array is \n");\n'+
'    // printArray(arr, n);\n'+
'\n'+
'\n'+
'\n'+
'   FILE *fptr;\n'+
'\n'+
'   // use appropriate location if you are using MacOS or Linux\n'+
'   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
'\n'+
'   if(fptr == NULL)\n'+
'   {\n'+
'      printf("Error!");   \n'+
'      exit(1);             \n'+
'   }\n'+
'\n'+
'//    fprintf(fptr,"%d",num);\n'+
'   for(int i=0; i<n; i++){\n'+
'       fprintf(fptr,"%d\n",arr[i]);\n'+
'   }\n'+
'   fclose(fptr);\n'+
'\n'+
'	return 0;\n'+
'}\n'+
'';

    cQuickSort = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void quicksort(int number[],int first,int last){\n'+
    '   int i, j, pivot, temp;\n'+
    '\n'+
    '   if(first<last){\n'+
    '      pivot=first;\n'+
    '      i=first;\n'+
    '      j=last;\n'+
    '\n'+
    '      while(i<j){\n'+
    '         while(number[i]<=number[pivot]&&i<last)\n'+
    '            i++;\n'+
    '         while(number[j]>number[pivot])\n'+
    '            j--;\n'+
    '         if(i<j){\n'+
    '            temp=number[i];\n'+
    '            number[i]=number[j];\n'+
    '            number[j]=temp;\n'+
    '         }\n'+
    '      }\n'+
    '\n'+
    '      temp=number[pivot];\n'+
    '      number[pivot]=number[j];\n'+
    '      number[j]=temp;\n'+
    '      quicksort(number,first,j-1);\n'+
    '      quicksort(number,j+1,last);\n'+
    '\n'+
    '   }\n'+
    '}\n'+
    '\n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    quicksort(arr,0,n-1);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr," %d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cSelectionSort = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void swap(int *xp, int *yp)\n'+
    '{\n'+
    '    int temp = *xp;\n'+
    '    *xp = *yp;\n'+
    '    *yp = temp;\n'+
    '}\n'+
    '  \n'+
    'void selectionSort(int arr[], int n)\n'+
    '{\n'+
    '    int i, j, min_idx;\n'+
    '  \n'+
    '    // One by one move boundary of unsorted subarray\n'+
    '    for (i = 0; i < n-1; i++)\n'+
    '    {\n'+
    '        // Find the minimum element in unsorted array\n'+
    '        min_idx = i;\n'+
    '        for (j = i+1; j < n; j++)\n'+
    '          if (arr[j] < arr[min_idx])\n'+
    '            min_idx = j;\n'+
    '  \n'+
    '        // Swap the found minimum element with the first element\n'+
    '        swap(&arr[min_idx], &arr[i]);\n'+
    '    }\n'+
    '} \n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    selectionSort(arr, n);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    // printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr," %d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cReverseArray = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void rvereseArray(int arr[], int start, int end)\n'+
    '{\n'+
    '    int temp;\n'+
    '    while (start < end)\n'+
    '    {\n'+
    '        temp = arr[start];  \n'+
    '        arr[start] = arr[end];\n'+
    '        arr[end] = temp;\n'+
    '        start++;\n'+
    '        end--;\n'+
    '    }  \n'+
    '}    \n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    rvereseArray(arr, 0, n-1);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr," %d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    cCyclicArray = '// C program to implement\n'+
    '// the above approach\n'+
    '#include <stdio.h>\n'+
    '#include <stdlib.h>\n'+
    '#include <string.h>\n'+
    '\n'+
    'void rotate(int arr[], int n)\n'+
    '{\n'+
    '   int x = arr[n-1], i;\n'+
    '   for (i = n-1; i > 0; i--)\n'+
    '      arr[i] = arr[i-1];\n'+
    '   arr[0] = x;\n'+
    '}\n'+
    ' \n'+
    '/* Utility that prints out an array on a line */\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '  int i;\n'+
    '  for (i=0; i < size; i++)\n'+
    '    printf("%d ", arr[i]);\n'+
    ' \n'+
    '  printf("\n");\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main(int argc, char* argv[])\n'+
    '{\n'+
    '	FILE* ptr;\n'+
    '	char ch;\n'+
    '\n'+
    '	// Opening file in reading mode\n'+
    '	char str1[100] = "../test-case-analysis-prototype/test-cases/";\n'+
    '    strcat(str1, argv[1]);\n'+
    '    printf("fileCPath: %s\n", str1);\n'+
    '	ptr = fopen(str1, "r");\n'+
    '\n'+
    '	if (NULL == ptr) {\n'+
    '		printf("file cant be opened \n");\n'+
    '	}\n'+
    '\n'+
    '	// printf("content of this file are \n");\n'+
    '\n'+
    '	// Printing what is written in file\n'+
    '	// character by character using loop.\n'+
    '    char temp[101];\n'+
    '    int idx = 0;\n'+
    '    int arr_copy[101];\n'+
    '    int arr_copy_idx = 0;\n'+
    '	do {\n'+
    '        char temp1[10] = "";\n'+
    '        int idx1 = 0;\n'+
    '		ch = fgetc(ptr);\n'+
    '        if(ch==\'\\n\'){\n'+
    '            for(int i=0; i<idx; i++){\n'+
    '                temp1[idx1++] = temp[i];\n'+
    '            }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '        }\n'+
    '        else{\n'+
    '            temp[idx++] = ch;\n'+
    '        }\n'+
    '	} while (ch != EOF);\n'+
    '\n'+
    '    char temp1[10] = "";\n'+
    '    int idx1 = 0;\n'+
    '    for(int i=0; i<idx; i++){\n'+
    '        for(int i=0; i<idx; i++){\n'+
    '            temp1[idx1++] = temp[i];\n'+
    '        }\n'+
    '            // printf("\n");\n'+
    '            idx = 0;\n'+
    '            // printf("%d\n",atoi(temp1));\n'+
    '            arr_copy[arr_copy_idx++] = atoi(temp1);\n'+
    '    }\n'+
    '    // printf("\n");\n'+
    '\n'+
    '	// Closing the file\n'+
    '	fclose(ptr);\n'+
    '\n'+
    '\n'+
    '    int n = arr_copy[0];\n'+
    '    int arr[n];\n'+
    '    for(int i=1; i<=n; i++){\n'+
    '        arr[i-1] = arr_copy[i];\n'+
    '    }\n'+
    '\n'+
    '    // for(int i=0; i<=n; i++){\n'+
    '    //     printf("%d ",arr_copy[i]);\n'+
    '    // }\n'+
    '\n'+
    '    rotate(arr, n);\n'+
    '    // printf("Reversed array is \n");\n'+
    '    printArray(arr, n);\n'+
    '\n'+
    '\n'+
    '\n'+
    '   FILE *fptr;\n'+
    '\n'+
    '   // use appropriate location if you are using MacOS or Linux\n'+
    '   fptr = fopen("../test-case-analysis-prototype/output.txt","w");\n'+
    '\n'+
    '   if(fptr == NULL)\n'+
    '   {\n'+
    '      printf("Error!");   \n'+
    '      exit(1);             \n'+
    '   }\n'+
    '\n'+
    '//    fprintf(fptr,"%d",num);\n'+
    '   for(int i=0; i<n; i++){\n'+
    '       fprintf(fptr," %d\n",arr[i]);\n'+
    '   }\n'+
    '   fclose(fptr);\n'+
    '\n'+
    '	return 0;\n'+
    '}\n'+
    '';


    pyBubbleSort = 'import sys\n'+
    '\n'+
    'def bubbleSort(arr, n):\n'+
    ' \n'+
    '    # Traverse through all array elements\n'+
    '    for i in range(n):\n'+
    ' \n'+
    '        # Last i elements are already in place\n'+
    '        for j in range(0, n-i-1):\n'+
    ' \n'+
    '            # traverse the array from 0 to n-i-1\n'+
    '            # Swap if the element found is greater\n'+
    '            # than the next element\n'+
    '            if arr[j] > arr[j+1]:\n'+
    '                arr[j], arr[j+1] = arr[j+1], arr[j]\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'bubbleSort(arr, n)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';

    pyInsertionSort = 'import sys\n'+
    '\n'+
    'def insertionSort(arr, n):\n'+
    ' \n'+
    '    # Traverse through 1 to len(arr)\n'+
    '    for i in range(1, n):\n'+
    ' \n'+
    '        key = arr[i]\n'+
    ' \n'+
    '        # Move elements of arr[0..i-1], that are\n'+
    '        # greater than key, to one position ahead\n'+
    '        # of their current position\n'+
    '        j = i-1\n'+
    '        while j >= 0 and key < arr[j] :\n'+
    '                arr[j + 1] = arr[j]\n'+
    '                j -= 1\n'+
    '        arr[j + 1] = key\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'insertionSort(arr, n)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';

    pyMergeSort = 'import sys\n'+
    '\n'+
    'def mergeSort(arr):\n'+
    '    if len(arr) > 1:\n'+
    '  \n'+
    '         # Finding the mid of the array\n'+
    '        mid = len(arr)//2\n'+
    '  \n'+
    '        # Dividing the array elements\n'+
    '        L = arr[:mid]\n'+
    '  \n'+
    '        # into 2 halves\n'+
    '        R = arr[mid:]\n'+
    '  \n'+
    '        # Sorting the first half\n'+
    '        mergeSort(L)\n'+
    '  \n'+
    '        # Sorting the second half\n'+
    '        mergeSort(R)\n'+
    '  \n'+
    '        i = j = k = 0\n'+
    '  \n'+
    '        # Copy data to temp arrays L[] and R[]\n'+
    '        while i < len(L) and j < len(R):\n'+
    '            if L[i] < R[j]:\n'+
    '                arr[k] = L[i]\n'+
    '                i += 1\n'+
    '            else:\n'+
    '                arr[k] = R[j]\n'+
    '                j += 1\n'+
    '            k += 1\n'+
    '  \n'+
    '        # Checking if any element was left\n'+
    '        while i < len(L):\n'+
    '            arr[k] = L[i]\n'+
    '            i += 1\n'+
    '            k += 1\n'+
    '  \n'+
    '        while j < len(R):\n'+
    '            arr[k] = R[j]\n'+
    '            j += 1\n'+
    '            k += 1\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'mergeSort(arr)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';

    pyQuickSort = 'import sys\n'+
    '\n'+
    'def partition(arr, low, high):\n'+
    '  pivot = arr[high]\n'+
    '  i = low - 1\n'+
    '  for j in range(low, high):\n'+
    '    if arr[j] <= pivot:\n'+
    '      i = i + 1\n'+
    '      (arr[i], arr[j]) = (arr[j], arr[i])\n'+
    '  (arr[i + 1], arr[high]) = (arr[high], arr[i + 1])\n'+
    '  return i + 1\n'+
    ' \n'+
    '\n'+
    'def quick_sort(arr, low, high):\n'+
    '  if low < high:\n'+
    '    pi = partition(arr, low, high)\n'+
    '    quick_sort(arr, low, pi - 1)\n'+
    '    quick_sort(arr, pi + 1, high)\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    '# bubbleSort(arr, n)\n'+
    'quick_sort(arr, 0, n - 1)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';
    pySelectionSort = 'import sys\n'+
    '\n'+
    'def selectionsort(arr, n):\n'+
    '    for i in range(n):\n'+
    '      \n'+
    '        # Find the minimum element in remaining \n'+
    '        # unsorted array\n'+
    '        min_idx = i\n'+
    '        for j in range(i+1, n):\n'+
    '            if arr[min_idx] > arr[j]:\n'+
    '                min_idx = j\n'+
    '                \n'+
    '        # Swap the found minimum element with \n'+
    '        # the first element        \n'+
    '        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'selectionsort(arr, n)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';

    pyCyclicArray = 'import sys\n'+
    '\n'+
    'def rotate(arr, n):\n'+
    '	x = arr[n - 1]\n'+
    '	\n'+
    '	for i in range(n - 1, 0, -1):\n'+
    '		arr[i] = arr[i - 1]\n'+
    '		\n'+
    '	arr[0] = x\n'+
    '\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open(\'../test-case-analysis-prototype/test-cases/\'+sys.argv[1], \'r\')\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '#arr= [1, 2, 3, 4, 5]\n'+
    '# n = len(arr)\n'+
    '# print ("Given array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'rotate(arr, n)\n'+
    '\n'+
    '# print ("\nRotated array is")\n'+
    '# for i in range(0, n):\n'+
    '# 	print (arr[i], end = \' \')\n'+
    '\n'+
    'file1 = open(\'../test-case-analysis-prototype/output.txt\', \'w\')\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = \' \')\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines(\'\\n\')\n'+
    '# file1.writelines(L)\n'+
    'file1.close()\n'+
    '';

    pyReverseArray = 'def reverseList(A, start, end):\n'+
    '	while start < end:\n'+
    '		A[start], A[end] = A[end], A[start]\n'+
    '		start += 1\n'+
    '		end -= 1\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open("test-case-1.txt", "r")\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '# A = [1, 2, 3, 4, 5, 6]\n'+
    '# print(A)\n'+
    'reverseList(arr, 0, n-1)\n'+
    '# print("Reversed list is")\n'+
    '# print(A)\n'+
    '\n'+
    'file1 = open("output.txt", "w")\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = " ")\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines("\n")\n'+
    '# file1.writelines(L)\n'+
    'file1.close()';
}

export default Codes