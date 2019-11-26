let squares = document.getElementsByClassName('squares');
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let first_raw = Array(first, second, third);
let second_raw = Array(fourth, fifth, six);
let third_raw = Array(seven, eight, nine);
let left_raw = Array(first, fourth, seven);
let middle_raw = Array(second, fifth, eight);
let right_raw = Array(third, six, nine);
let first_q = Array(third, fifth, seven);
let second_q = Array(first, fifth, nine);
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dblclick', function Ow(e) {
        window.resizeTo(0,0);
        e.preventDefault();
        squares[i].innerText = "O";
        squares[i].style.fontSize = "50px";
        squares[i].style.textAlign = "center";
        squares[i].style.padding = "25px 0 0 0";
        if (first_raw[0].innerText == 'O' && first_raw[1].innerText == 'O' &&
            first_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < first_raw.length; i++) {
                first_raw[i].innerText = '';

            }
        }
        if (second_raw[0].innerText == 'O' && second_raw[1].innerText == 'O' &&
            second_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < second_raw.length; i++) {
                second_raw[i].innerText = '';

            }
        }
        if (third_raw[0].innerText == 'O' && third_raw[1].innerText == 'O' &&
            third_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < third_raw.length; i++) {
                third_raw[i].innerText = '';

            }
        }
        if (left_raw[0].innerText == 'O' && left_raw[1].innerText == 'O' &&
            left_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < left_raw.length; i++) {
                left_raw[i].innerText = '';

            }
        }
        if (middle_raw[0].innerText == 'O' && middle_raw[1].innerText == 'O' &&
            middle_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < middle_raw.length; i++) {
                middle_raw[i].innerText = '';

            }
        }
        if (right_raw[0].innerText == 'O' && right_raw[1].innerText == 'O' &&
            right_raw[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < right_raw.length; i++) {
                right_raw[i].innerText = '';

            }
        }
        if (first_q[0].innerText == 'O' && first_q[1].innerText == 'O' &&
            first_q[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < first_q.length; i++) {
                first_q[i].innerText = '';

            }
        }
        if (second_q[0].innerText == 'O' && second_q[1].innerText == 'O' &&
            second_q[2].innerText == 'O') {
            alert('Plyaer With [ O ] Win');
            for (let i = 0; i < second_q.length; i++) {
                second_q[i].innerText = '';

            }
            }
    }, false);
    squares[i].addEventListener('click', function cross(e) {
        e.preventDefault();
        squares[i].innerText = "X";
        squares[i].style.fontSize = "50px";
        squares[i].style.textAlign = "center";
        squares[i].style.padding = "25px 0 0 0";
        if (first_raw[0].innerText == 'X' && first_raw[1].innerText == 'X' &&
            first_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < first_raw.length; i++) {
                first_raw[i].innerText = '';
                
            }
        }
        if (second_raw[0].innerText == 'X' && second_raw[1].innerText == 'X' &&
            second_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < second_raw.length; i++) {
                second_raw[i].innerText = '';

            }
        }
        if (third_raw[0].innerText == 'X' && third_raw[1].innerText == 'X' &&
            third_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < third_raw.length; i++) {
                third_raw[i].innerText = '';

            }
        }
        if (left_raw[0].innerText == 'X' && left_raw[1].innerText == 'X' &&
            left_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < left_raw.length; i++) {
                left_raw[i].innerText = '';

            }
        }
        if (middle_raw[0].innerText == 'X' && middle_raw[1].innerText == 'X' &&
            middle_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < middle_raw.length; i++) {
                middle_raw[i].innerText = '';

            }
        }
        if (right_raw[0].innerText == 'X' && right_raw[1].innerText == 'X' &&
            right_raw[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < right_raw.length; i++) {
                right_raw[i].innerText = '';

            }
        }
        if (first_q[0].innerText == 'X' && first_q[1].innerText == 'X' &&
            first_q[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < first_q.length; i++) {
                first_q[i].innerText = '';

            }
        }
        if (second_q[0].innerText == 'X' && second_q[1].innerText == 'X' &&
            second_q[2].innerText == 'X') {
            alert('Plyaer With [ X ] Win');
            for (let i = 0; i < second_q.length; i++) {
                second_q[i].innerText = '';

            }
        }
    }, false);

}




