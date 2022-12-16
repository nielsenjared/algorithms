unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

def selection_sort(arr):
    for i in range(len(arr) - 1):
        min = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min]:
                min = j

        tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    
    return arr

sorted = selection_sort(unsorted)

print(sorted)