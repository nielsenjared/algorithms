def merge(left, right):
    result = []

    while (len(left) or len(right)):
        if (len(left) and len(right)):
            if (left[0] < right[0]):
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))
        elif (len(left)):
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    return result

def merge_sort(list):
    if (len(list) <= 1):
        return list
    
    pivot = len(list) // 2
    left = list[0:pivot]
    right = list[pivot:]

    return merge(merge_sort(left),merge_sort(right))


list = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9,]

result = merge_sort(list)

print(result)