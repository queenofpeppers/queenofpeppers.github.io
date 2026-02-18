document.addEventListener("DOMContentLoaded", () => {

  const text = "Queen of Peppers";
  const element = document.querySelector(".brand");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }

  typeWriter();

});
