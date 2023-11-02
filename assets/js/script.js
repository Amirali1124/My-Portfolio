
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show")
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden-right');
hiddenElements.forEach((el) => observer.observe(el));

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show")
    }
  });
});

function scrollToTop() {
  window.scroll(0, 0)
}



const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));

function show_menu() {
  $('#show_menuitems').addClass('active');
}

function hide_menu() {
  $('#show_menuitems').removeClass('active');
}
// --------------------------------------

$(document).ready(function () {
  const hiddenDiv = $('.hidden');
  const content = $('#about');

  $(window).scroll(function () {
    const contentRect = content[0].getBoundingClientRect();
    const scrollPosition = $(window).scrollTop();

    // Calculate when to show the hidden div
    if (scrollPosition > contentRect.top) {
      hiddenDiv.show();
    } else {
      hiddenDiv.hide();
    }
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
  });
});




var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



function sendMail() {
  var userName = $("#name").val()
  var email = $("#email").val()
  var subject = $("#subject").val()
  var message = $("#msg").val()

  // Regular expression to validate email format
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (userName.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert("قیلد های خالی را پر کنید");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("ایمیل وارد شده اشتباه است.");
    return;
  }

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("msg").value

  };

  const serviceID = "service_xrjyxae";
  const templateID = "template_e7k324n";
  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("msg").value = "";
      console.log(res);
      alert("ایمیل شما ارسال شد. بزودی پاسخ می‌دهم")
    })
    .catch((err) => console.log(err));

}

// --------------------------------------
