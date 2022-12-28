def longest_increasing_subsequence(n):
    result = 1
    tally = [1]
    
    for i in range(1, len(n)):
        tally += [1]
        for j in range(i):
            lis = tally[j] + 1

            if (n[j] < n[i] and lis > tally[i]):
                tally[i] = lis

                if lis > result:
                    result = lis
                    
    return result

list = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2]

result = longest_increasing_subsequence(list)

print(result)


