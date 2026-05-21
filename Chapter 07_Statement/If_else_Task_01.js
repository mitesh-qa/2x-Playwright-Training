/*   TASK 01
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid

*/

let httpStatusCode = 200;

if (httpStatusCode >= 200 && httpStatusCode <= 299){
    console.log("Success");
}
else if (httpStatusCode >= 300 && httpStatusCode <= 399){
    console.log("Redirection Error");
}
else if (httpStatusCode >= 400 && httpStatusCode <= 499){
    console.log("Client Error");
}
else if (httpStatusCode >= 500 && httpStatusCode <= 599){
    console.log("Server Error");
}
else {
    console.log("Invalid URL");
}