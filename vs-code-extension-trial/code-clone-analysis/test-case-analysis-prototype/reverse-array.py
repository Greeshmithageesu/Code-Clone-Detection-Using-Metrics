def reverseList(A, start, end):
	while start < end:
		A[start], A[end] = A[end], A[start]
		start += 1
		end -= 1

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

# A = [1, 2, 3, 4, 5, 6]
# print(A)
reverseList(arr, 0, n-1)
# print("Reversed list is")
# print(A)

file1 = open('output.txt', 'w')
for i in range(0, n):
	# print (arr[i], end = ' ')
    converted_arr_i = str(arr[i])
    file1.writelines(converted_arr_i)
    file1.writelines('\n')
# file1.writelines(L)
file1.close()