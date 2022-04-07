def sieve(n):
    bools = [True for i in range(n + 1)]
    # bools = [True] * (n + 1)
    bools[0] = False
    bools[1] = False

    primes = []

    for i in range(2, n):
        if bools[i] == True:
            primes.append(i)

        #j = i * 2
        j = i * i

        while j <= n:
            bools[j] = False
            j += i 

    return primes 

result = sieve(100)

print(result)