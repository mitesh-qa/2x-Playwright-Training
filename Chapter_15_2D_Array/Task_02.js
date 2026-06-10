let rows = 6;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i * 2-1);

    console.log(spaces + stars);
}