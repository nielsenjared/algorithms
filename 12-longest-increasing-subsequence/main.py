def longest_increasing_subsequence(n):
    tally = [1]
    result = 0
    
    for i in range(1, len(n)):
        tally += [1]
        for j in range(i):
            current = tally[j] + 1

            if (n[j] < n[i] and current > tally[i]):
                tally[i] = current

                if current > result:
                    result = current
                    
    return result

list = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2]

result = longest_increasing_subsequence(list)

print(result)


