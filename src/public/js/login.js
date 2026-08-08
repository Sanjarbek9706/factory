console.log("Login frontend javascript file");

function validateLoginForm() {
  const memberNick = $(".member-nick").val(),
    memberPassword = $(".member-password").val();

  if (memberNick === "" || memberPassword === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  return true;
}