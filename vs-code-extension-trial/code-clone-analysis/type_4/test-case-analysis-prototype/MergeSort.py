import sys

def mergeSort(arr):
    if len(arr) > 1:
  
         # Finding the mid of the array
        mid = len(arr)//2
  
        # Dividing the array elements
        L = arr[:mid]
  
        # into 2 halves
        R = arr[mid:]
  
        # Sorting the first half
        mergeSort(L)
  
        # Sorting the second half
        mergeSort(R)
  
        i = j = k = 0
  
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
  
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
  
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1


arr = []
n = -1
flag = 0
file1 = open('../test-case-analysis-prototype/test-cases/'+sys.argv[1], 'r')
Lines = file1.readlines()
for line in Lines:
    curr_line = line.strip()
    # print(curr_line)
    converted_num = int(curr_line)
    # print(converted_num)
    if(flag==0):
        flag = 1
        n = converted_num
    else:
        arr.append(converted_num)

#arr= [1, 2, 3, 4, 5]
# n = len(arr)
# print ("Given array is")
# for i in range(0, n):
# 	print (arr[i], end = ' ')

mergeSort(arr)

# print ("\nRotated array is")
# for i in range(0, n):
# 	print (arr[i], end = ' ')

file1 = open('../test-case-analysis-prototype/output.txt', 'w')
for i in range(0, n):
	# print (arr[i], end = ' ')
    converted_arr_i = str(arr[i])
    file1.writelines(converted_arr_i)
    file1.writelines('\n')
# file1.writelines(L)
file1.close()
