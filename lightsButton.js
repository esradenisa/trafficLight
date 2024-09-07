    const button = document.getElementById('colorButton');
    const colors = ['red', 'yellow', 'green'];
    let clickCount = 0;

    function changeColor() {
        ++clickCount;
        button.style.backgroundColor = colors[clickCount % colors.length];
    }

    setInterval(changeColor, 10000);
