$(function () {
  // 1. "Save" tugmasi bosilganda (Ism, Telefon, Status barchasini yangilash)
  $(".update-user-btn").on("click", function (e) {
    const id = $(this).data("id");
    const memberNick = $(`#nick-${id}`).val();
    const memberPhone = $(`#phone-${id}`).val();
    const memberStatus = $(`#status-${id}`).val();

    if (!memberNick || !memberPhone) {
      alert("모든 항목을 입력해 주세요!"); // Iltimos, barcha maydonlarni to'ldiring!
      return;
    }

    axios
      .post("/admin/user/edit", {
        _id: id,
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberStatus: memberStatus,
      })
      .then((response) => {
        const result = response.data;
        if (result.data) {
          alert("사용자 정보가 성공적으로 수정되었습니다!"); // User ma'lumotlari muvaffaqiyatli yangilandi!
        } else {
          alert("사용자 정보 수정에 실패했습니다!"); // Yangilashda xatolik!
        }
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        alert("사용자 정보 수정 중 오류가 발생했습니다!"); // Tizim xatosi!
      });
  });

  // 2. Select (Status) o'zgarganda (Faqat statusni avtomatik yangilash)
  $(".member-status").on("change", function (e) {
    const id = e.target.id.replace("status-", ""); // ID'dan faqat mongoose id qismini ajratib olish
    const memberStatus = $(this).val();

    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        const result = response.data;
        if (result.data) {
          console.log("User status updated!");
          alert("사용자 상태가 성공적으로 변경되었습니다!"); // Status muvaffaqiyatli o'zgartirildi!
          $(e.target).blur();
        } else {
          alert("사용자 상태 변경에 실패했습니다!"); // Statusni o'zgartirishda xatolik!
        }
      })
      .catch((err) => {
        console.error("Error updating status:", err);
        alert("사용자 상태 변경 중 오류가 발생했습니다!");
      });
  });
});