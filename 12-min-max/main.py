def max(list): 
    result = list[0]

    for i in range(1, len(list)):
        if list[i] > result:
            result = list[i]
    
    return result


def min_max(list, m="max"): 
    result = list[0]

    for i in range(1, len(list)):
        if m == "min" and list[i] < result:
            result = list[i]
    
        if m == "max" and list[i] > result:
            result = list[i]

    return result
