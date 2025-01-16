const fingerprint = document.getElementById("fingerprint");
// const overlay = document.getElementById("overlay");
// const backBtn = document.getElementById("backBtn");
const fingerBg = document.querySelector(".finger-class");
const fingerActive = document.querySelector(".finger-active");

fingerActive.style.display = "none";

// Chặn hành vi mặc định khi chạm vào phần tử không mong muốn
fingerBg.addEventListener("contextmenu", (event) => event.preventDefault());
fingerBg.addEventListener("selectstart", (event) => event.preventDefault());
fingerBg.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
});

fingerActive.addEventListener("contextmenu", (event) => event.preventDefault());
fingerActive.addEventListener("selectstart", (event) => event.preventDefault());
fingerActive.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
});

// Khi người dùng chạm vào fingerprint (button)
fingerprint.addEventListener("touchstart", (event) => {
  fingerActive.style.display = "block"; // Hiển thị hiệu ứng ngay lập tức

  setTimeout(() => {
    // overlay.classList.add("active");
 // Ẩn dấu vân tay
    fingerActive.style.display = "none"; // Ẩn hiệu ứng

    // Thêm trạng thái vào lịch sử mà không thay đổi URL
    history.pushState({ page: 1 }, "", window.location.href);
  }, 14000); // Thời gian đồng bộ với CSS keyframes
  // setTimeout(() =>{
  //   fingerBg.style.display = "block";
  //   fingerprint.style.display = "block";
  // }, 5000
  // );
});

// Xử lý hành động quay lại (popstate) khi người dùng vuốt hoặc nhấn back
window.onpopstate = (event) => {
  if (event.state && event.state.page === 1) {
    // Quay lại màn hình trước khi overlay xuất hiện
    // overlay.classList.remove("active"); // Ẩn overlay
    fingerprint.style.display = "block"; // Hiển thị lại dấu vân tay
    fingerBg.style.display = "block";
    fingerActive.style.display = "none"; // Ẩn hiệu ứng
  }
};

// Khi người dùng nhấn vào nút Back
// backBtn.addEventListener("click", () => {
//   // overlay.classList.remove("active");
//   fingerprint.style.display = "block"; // Hiển thị lại dấu vân tay
//   fingerBg.style.display = "block";
//   fingerActive.style.display = "none";
// });
