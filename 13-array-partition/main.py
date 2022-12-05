def swap(arr, left, right):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    return arr

# TODO Hoare

def partitionLomuto(arr, left = 0, right = None):

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

unsorted = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5]

result = partitionLomuto(unsorted)

print(result)

