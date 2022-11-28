def swap(arr, left, right):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    return arr

def partition(arr, left, right):
    pivot = arr[ (left + right) // 2 ]

    while (left <= right):
        while (arr[left] < pivot):
            left = left + 1
        while (arr[right] > pivot):
            right = right - 1
        if (left <= right):
            swap(arr, left, right)
            left = left + 1
            right = right - 1
    return left

def quick_sort(arr, left = 0, right = None):
    if right == None:
        right = len(arr) - 1

    if (left >= right):
        return

    pivot = partition(arr, left, right)

    quick_sort(arr, left, pivot - 1)
    quick_sort(arr, pivot, right)
    
    return arr

unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

result = quick_sort(unsorted)

print(result)


