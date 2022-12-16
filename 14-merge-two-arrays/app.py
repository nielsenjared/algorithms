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

odds = [1, 3, 5, 7, 9]

eves = [2, 4, 6, 8, 10]

result = merge(odds, eves)

print(result)
