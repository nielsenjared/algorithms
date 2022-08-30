import math

powers = [1, 2, 4, 8 ,16, 32, 64, 128, 256, 512]
 
def binarySearch(arr, num):
 
   startIndex = 0
   endIndex = len(arr)-1
  
   while (startIndex <= endIndex):
      
       pivot = math.floor((startIndex + endIndex)/2)
 
       if (arr[pivot] == num):
            return f"Found {num} at index {pivot}"
       elif (arr[pivot] < num):
           startIndex = pivot + 1
       else:
           endIndex = pivot - 1

   return false

result = binarySearch(powers, 256)

print(result)