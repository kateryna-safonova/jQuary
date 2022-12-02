$(document).ready(function () {
  $("#animate2").click(function () {
    let firstElement = $("p").first();
    let lastElement = $("p").last();
    firstElement.insertAfter(lastElement);
  });
  $("#animate").click(function () {
    let firstElement = $("p").first();
    let lastElement = $("p").last();
    lastElement.insertBefore(firstElement);
  });
});
