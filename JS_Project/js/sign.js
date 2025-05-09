document.querySelector(".login_btn").addEventListener("click", function() {
  const id = document.getElementById("id").value.trim();
  const pw = document.getElementById("pw").value.trim();
  let bol = false;
  const pwConfirm = document.getElementById("pwConfirm").value.trim();

  const idReg = /^[a-zA-Z0-9]{6,12}$/;
  const pwReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!idReg.test(id)) {
    alert("아이디는 6~12자의 영문+숫자 조합이어야 합니다.");
    return;
  }

  if (!pwReg.test(pw)) {
    alert("비밀번호는 8자 이상, 영문+숫자 포함이어야 합니다.");
    return;
  }

  if (pw !== pwConfirm) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.some(user => user.id === id)) {
    alert("이미 존재하는 아이디입니다.");
    return;
  }

  users.push({ id, pw, bol });
  localStorage.setItem("users", JSON.stringify(users));

  alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
  window.location.href = "login.html";
});