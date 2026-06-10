let n = 5;

for (let r = n; r > 0; r--) {

    for (let c = 0; c < r; c++) {

        process.stdout.write(" *");
    }
    console.log(" ");
}