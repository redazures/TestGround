# What is the largest prime factor of the number 600851475143 ?

value = 600851475143
largest = Math.sqrt(value).to_i

puts largest

def is_prime(num)
    (2..(num - 1)).each do |n|
      return false if num % n == 0
    end
    true
end

i = 2

prime =0
while i < largest  do
   if value%2==0
        i=i+1
        next
   else
        remainder = value%(i)
        if remainder==0 && is_prime(i)
            prime=i
        end
        i=i+1
   end
end

puts prime

#using ruby to solve  a prime number