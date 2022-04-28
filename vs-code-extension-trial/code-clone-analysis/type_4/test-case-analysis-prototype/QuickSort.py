import sys

def partition(arr, low, high):
  pivot = arr[high]
  i = low - 1
  for j in range(low, high):
    if arr[j] <= pivot:
      i = i + 1
      (arr[i], arr[j]) = (arr[j], arr[i])
  (arr[i + 1], arr[high]) = (arr[high], arr[i + 1])
  return i + 1
 

def quick_sort(arr, low, high):
  if low < high:
    pi = partition(arr, low, high)
    quick_sort(arr, low, pi - 1)
    quick_sort(arr, pi + 1, high)


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

# bubbleSort(arr, n)
quick_sort(arr, 0, n - 1)

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
