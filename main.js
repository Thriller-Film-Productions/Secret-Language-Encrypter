let users = JSON.parse(localStorage.getItem("users"));

function storeKey() {
  let keyname = document.getElementById('name');
  users.push(keyname)={
  key : document.getElementById('key')
}
  localStorage.setItem("users", JSON.stringify(users));
}
