let users = JSON.parse(StorageArea.get("users"));

//function activateKey() {
  //if () {
    function storeKey() {
      users.push(document.getElementById('name'))={
      key : document.getElementById('key')
    };
      StorageArea.set("users", JSON.stringify(users));
      let users = JSON.parse(StorageArea.get("users"));
      console.log(users);
    }
  //} else {

//  }
//}
