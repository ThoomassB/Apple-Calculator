const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Erreur';
      }
    } else if (value === '←') {
        display.value = display.value.slice(0, -1);
    } else if (value === '.') {
        if (!display.value.includes('.')) {
            display.value += value;
        }
        }else if(value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
        const lastChar = display.value[display.value.length - 1];
        const operators = ['+', '-', '*', '/', '%'];
        if (operators.includes(lastChar) && operators.includes(value)) {
            display.value = display.value.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    } else if (value === '+/-') {
        const match = display.value.match(/(-?\d+\.?\d*)$/);
        if (match) {
            const number = match[0];
            const start = display.value.slice(0, -number.length);
            const flipped = number.startsWith('-') ? number.slice(1) : '-' + number;
            display.value = start + flipped;
        }
    }else {
        display.value += value;
    }
 });
});

console.log("JS chargé !");