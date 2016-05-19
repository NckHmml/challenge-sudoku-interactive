# Interactive Sudoku Challenge
The goal of this challenge is to solve given 3 sudoku puzzles.

## Challenge Description
A sudoku is type of puzzle made out of 9x9 (81) numbers/cells which is considered to be further divided into 9 sets of 3x3 matrix.

i.e Sudoku puzzle can be viewed as matrix is 9x9.
- Rows are counted from top to bottom.
- Rows are horizontal, counted vertically, defined by ``y``.
- Columns are counted from left to right.
- Columns are counted horizontally, defined by ``x``

[Sudoku Puzzle](https://en.wikipedia.org/wiki/Sudoku)

### Provided functionality
The function required to solve the puzzle is provided in [Sudoku.js](public/Sudoku.js)
- ``sudoku.$this`` a reference to the jQuery object containing the puzzle.
- ``sudoku.rows`` a list of rows in the puzzle.
- ``sudoku.cells`` a list of all cells in the puzzle.
- ``sudoku.setCell(x, y, value)`` sets the cell on x,y to the value provided.
- ``sudoku.getCell(x, y)`` gets the value of a cell on the x,y provided.
- ``sudoku.setPuzzle(id)`` sets the puzzle to the id provided.
    - possible ids are 1, 2 or 3.
- ``sudoku.getSolution()`` gets the solution of the current puzzle.
    - returns an array of cell(x, y) = solution[x][y]. 
    - For example for x = 1 and y = 2, solution[1][2] contains the answer for that cell.
- ``sudoku.clearPuzzle()`` clears the puzzle of values.

**Note:** You can use [Challenge.js](public/Challenge.js) to solve the challenge

### Test Results *before* solving the challenge  
Initially all the tests will fail with following output
```
codecheck: Finish with code 1
codecheck: tests  : 1
codecheck: success: 0
codecheck: failure: 1
```

### Test Results *after* solving the challenge
Solve the challenge to pass the tests
```
codecheck: Finish with code 0
codecheck: tests  : 1
codecheck: success: 1
codecheck: failure: 0
```

--- --- ---

## Run Tests
To run tests locally install codecheck in local environment by running following command in terminal.
```
$ npm install codecheck -g
```
To run tests locally, run `codecheck` command in terminal in the root folder
To run tests in web editor please click on `RUN` button on left side of web editor

## Explain your code
In [answer.md](answer.md) write a brief explanation
- About how your code works
- Problems faced while solving the challenge
- How you solved those problems

## Optional
The solution for this challenge is relatively simple, you can show off your skills in this challenge. For example you could add some cool animations or show more information while the puzzle is being solved.

When adding animations, please make sure these do not take more time than roughly 2 seconds.

For more advanced users it is possible to override the original code to either improve it or add additional functionality, while we would encourage this, please be careful not to break any of the existing functionality.