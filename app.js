
const users = new Request("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
  "Content-Type": "application/json"
});

fetch(users)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      renderUser(user);
    });
  })
  .catch((error) => {
    console.log("Error Found:", error);
  });

renderUser = (person) => {
  let userContainer = document.createElement("div");
  userContainer.className = "col-xs-12 col-sm-6 col-md-4";

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "-" + dd;
  console.log(today);

  userContainer.innerHTML = `
    <div class="user">
      <address>
        <strong>${person.name}</strong><br>
        ${person.birthdate}<br>
        ${person.website}<br>
        <a href="mailto:${person.email}">${person.email}</a>
       </address>
     </div>`;

  // Find the ID 'user-list' and append the userContainer to it.
  // This will cause it to display on the page.

  if (Math.random() > 0.5) {
    document.getElementById("user-list-today").appendChild(userContainer);
  } else {
    document.getElementById("user-list-future").appendChild(userContainer);
  }
};