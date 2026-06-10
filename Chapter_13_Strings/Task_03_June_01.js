
function isPalindrome (name) {
const name1 = name.toLowerCase();
const revname = name1.split('').reverse().join('');

    if(name1 === revname){
        console.log(name + " is palindrome");
    }
    else {
        console.log(name + " is NOT palindrome");
    }
}

isPalindrome("Mitesh");
