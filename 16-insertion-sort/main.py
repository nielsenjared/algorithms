def insertion_sort(list):
    for curr in range(1, len(list)):
        temp = list[curr]
        prev = curr - 1

        while(prev >= 0):
            if (list[prev] > temp):
                list[prev + 1] = list[prev]
                list[prev] = temp
            prev = prev - 1
    
    return list

list = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

result = insertion_sort(list)

print(result)