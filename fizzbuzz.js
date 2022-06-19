const judul = document.getElementById("judul");
judul.style.color = 'darkcyan';
judul.style.fontFamily = 'Segoe UI';
judul.style.marginBottom = '30px';
judul.style.textAlign = 'center';
judul.style.fontWeight = 'bold';
judul.style.fontSize = '40px';

const subjudul = document.getElementsByTagName('h2')[0];
subjudul.style.color = '#e6942a';
subjudul.style.textAlign = 'center';
subjudul.style.marginBottom = '20px';
subjudul.style.fontSize = '30px';

const input = document.getElementById('input');
input.style.marginBottom = '20px';
input.style.textAlign = 'center';

const isian = document.getElementById('getnumber');
isian.style.fontSize = '20px';
isian.style.width = '16rem';
isian.style.textAlign = 'center';

const hasil = document.getElementsByTagName('h2')[1];
hasil.style.color = 'red';
hasil.style.textAlign = 'center';
hasil.style.fontSize = '25px';

function fizzbuzz() {
    let text;
    text=document.getElementById('getnumber').value
    if ((text % 3 === 0) && (text % 5 === 0)) {
        text='FizzBuzz';
    } else if (text % 3 === 0) {
        text='Fizz';
    } else if (text % 5 === 0) {
        text='Buzz';
    } else if (text === 0) {
        text='Invalid';  
    }
    document.getElementById('result').innerHTML=text;
    console.log(document.getElementById('getnumber').value)
}