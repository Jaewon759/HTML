const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 막기

  const formData = new FormData(form);

  const userId = formData.get("id");
  const userPw1 = formData.get("pw1");
  const userPw2 = formData.get("pw2");
  const userName = formData.get("name");
  const userPhone = formData.get("phone");
  const userPosition = formData.get("position");
  const userGender = formData.get("gender");
  const userEmail = formData.get("email");
  const userIntro = formData.get("intro");

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 가입 성공 시 결과 출력
  const resultHTML = `
    <div style="padding: 30px;">
      <h2>${userId}님 환영합니다.</h2>
      <p>회원 가입 시 입력하신 내역은 다음과 같습니다.</p>
      <ul>
        <li>아이디 : ${userId}</li>
        <li>이름 : ${userName}</li>
        <li>전화번호 : ${userPhone}</li>
        <li>원하는 직무 : ${userPosition}</li>
        <li>성별 : ${userGender}</li>
        <li>이메일 : ${userEmail}</li>
        <li>자기소개 : ${userIntro}</li>
      </ul>
    </div>
  `;

  document.body.innerHTML = resultHTML;
});
