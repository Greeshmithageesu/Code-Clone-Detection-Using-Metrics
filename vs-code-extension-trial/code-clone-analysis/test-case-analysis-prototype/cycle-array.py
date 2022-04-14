def rotate(arr, n):
	x = arr[n - 1]
	
	for i in range(n - 1, 0, -1):
		arr[i] = arr[i - 1]
		
	arr[0] = x


arr = []
n = -1
flag = 0
file1 = open('test-case-1.txt', 'r')
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

rotate(arr, n)

# print ("\nRotated array is")
# for i in range(0, n):
# 	print (arr[i], end = ' ')

file1 = open('test-case-1-cycle-array-py.txt', 'w')
for i in range(0, n):
	# print (arr[i], end = ' ')
    converted_arr_i = str(arr[i])
    file1.writelines(converted_arr_i)
    file1.writelines('\n')
# file1.writelines(L)
file1.close()
