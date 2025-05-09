document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login_btn");
  loginBtn.addEventListener("click", function () {
    const id = document.querySelectorAll(".label1")[0].value.trim();
    const pw = document.querySelectorAll(".label1")[1].value.trim();

    if (id === "" || pw === "") {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(user => user.id === id && user.pw === pw && user.bol === false);

    if (!user) {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    alert("로그인 되었습니다!");


    users[0].bol = true;
    localStorage.setItem("loginUser", JSON.stringify(users));


    location.href = "../html/screen.html"; // 로그인 성공시 메인페이지 이동 추후수정
  });

  
  document.querySelector(".guest_check").addEventListener("click", function () {
    window.location.href = "sign.html"; 
  });
});