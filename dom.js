const body = document.querySelector('body');
const button = document.querySelector('button');

function change() {
 // Kita cek: "Apakah background saat ini putih?"
    if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
        // Jika iya (atau masih kosong), kita buat jadi Dark Mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.style.backgroundColor = 'white'; 
        button.style.color = 'black';
    } else {
        // Jika ternyata sudah hitam, kita kembalikan ke Light Mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
}