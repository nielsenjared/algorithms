def decimal_hexadecimal(num):
    digits = '0123456789ABCDEF'

    result = ''

    while num > 0:
        result += digits[num % 16]
        num = num // 16

    return ''.join(reversed(result))


result = decimal_hexadecimal(2047)

print(result)