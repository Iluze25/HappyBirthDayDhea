 const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50); // Ubah angka ini untuk kecepatan ketik
    }
  }

  typeEffect(); // Mulai efek ketik