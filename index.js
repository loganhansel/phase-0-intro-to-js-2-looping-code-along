// Code your solutions in this file

const thankYouMessages = [];

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

function countDown(n) {
    while (n >= 0) {
    console.log(n);
    n--;
    }
}