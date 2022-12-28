def linear_search(list, n):
    for i in range(len(list)):
        if list[i] == n:
            return f'Found {n} at list[{i}]'
    return 'Not found...'

list = [1, 2, 3, 4, 5]

result = linear_search(list, 5)

print(result)