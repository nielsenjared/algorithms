# Bit Ladder

Convert the binary word 000 into the binary word 100 in 7 steps or less. You must only change one bit of the word on each step.

You may only use 1s and 0s.

A bit of computational thinking wisdom

Bit ladders that end up back where they started, cycling through all of a sequence of ‘words’ by changing one symbol at a time, are also known as Gray codes. They are important as a different way to represent numbers in binary, giving a way of ‘counting’ through all the numbers by changing one bit at a time. This
matters in devices that have mechanical switches like the early telegraph. The mechanism that flips bits won’t change different ones at exactly the same time, so you could falsely register the wrong number midchange if more than one needs to change at once. Gray codes avoid the problem.

0 0 0
- - -
- - -
- - -
- - -
- - -
- - -
1 0 0

## Source

https://cs4fndownloads.files.wordpress.com/2016/02/cs4fnpuzzlebook11.pdf
