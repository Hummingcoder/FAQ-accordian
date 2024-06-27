const ques = document.querySelectorAll(".ques");

ques.forEach((item) => {
  item.addEventListener("click", () => {
    ans = item.nextElementSibling;
    if (window.getComputedStyle(ans).height === "0px") {
      ans.style.height = `${ans.scrollHeight}px`;
      item.getElementsByTagName("img")[0].src = "assets/images/icon-minus.svg";
    } else {
      ans.style.height = `0px`;
      item.getElementsByTagName("img")[0].src = "assets/images/icon-plus.svg";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  ques[0].nextElementSibling.style.height = `85px`;
});
