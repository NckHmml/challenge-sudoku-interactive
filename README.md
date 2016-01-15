# Interactive Sudoku Challenge
In this challenge you will be ask to complete an application that is capable of solving a sudoku puzzle.
The code needed to solve the puzzle is provided and only the final piece of code is missing, which is displaying the solution into the puzzle.

The goal of this challenge is to finish the application so it works and shows the solution of the 3 puzzles provided.

The optional goal of this challenge is to improve and/or add functionality.

## Provided functionality
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

## Information
A sudoku is made out of 81 (9x9) numbers which are within 1 square called the field or puzzle. The field has 9 rows each containing 9 cells.

- Rows are counted from top to bottom.
- Rows are horizontal, counted vertically, defined by ``y``.
- Cells are counted from left to right.
- Cells are counted horizontally, defined by ``x``

When adding animations, please make sure these do not take more time than roughly 2 seconds.

## Optional
As the solution for this challenge is relatively simple, we encourage to show off some of your skills in this challenge. For example you could add some cool animations or show more information while the puzzle is being solved.

We provide ``Challenge.js`` and ``Challenge.css`` which can be edited to your liking.

For the more advanced users it is also possible to override the original code to either improve it or add additional functionality, while we would also encourage this, please be careful not to break any of the existing functionality. 