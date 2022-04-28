// C program to implement
// the above approach
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
  
    /* create temp arrays */
    int L[n1], R[n2];
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    /* Copy the remaining elements of L[], if there
    are any */
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    /* Copy the remaining elements of R[], if there
    are any */
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  
/* l is for left index and r is right index of the
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
    if (l < r) {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        int m = l + (r - l) / 2;
  
        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
  
        merge(arr, l, m, r);
    }
}

 
/* Utility that prints out an array on a line */
void printArray(int arr[], int size)
{
  int i;
  for (i=0; i < size; i++)
    printf("%d ", arr[i]);
 
  printf("\n");
}

// Driver code
int main(int argc, char* argv[])
{
	FILE* ptr;
	char ch;

	// Opening file in reading mode
    char str1[100] = "../test-case-analysis-prototype/test-cases/";
    strcat(str1, argv[1]);
    // printf("fileCPath: %s\n", str1);
	ptr = fopen(str1, "r");

	if (NULL == ptr) {
		printf("file can't be opened \n");
	}

	// printf("content of this file are \n");

	// Printing what is written in file
	// character by character using loop.
    char temp[101];
    int idx = 0;
    int arr_copy[101];
    int arr_copy_idx = 0;
	do {
        char temp1[10] = "";
        int idx1 = 0;
		ch = fgetc(ptr);
        if(ch=='\n'){
            for(int i=0; i<idx; i++){
                temp1[idx1++] = temp[i];
            }
            // printf("\n");
            idx = 0;
            // printf("%d\n",atoi(temp1));
            arr_copy[arr_copy_idx++] = atoi(temp1);
        }
        else{
            temp[idx++] = ch;
        }
	} while (ch != EOF);

    char temp1[10] = "";
    int idx1 = 0;
    for(int i=0; i<idx; i++){
        for(int i=0; i<idx; i++){
            temp1[idx1++] = temp[i];
        }
            // printf("\n");
            idx = 0;
            // printf("%d\n",atoi(temp1));
            arr_copy[arr_copy_idx++] = atoi(temp1);
    }
    // printf("\n");

	// Closing the file
	fclose(ptr);


    int n = arr_copy[0];
    int arr[n];
    for(int i=1; i<=n; i++){
        arr[i-1] = arr_copy[i];
    }

    // for(int i=0; i<=n; i++){
    //     printf("%d ",arr_copy[i]);
    // }

    mergeSort(arr, 0, n - 1);
    // printf("Reversed array is \n");
    // printArray(arr, n);



   FILE *fptr;

   // use appropriate location if you are using MacOS or Linux
   fptr = fopen("../test-case-analysis-prototype/output.txt","w");

   if(fptr == NULL)
   {
      printf("Error!");   
      exit(1);             
   }

//    fprintf(fptr,"%d",num);
   for(int i=0; i<n; i++){
       fprintf(fptr,"%d\n",arr[i]);
   }
   fclose(fptr);

	return 0;
}
