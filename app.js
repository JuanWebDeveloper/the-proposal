let negative = document.getElementById("negative");
let affirmative = document.getElementById("affirmative");
let type = "";
let left = "";
let mobile_resolution = false;

if (window.matchMedia("(max-width: 767px)").matches) {
  type = "click";
  mobile_resolution = true;
} else {
  type = "mouseover";
}

negative.addEventListener(type, () => {
  if (mobile_resolution) {
    negative.style.left = Math.floor(Math.random() * (40 - 5 + 1) + 5) + "%";
  } else {
    negative.style.left = Math.floor(Math.random() * (85 - 5 + 1) + 5) + "%";
  }

  negative.style.position = "absolute";
  negative.style.top = Math.floor(Math.random() * (90 - 5 + 1) + 5) + "%";
});

affirmative.addEventListener("click", () => {
  let quoteAlert = () => {
    Swal.fire({
      title: "<h2>I promise not to disappoint you this time my life.</h2>",
      html: '<p class="alertSendForm">Lets leave the past behind and build a beautiful future together 💛</p>',
      confirmButtonText: "Enviar",
      backdrop: true,
      showCloseButton: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: false,
      customClass: "swal-wide",
      showConfirmButton: false
    });
  };

  quoteAlert();
});
