x = 123
y = 456

def swap(x, y):
    temp = x
    x = y
    y = temp
    return (x, y)

result = swap(x, y)

print(result)