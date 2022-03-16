async function kommuner() {
  let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/municipalities.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
async function renderUsers() {
  let users = await kommuner();
  console.log(kommuner);
  let html = '';
  users.Municipalities.forEach(user => {
      let htmlSegment = `<br><div class="card" style="width: 18rem;">
                          <div class="card-header"><h2>${user['Kommun namn']}</h2></div>
                          <div class="desSV">${user.KommunSV}</a></div>
                          <div class="desUA">${user.Ort}</a></div>
                          <div class="link">${user.Postnr}</a></div>
                          <div class="desRU">${user['Län namn']}</a></div>
                          <div class="adress"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Webbadress}">${user.Webbadress}</a></div>
                          <div class="date"><ion-icon name="call-outline"></ion-icon>${user.Telefon}</a></div>
                          <div class="email"><ion-icon name="mail-outline"></ion-icon><a href="email:${user['E-post']}">${user['E-post']}</a></div>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.kommun');
  container.innerHTML = html;
  
}

renderUsers();