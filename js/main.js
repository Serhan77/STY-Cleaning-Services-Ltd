// Contact Form

$(".input").focus(function () {
  $(this).parent().addClass("focus");
}).blur(function () {
  if ($(this).val() === '')
    $(this).parent().removeClass("focus");
})

// Accordian

let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // accordian is open
      content.style.maxHeight = null;
    } else {
      // accordian is closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}