// Fungsi untuk scroll ke bagian tertentu dengan smooth
function scrollToSection(id) {
  const section = document.getElementById(id);
  window.scrollTo({
    top: section.offsetTop - 60, // Offset untuk header
    behavior: "smooth",
  });
}

// Efek Parallax pada background
let parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function () {
  let scrollPosition = window.pageYOffset;
  parallax.forEach(function (el) {
    let speed = el.getAttribute("data-speed");
    el.style.transform = "translateY(" + scrollPosition * speed + "px)";
  });
});

// Ambil tombol
const backToTopBtn = document.getElementById("backToTopBtn");

// Menampilkan tombol saat pengguna menggulir ke bawah
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block"; // Tampilkan tombol
  } else {
    backToTopBtn.style.display = "none"; // Sembunyikan tombol
  }
};

// Fungsi untuk menggulir kembali ke atas
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Efek smooth scroll
  });
}
