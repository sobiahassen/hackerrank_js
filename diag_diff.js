process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    var maj_dig = 0;
    var min_dig = 0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j)
                maj_dig += a[i][j];
            if (i + j === n - 1)
                min_dig += a[i][j];
        } 
    }
    console.log(Math.abs(maj_dig - min_dig));
}
