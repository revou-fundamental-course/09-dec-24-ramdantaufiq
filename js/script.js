// This is JS
console.log("Javascript has been connected");

// Username Validation
let yourName = document.getElementById("your-name")

document.getElementById("send").addEventListener("click", function() {
    const name = yourName.value

    document.getElementById("your-name").innerHTML = name
    console.log(name)

    if (name == "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!"
    } else {
        document.getElementById("error-name").innerHTML = ""
    }
})

// User-Email Validation
let yourEmail = document.getElementById("your-email");

document.getElementById("send").addEventListener("click", function() {
  const email = yourEmail.value;

  // Basic validation for empty input
  if (email === "") {
    document.getElementById("error-email").innerHTML = "Email tidak boleh kosong!";
    return;
  }

  // Regular expression for stricter email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    document.getElementById("error-email").innerHTML = "Masukkan alamat email yang valid (contoh: [alamatemail@gmail.com])";
  } else {
    document.getElementById("error-email").innerHTML = "";

    // Proceed with other actions, like sending the email
    document.getElementById("your-name").innerHTML = email;
    console.log(email);
  }
});

// Banner Auto Slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // satuannya dalam ms, jadi per 3 detik akan autosliding
}
