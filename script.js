let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimale = document.getElementById('decimal'),
    clearBths = document.querySelectorAll('.clear-btn'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operatorBth = operations[i];
    operatorBth.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};

for (let i = 0; i < clearBths.length; i++) {
    let clearBth = clearBths[i];
    clearBth.addEventListener('click', function (e) {
        clear(e.srcElement.id)
    });
};


decimale.addEventListener('click', decimal);
resultBtn.addEventListener('click', result);

function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function operation(op) {
    let localOrepationMemory = display.value;
    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOrepationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOrepationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOrepationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOrepationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOrepationMemory);
        };
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
};

function decimal(argument) {
    let localDecimalmemory = display.value;

    if (MemoryNewNumber) {
        localDecimalmemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalmemory.indexOf('.') === -1) {
            localDecimalmemory += '.';
        };
    };
    display.value = localDecimalmemory
};

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    };
    console.log('klik po knopke ' + id + '!');
};

