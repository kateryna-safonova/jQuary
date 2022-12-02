$(document).ready(function () {
  $("#click-button").click(function () {
    console.log(this);
    console.log($(this));
    // (в версии css)если не ставить доллар и не брать в душки this то будет ошибка
    this.style.backgroundColor = "green";
    // (если в версии css) сделать так
    $(this).css("background-color", "green");
  });

  $("#click-button").click((e) => {
    console.log("Jestem w funkcji");
    console.log(this);
    $(e.target).css("color", "red");
  });
});
