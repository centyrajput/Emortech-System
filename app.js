$(document).ready(function () {
  $("#submit_button").on("click", function () {
    var pswrd = $("input[name=password]").val();
    var cnpswrd = $("input[name=confirm_password]").val();
    if (pswrd != cnpswrd) {
      $("#confirm_password").addClass("active_error");
      $("#errormsg").html("<p>password do not match</p>");
    } else {
      $("#main_body").html(
        '<div class="f1"><h1>Password Changed</h1><br><p>Your password has been updated! Now Get Back <br> in the driver seat, racers are wating for you!</p><button>JOIN A RACE</button></div>'
      );
    }
  });
});
