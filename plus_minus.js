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
    var n    = parseInt(readLine());
        arr  = readLine().split(' ');
        arr  = arr.map(Number);
    var pos  = 0, neg = 0, zero = 0;
    for (count = 0; count < n; count++) {
        if (arr[count] === 0)
            zero += 1;
        else if 
            (arr[count] > 0)
            pos += 1;
        else 
            neg += 1;
    }
    console.log(pos /  n);
    console.log(neg /  n);
    console.log(zero / n);
}
