import sys

def insertionSort(arr, n):
 
    # Traverse through 1 to len(arr)
    for i in range(1, n):
 
        key = arr[i]
 
        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key


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

insertionSort(arr, n)

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
