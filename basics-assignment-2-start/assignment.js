const task3Element = document.getElementById('task-3');

function funcBir() {
    alert('Hi!');
}

task3Element.addEventListener('click', funcBir)

function funcIki(name) {
    alert('Hi' + name);
}

funcIki(name = ' Mustafa');

function funcUc(bir, iki, uc) {
    const combine = `${bir} ${iki} ${uc}`;
    return combine;
}

const combineString = funcUc('Merhaba', 'Benim adim', 'Mustafa!');
alert(combineString);