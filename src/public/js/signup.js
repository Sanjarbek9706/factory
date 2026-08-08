console.log("Signup frontend javascript file");

$(function () {
  const fileTarget = $(".file-box .upload-hidden");

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadedFile = $(this)[0].files[0];
      
      if (!uploadedFile) return;

      const fileType = uploadedFile["type"],
        validImageType = ["image/jpeg", "image/jpg", "image/png"];

      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg, and png!");
        // Rasm turi xato bo'lsa inputni tozalash
        $(this).val("");
        $(this).siblings(".upload-name").val("Choose image");
      } else {
        console.log(URL.createObjectURL(uploadedFile));
        
        // Tanlangan rasmni ko'rsatish (Preview)
        $(".upload-img-frame")
          .attr("src", URL.createObjectURL(uploadedFile))
          .addClass("success");

        // Fayl nomini inputga yozish
        const fileName = uploadedFile.name;
        $(this).siblings(".upload-name").val(fileName);
      }
    }
  });
});

// Formani yuborishdan oldin tekshirish
function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPhone = $(".member-phone").val(),
    memberPassword = $(".member-password").val(),
    confirmPassword = $(".confirm-password").val();

  // Barcha majburiy maydonlar to'ldirilganligini tekshirish
  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Parollarning mosligini tekshirish
  if (memberPassword !== confirmPassword) {
    alert("Passwords differ. Please check your password.");
    return false;
  }

  // Rasm yuklanganligini tekshirish
  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0].name
    : null;

  if (!memberImage) {
    alert("Please insert factory image!");
    return true;
  }

  return true;
}