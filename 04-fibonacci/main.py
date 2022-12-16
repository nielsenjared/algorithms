def fibonacci(n): 
    if (n == 1):
        return 0
    if (n == 2):
        return 1
    
    x = 0
    y = 1
    sum = 0

    for i in range(2, n, 1):
        sum = x + y
        x = y
        y = sum
    
    return sum

result = fibonacci(5)

print(result)

