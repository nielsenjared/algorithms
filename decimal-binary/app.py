def decimal_binary(num):
    result = ''

    while num > 0:
        result += str(num % 2)
        num = num // 2

    result.split().reverse()

    return ''.join(result)



result = decimal_binary(15)

print(result)