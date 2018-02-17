let users = JSON.parse(localStorage.getItem("users"));

//function activateKey() {
  //if () {
    function storeKey() {
      users.push(document.getElementById('name'))={
      key : document.getElementById('key')
    };
      localStorage.setItem("users", JSON.stringify(users));
      let users = JSON.parse(localStorage.getItem("users"));
      console.log(users)
    }
  //} else {

  }
//}
