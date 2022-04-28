// C program to implement
// the above approach
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
  
void selectionSort(int arr[], int n)
{
    int i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i+1; j < n; j++)
          if (arr[j] < arr[min_idx])
            min_idx = j;
  
        // Swap the found minimum element with the first element
        swap(&arr[min_idx], &arr[i]);
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

    selectionSort(arr, n);
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
       fprintf(fptr," %d\n",arr[i]);
   }
   fclose(fptr);

	return 0;
}
