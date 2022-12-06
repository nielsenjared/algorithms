def swap(arr, left, right):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    return arr

def partition(arr, left = 0, right = None):

    if right == None: 
        right = len(arr) - 1
        
    pivot = arr[right]
    index = left

    for i in range(left, right):
        if arr[i] < pivot:
            swap(arr, index, i)
            index += 1
    
    swap(arr, index, right)

    return index 

def partition(arr, pivot):
    left = 0
    right = len(arr) - 1

    while (left <= right):
        while (arr[left] < pivot):
            left = left + 1
        while (arr[right] > pivot and right > 0):
            right = right - 1
        if (left <= right):
            swap(arr, left, right)
            left = left + 1
            right = right - 1
    return arr

def quick_sort(arr, left = 0, right = None):
    if right == None:
        right = len(arr) - 1

    if (left < right):
        pivot = (left + right) // 2

        part = partition(arr, pivot)

        index = part[pivot]

        quick_sort(arr, left, index - 1)
        quick_sort(arr, index, right)
    
    return arr

unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

result = quick_sort(unsorted)

print(result)


