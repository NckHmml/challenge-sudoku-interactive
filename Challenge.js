//BEGIN_CHALLENGE
$("#btnSolve").on("click", function () {
    var solution = sudoku.getSolution();
    for (var x = 0; x < 9; x++)
        for (var y = 0; y < 9; y++)
            sudoku.setCell(x, y, solution[x][y]);
});
//END_CHALLENGE