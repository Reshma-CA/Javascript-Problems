limit = int(input("enter the number limit:"))
array = []

print("Enter the numbers:")
for i in range(limit):
   num = int(input())
   array.append(num)

for i in range(limit):
   for j in range(i+1,limit):
      if(array[i]<array[j]):
         temp = array[i]
         array[i] = array[j]
         array[j] =temp

print("Descending order",array)
         
         
         