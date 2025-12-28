// JavaScript untuk animasi hati
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Posisi acak horizontal
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durasi acak
    document.body.appendChild(heart);

    // Hapus hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Buat hati setiap 300ms
setInterval(createHeart, 300);

// Fungsi untuk menampilkan pesan
function showMessage() {
    const message = document.getElementById('message');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
}