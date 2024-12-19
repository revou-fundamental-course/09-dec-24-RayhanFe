// ini Javascript
console.log('javascript berhasil tersambung');

let indexSlide = 0;

// Fungsi untuk menvalidasi
function validateForm() {
    const usernameInput = document.getElementById('username-input').value;
    console.log(usernameInput);

    // validasi jika nama tidak kosong 
    if (usernameInput === '') {
        alert('tidak boleh kosong');
    } else {
        document.getElementById('username-result').innerHTML = usernameInput;
    }

    console.log('validateForm executed');
}

function nextSlide() {
    showBanner(indexSlide += 1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');

    console.log(imageList);

    // Jika indeks lebih besar atau sama dengan jumlah gambar, reset ke gambar pertama
    if (n >= imageList.length) indexSlide = 0;

    // Menyembunyikan semua gambar banner
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    // Menampilkan banner sesuai posisi yang diinginkan
    imageList[indexSlide].style.display = "block";  // Menggunakan indeks yang benar
}

setInterval(nextSlide, 3000);