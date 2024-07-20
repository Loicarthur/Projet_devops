function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    fetch(`/calculate?expression=${encodeURIComponent(display.value)}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                display.value = 'Error';
            } else {
                display.value = data.result;
            }
        });
}
