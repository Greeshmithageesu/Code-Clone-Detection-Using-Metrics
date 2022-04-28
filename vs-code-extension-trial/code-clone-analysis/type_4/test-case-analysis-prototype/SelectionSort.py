import sys

def selectionsort(arr, n):
    for i in range(n):
      
        # Find the minimum element in remaining 
        # unsorted array
        min_idx = i
        for j in range(i+1, n):
            if arr[min_idx] > arr[j]:
                min_idx = j
                
        # Swap the found minimum element with 
        # the first element        
        arr[i], arr[min_idx] = arr[min_idx], arr[i]


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

selectionsort(arr, n)

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
