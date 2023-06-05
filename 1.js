let users = [];

function addUser() {
  // Получаем данные пользователя из формы
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  
  // Создаем объект пользователя и добавляем его в массив
  let user = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
  users.push(user);
  
  // Очищаем поля формы
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  
  // Выводим сообщение об успешном добавлении пользователя
  alert("Пользователь добавлен!");
  console.log(users);
}
 document.querySelector('#butt').onclick = addUser;
 

