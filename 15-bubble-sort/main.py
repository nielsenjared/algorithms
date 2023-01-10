def bubble_sort(list):
    for i in range(len(list)):
        for j in range(len(list) - 1):
            if (list[j] > list[j + 1]):
                temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
    
    return list

list = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

result = bubble_sort(list)

print(result)