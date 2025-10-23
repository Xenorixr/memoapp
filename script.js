document.getElementById("loginBtn").addEventListener("click", function() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // localStorageからアカウント一覧を取得
  const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

  if (accounts.length === 0) {
    alert("アカウントが存在しません。新規作成してください");
    return;
  }

  // 最後に作ったアカウント
  const lastAccount = accounts[accounts.length - 1];

  if (user === lastAccount.username && pass === lastAccount.password) {
    // ログイン成功
    window.location.href = "memo.html";
  } else {
    alert("ユーザー名またはパスワードが間違っています");
  }
});

// 新規作成ボタンで signup.html に移動
document.getElementById("signupBtn").addEventListener("click", function() {
  window.location.href = "signup.html";
});
