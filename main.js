console.log("Yoyleberry pie");

let users = JSON.parse(localStorage.get("users"));

function storeKey() {
  users.push(document.getElementById('name')) = {
    key: document.getElementById('key')
  };
  localStorage.set("users", JSON.stringify(users));
  let users = JSON.parse(localStorage.get("users"));
}
