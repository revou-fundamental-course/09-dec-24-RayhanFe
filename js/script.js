// ini Javascript
console.log('javascript berhasil tersambung');

let indexSlide = 0;


    // Fungsi validasi form
    function validateForm(event) {

        // ambil elemen form 
        const form = document.getElementById('myForm');

        // Ambil nilai dari inputan form
        const usernameInput = document.getElementById('username-input').value;
        const emailInput = document.getElementById('email-input').value.trim();
        const destinationInput = document.getElementById('destination').value;

        // Validasi jika nama tidak kosong
        if (usernameInput === '') {
            alert('Username tidak boleh kosong');
            event.preventDefault();  // Mencegah form untuk disubmit
            return; 
        }
        
        // Validasi jika email tidak kosong
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput)) {
            alert('Format email tidak valid. Contoh: example@mail.com');
            event.preventDefault();
            return;
        }

        // Validasi jika destinasi dipilih
        if (destinationInput === '') {
            alert('Tolong pilih destinasi');
            event.preventDefault(); 
            return;
        }


        // Pesan untuk debugging
        console.log('validateForm executed');
        alert('Data Anda sudah terkirim');

        // form reset setelah validasi berhasil
        form.reset();
    
    }

    // Menambahkan event listener pada form untuk memanggil fungsi validasi saat submit
    document.getElementById('myForm').addEventListener('submit', validateForm);


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
