var sudoku; // Global Entrypoint

// Array clone functionality
Array.prototype.clone = function () {
    var copy = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
        if (this[i].clone) {
            copy[i] = this[i].clone();
        } else {
            copy[i] = this[i];
        }
    }
    return copy;
}

$(function () {
    /* Private Objects */
    var $this = $("#SudokuField"),
        solution = [],
        puzzles = [
            "000000000009805100051907420290401065000000000140508093026709580005103600000000000",
            "003020600900305001001806400008102900700000008006708200002609500800203009005010300",
            "904200007010000000000706500000800090020904060040002000001607000000000030300005702"
        ],
        blocks, possibilities;

    /* Private Functions */
    // Main solving function 
    function recursiveSolve(x, y) {
        // Move to the next position if already set
        while (blocks[x][y] != 0) {
            if (++y >= 9) {
                y = 0;
                if (++x >= 9)
                    return true;
            }
        }

        var tx, ty; // Temp position holders

        // Loop through possible values
        for (var val = 1; val <= 9; val++) {
            if (possibilities[x][y][val - 1]) {
                // Save the buffer
                var clone = possibilities.clone();

                // Set move
                setBlock(x, y, val);

                // Move to the next position
                tx = x;
                ty = y;
                if (++ty >= 9) {
                    ty = 0;
                    if (++tx >= 9)
                        return true;
                }

                // Go one level deeper
                if (recursiveSolve(tx, ty)) {
                    return true;
                } else {
                    // Reset
                    possibilities = clone;
                    blocks[x][y] = 0;
                }
            }
        }

        return false;
    }

    // Set a move in the buffers 
    function setBlock(x, y, val) {
        blocks[x][y] = val;

        // Rows
        for (var ix = 0; ix < 9; ix++)
            possibilities[ix][y][val - 1] = false;

        // Columns
        for (var iy = 0; iy < 9; iy++)
            possibilities[x][iy][val - 1] = false;

        // Cell
        var startx = x - (x % 3),
            starty = y - (y % 3);
        for (var ix = startx; ix < startx + 3; ix++) {
            for (var iy = starty; iy < starty + 3; iy++)
                possibilities[ix][iy][val - 1] = false;
        }
    }

    // Get the current values
    function setBlocks() {
        // Construct the block buffer
        blocks = [];
        for (var ix = 0; ix < 9; ix++) {
            blocks.push([]);
            for (var iy = 0; iy < 9; iy++) {
                var val = sudoku.cells[ix + iy * 9].innerHTML;
                if (val == '')
                    val = '0';
                blocks[ix].push(parseInt(val));
            }
        }
    }

    // Get all possible values
    function setPossibilities() {
        // Construct the possibilities buffer
        possibilities = [];
        for (var ix = 0; ix < 9; ix++) {
            possibilities.push([]);
            for (var iy = 0; iy < 9; iy++) {
                possibilities[ix].push([]);
                for (var val = 1; val <= 9; val++) {
                    possibilities[ix][iy].push(true);
                }
            }
        }

        // Iterate through all possible x,y and val
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                if (blocks[x][y] !== 0) {
                    // Val already set, clear it
                    for (var val = 1; val <= 9; val++) {
                        possibilities[x][y][val - 1] = false;
                    }
                    continue;
                }
                for (var val = 1; val <= 9; val++) {
                    // Checks if a value is possible, else set it false
                    possibilities[x][y][val - 1] =
                        checkRow(blocks, x, y, val) &&
                        checkColumn(blocks, x, y, val) &&
                        checkCell(blocks, x, y, val);
                }
            }
        }
    }

    // Row check
    function checkRow(blocks, x, y, val) {
        for (var ix = 0; ix < 9; ix++) {
            if (x === ix) continue;
            if (blocks[ix][y] == val)
                return false;
        }
        return true;
    }

    // Column check
    function checkColumn(blocks, x, y, val) {
        for (var iy = 0; iy < 9; iy++) {
            if (y === iy) continue;
            if (blocks[x][iy] == val) return false;
        }
        return true;
    }

    // Cell check
    function checkCell(blocks, x, y, val) {
        var startx = x - (x % 3);
        var starty = y - (y % 3);

        for (var ix = startx; ix < startx + 3; ix++) {
            for (var iy = starty; iy < starty + 3; iy++) {
                if (y === iy && x == ix) continue;
                if (blocks[ix][iy] == val) return false;
            }
        }
        return true;
    }

    // Set Global Entrypoint
    sudoku = {
        /* Public Objects */
        $this: $this,
        rows: $this.find("tr"),
        cells: $this.find("td"),

        /* Public Functions */
        setCell: function (x, y, value) {
            $(this.cells[x + y * 9]).html(value);
        },
        getCell: function (x, y) {
            return $(this.cells[x + y * 9]).html();
        },
        setPuzzle: function (id) {
            this.clearPuzzle();

            id--;
            if (id < 0 || id > puzzles.length)
                id = 0;

            for (var i = 0; i < puzzles[id].length; i++) {
                var x = i % 9,
                    y = (i - x) / 9;
                if (puzzles[id][i] != 0)
                    this.setCell(x, y, puzzles[id][i]);
            }
        },
        getSolution: function () {
            if (solution.length == 0) {
                setBlocks();
                setPossibilities();
                if (recursiveSolve(0, 0))
                    solution = blocks;
            }
            return solution;
        },
        clearPuzzle: function () {
            solution = [];
            $.each(this.cells, function () {
                $(this).html('');
            });
        }
    };
});