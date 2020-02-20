# Run The Code

Clone this github repository and run `npm start`. If you're not using npm, you can [download it easily here](https://www.npmjs.com/get-npm). 

Alternatively, you can clone this github repository and explicitly exectue the program with this command `node logic.js`

# Output

The `input.txt` file resides in the same directory as your executable program.

Default input file

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
After parsing the input.txt file, the program will print the results to the terminal via `console.log()` 

```
A final Roomba position of X: 1  and Y: 3  with cleanedDirtPatches: 1
```

# Designing the project

My goal was to keep this project functional with isolated components or methods that take very specific actions. My thinking is that this will make the project more readable and make isolating an issue easier. Made an effort to consider each of these pillars:

* Code organisation
* Quality
* Readability
* Actually solving the problem
