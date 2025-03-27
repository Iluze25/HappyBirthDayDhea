// Tentukan tanggal dan waktu tujuan (misal: 1 April 2025, pukul 12:00)
const targetDate = new Date("Maret 30, 2025 00:00:00").getTime();

// Update countdown setiap 1 detik
const interval = setInterval(function() {
const now = new Date().getTime();
const distance = targetDate - now;

if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "Waktu telah habis!";
    return;
}

// Hitung hari, jam, menit, dan detik
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Tampilkan countdown
document.getElementById("countdown").innerHTML =
    days + " day " + hours + " hour " + minutes + " minute " + seconds + " second ";
}, 1000);



