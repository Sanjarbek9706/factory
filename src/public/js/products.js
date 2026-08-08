console.log("Products frontend javascript file");

$(function () {
  // Product Collection o'zgarganda Size/Volume darchasini va disabled holatini boshqarish
  $(".product-collection").on("change", function () {
    const selectedValue = $(this).val();

    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $(".product-size").prop("disabled", true); // Size yuborilmaydi

      $("#product-volume").show();
      $(".product-volume").prop("disabled", false); // Volume yuboriladi
    } else {
      $("#product-volume").hide();
      $(".product-volume").prop("disabled", true); // Volume yuborilmaydi

      $("#product-collection").show();
      $(".product-size").prop("disabled", false); // Size yuboriladi
    }
  });

  // New Product tugmasi
  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });

  // Cancel tugmasi
  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
  });

  // Product Status o'zgarganda (Eski yakka o'zi o'zgarish holati uchun)
  $(".new-product-status").on("change", async function (e) {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });
      console.log("response:", response);
      const result = response.data;
      if (result.data) {
        $(".new-product-status").blur();
      } else alert("Product update failed!");
    } catch (err) {
      console.log("Error productStatus:", err);
      alert("Product update failed!");
    }
  });

  // 🚀 YANGI FUNKSIYA: Jadvaldagi BARCHA ma'lumotlarni bittada o'zgartirish va saqlash
  $(".update-product-btn").on("click", async function () {
    const id = $(this).data("id");
    const row = $(`#product-row-${id}`);

    // Input va Selectlardan qiymatlarni yig'ib olish
    const productName = row.find(".product-name-input").val();
    const productCollection = row.find(".product-collection-input").val();
    const productSize = row.find(".product-size-input").val();
    const productPrice = row.find(".product-price-input").val();
    const productLeftCount = row.find(".product-left-count-input").val();
    const productStatus = row.find(".product-status-input").val();

    // Kiritilgan ma'lumotlarni tekshirish (Validation)
    if (!productName || !productPrice || !productLeftCount) {
      alert("Please fill in all product fields!");
      return;
    }

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productName: productName,
        productCollection: productCollection,
        productSize: productSize,
        productPrice: productPrice,
        productLeftCount: productLeftCount,
        productStatus: productStatus,
      });

      console.log("Update response:", response);
      const result = response.data;

      if (result.data) {
        alert("Product updated successfully!");
      } else {
        alert("Product update failed!");
      }
    } catch (err) {
      console.log("Error updating product:", err);
      alert("Product update failed!");
    }
  });
});

// Formani yuborishdan oldin tekshirish
function validateForm() {
  const productName = $(".product-name").val(),
    productPrice = $(".product-price").val(),
    productLeftCount = $(".product-left-count").val(),
    productCollection = $(".product-collection").val(),
    productDesc = $(".product-desc").val(),
    productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  } else return true;
}

// Rasm yuklanganda oldindan ko'rsatish (Preview) funksiyasi
function previewFileHandler(input, order) {
  const imgClassName = input.className;
  console.log("input:", input);
  console.log("imgClassName:", imgClassName);

  const file = input.files ? input.files[0] : null;

  if (!file) return;

  const fileType = file["type"];
  const validImageType = ["image/jpeg", "image/jpg", "image/png"];

  if (!validImageType.includes(fileType)) {
    alert("Please insert only jpeg, jpg, and png!");
    input.value = ""; // Noto'g'ri faylni tozalash
  } else {
    const reader = new FileReader();
    reader.onload = function () {
      $(`#image-section-${order}`).attr("src", reader.result);
    };
    reader.readAsDataURL(file);
  }
}