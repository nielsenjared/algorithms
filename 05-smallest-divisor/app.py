import math 

def smallest_divisor(num):
    if num <= 1:
        return "Enter a number greater than 1"
    elif num % 2 == 0: 
        return "2"
    else:
        r = math.sqrt(num)
        
        d = 3

        while num % d != 0 and d < r:
            d = d + 2
        
        if num % d == 0:
            return d 
        else: 
            return num