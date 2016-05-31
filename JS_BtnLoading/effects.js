var id, loaded, parentElem, canvas, ctx, wth, vh, i = 1;
var ltBar = document.querySelector('.leftBar');
var rtBar = document.querySelector('.rightBar');
var ltProgress = document.querySelector('#progressLt');
var rtProgress = document.querySelector('#progressRt');

function drawCanvasIcon(slctr) {
    "use strict";
    canvas = document.querySelector(slctr);
    ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(9, 17);
    ctx.lineTo(17, 2);
    ctx.lineWidth = '3';
    ctx.strokeStyle = '#0000ff';
    ctx.stroke();
}

function moveLeftBar() {
    "use strict";
    
    loaded = document.createElement('p');
    loaded.className = 'loaded';
    parentElem = document.querySelector('#progressLt');
    
    function finalize() {
        parentElem.removeChild(loaded);
        ltBar.style.backgroundColor = '#00ff00';
        ltProgress.style.animation = 'biggerH 1s forwards';
        setTimeout(function () {
            ltBar.style.width = '100%';
            ltBar.innerHTML = 'SUBMIT';
            ltBar.style.animation = 'fadeIn 3s forwards';
            document.querySelector('#drawLt').style.display = 'inline';
            drawCanvasIcon('#drawLt');
        }, 1000);
    }
    
    ltProgress.style.animation = 'smallerH 1s forwards';
    ltBar.style.animation = 'fadeOut 1s';
    ltBar.innerHTML = '';
    document.querySelector('#drawLt').style.display = 'none';
    
    setTimeout(function () {
        ltBar.style.opacity = '1';
        ltBar.style.backgroundColor = '#099909';
        wth = 0;
        id = setInterval(function () {
            if (wth >= 100) {
                clearInterval(id);
                setTimeout(function () {
                    finalize();
                }, 200);
            } else {
                wth += 1;
                ltBar.style.width = wth + '%';
                loaded.innerHTML = wth + '%';
                parentElem.appendChild(loaded);
            }
        }, 15);
    }, 1100);
    
}

function moveRightBar() {
    "use strict";
    
    loaded = document.createElement('p');
    loaded.className = 'loaded';
    parentElem = document.querySelector('#progressRt');
    
    function finalize() {
        parentElem.removeChild(loaded);
        rtBar.style.backgroundColor = '#ff0000';
        rtProgress.style.animation = 'biggerW 1s forwards';
        setTimeout(function () {
            rtBar.style.height = '100%';
            rtBar.innerHTML = 'SUBMIT';
            rtBar.style.animation = 'fadeIn 3s forwards';
            document.querySelector('#drawRt').style.display = 'inline';
            drawCanvasIcon('#drawRt');
        }, 1000);
    }
    
    rtProgress.style.animation = 'smallerW 1s forwards';
    rtBar.style.animation = 'fadeOut 1s';
    rtBar.innerHTML = '';
    document.querySelector('#drawRt').style.display = 'none';
    
    setTimeout(function () {
        rtBar.style.opacity = '1';
        rtBar.style.backgroundColor = '#7e2020';
        wth = 100;
        vh = 0;
        id = setInterval(function () {
            if (wth <= 0) {
                clearInterval(id);
                setTimeout(function () {
                    finalize();
                }, 200);
            } else {
                wth -= 1;
                vh += 1;
                rtBar.style.height = wth + '%';
                loaded.innerHTML = vh + '%';
                parentElem.appendChild(loaded);
            }
        }, 15);
    }, 1100);
    
}

document.querySelector('.leftBar').onclick = moveLeftBar;
document.querySelector('.rightBar').onclick = moveRightBar;