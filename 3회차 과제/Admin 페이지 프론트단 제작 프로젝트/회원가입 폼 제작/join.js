const darkToggle = document.getElementById("darkToggle");
const body = document.body;

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkToggle.textContent = body.classList.contains("dark-mode") ? "다크모드 끄기" : "다크모드 켜기";
});

document.getElementById("joinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const userId = document.getElementById("userId").value.trim();
  const userPw1 = document.getElementById("userPw1").value;
  const userPw2 = document.getElementById("userPw2").value;
  const userName = document.getElementById("userName").value.trim();
  const userPhone = document.getElementById("userPhone").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();

  const genderRadios = document.getElementsByName("userGender");
  let userGender = "";
  for (const radio of genderRadios) {
    if (radio.checked) {
      userGender = radio.value;
      break;
    }
  }

  if (!/^[a-zA-Z0-9]{6,}$/.test(userId)) {
    alert("아이디는 6자 이상 영문 또는 숫자로 입력하세요.");
    return;
  }

  const pwRule = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-])[A-Za-z\d!@#$%^&*()_+=\-]{8,}$/;
  if (!pwRule.test(userPw1)) {
    alert("비밀번호는 영문, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  if (!userName || !userPhone || !userGender || !userEmail) {
    alert("모든 필드를 채워주세요.");
    return;
  }

  alert(
    `회원가입 정보:\n` +
    `아이디: ${userId}\n` +
    `이름: ${userName}\n` +
    `전화번호: ${userPhone}\n` +
    `성별: ${userGender}\n` +
    `이메일: ${userEmail}\n\n` +
    `가입을 축하합니다!`
  );

  window.location.href = "welcome.html";
});
