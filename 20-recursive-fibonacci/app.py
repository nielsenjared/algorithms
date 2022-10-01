def fibonaive(n):
    if (n ==0) or (n == 1):
        return n
    
    return fibonaive(n - 1) + fibonaive(n - 2)



result = fibonaive(5)

print(result)