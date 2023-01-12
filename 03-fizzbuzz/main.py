def fizz_buzz(n):
    for i in range(n):
        if ((i % 3 == 0) and (i % 5 == 0)):
            print(i, "Fizz Buzz")
        elif (i % 3 == 0):
            print(i, "Fizz")
        elif (i % 5 == 0):
            print(i, "Buzz")
        else:
            print(i)

result = fizz_buzz(100)

print(result)