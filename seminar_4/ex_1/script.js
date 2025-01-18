/**
 *
 * @param {String} message - Message for user
 * @param {int} delay - time in milliseconds after which the message will be sent to the console
 */
function delayedMessage(message, delay) {
    setTimeout(function timeout() {
        console.log(message);
    }, delay);
}

delayedMessage("Сообщение 2000 миллисекудн", 2000);
delayedMessage("Сообщение 1000 миллисекудн", 1000);
delayedMessage("Сообщение 3000 миллисекудн", 3000);
console.log("The end program");
