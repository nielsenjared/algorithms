def permutations(n):
    perms = []

    if (len(n) == 1):
        return [n]
    
    for i in range(len(n)):
        current = [n[i]]

        head = n[:i]
        tail = n[i+1:]
        shorty = head + tail

        remainder = permutations(shorty)

        for j in range(len(remainder)):
            perm = current + remainder[j]
            perms.append(perm)
        
    return perms

list = [1, 2, 3]

result = permutations(list)

print(result)
