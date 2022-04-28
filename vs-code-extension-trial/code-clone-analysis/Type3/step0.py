import numpy as np
import matplotlib.pyplot as plt
import os
import sys

# creating the dataset
courses = []
type_3 = []

# Using readline()
# file1 = open('../test-case-analysis-prototype/test-cases/'+sys.argv[1], 'r')
cwd = sys.argv[1]
file1 = open(cwd + '/code-clone-analysis/Type3/co-ordinates.txt', 'r')
# print(os.getcwd())

while True:
    line = file1.readline()
    if not line:
        break
    modified_line = line.strip()
    # print(modified_line)
    x = modified_line.split(",")
    course_item = x[0]+" vs "+x[1]
    # print(course_item)
    courses.append(course_item)
    type_3.append(float(x[2]))
    # type_3.append(float(x[4]))
    # print(x)


file1.close()

print(courses)
print(type_3)

  
# fig = plt.figure(figsize = (10, 5))
 
# # creating the bar plot
# plt.bar(courses, values, color ='maroon',
#         width = 0.4)
 
# plt.xlabel("Clone Pairs Detected")
# plt.ylabel("Percentage match")
# plt.title("Percentage match for clone pairs detected")
# plt.show()




# set width of bar
barWidth = 0.25
fig = plt.subplots(figsize =(12, 8))

# # set height of bar
# IT = [12, 30, 1, 8, 22]
# ECE = [28, 6, 16, 5, 10]
# CSE = [29, 3, 24, 25, 17]

# Set position of bar on X axis
br1 = np.arange(len(type_3))

# Make the plot
plt.bar(br1, type_3, color ='r', width = barWidth,
		edgecolor ='grey', label ='type-3')
# plt.bar(br2, type_2, color ='g', width = barWidth,
# 		edgecolor ='grey', label ='type-2')
# plt.bar(br3, type_3, color ='b', width = barWidth,
# 		edgecolor ='grey', label ='type-3')

# Adding Xticks
plt.xlabel('Clone Pairs Detected', fontweight ='bold', fontsize = 15)
plt.ylabel('Percentage match', fontweight ='bold', fontsize = 15)
plt.xticks([r + barWidth for r in range(len(type_3))], courses)

plt.legend()
plt.show()