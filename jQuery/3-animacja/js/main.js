$(document).ready(function () {
  $("#count-sum").click(function () {
    const spanSalary = $(".salary");
    let result = 0;

    spanSalary.each((salary) => {
      //    console.log(spanSalary[salary]);
      let salaryNumber = +spanSalary[salary].innerText;
      result += salaryNumber;
    });
    console.log(result);
    $("#sum").text(result);

    console.log($("#sum").text());
  });
});
