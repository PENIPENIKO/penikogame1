const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;

    const messageElement = document.getElementById('message');

    if (isNaN(guess)) {
        messageElement.textContent = '数字を入力してください。';
    } else if (guess < secretNumber) {
        messageElement.textContent = 'もっと大きいです！';
    } else if (guess > secretNumber) {
        messageElement.textContent = 'もっと小さいです！';
    } else {
        messageElement.textContent = `正解です！${attempts}回で当てました！`;
        document.getElementById('submit').disabled = true;
    }
});
