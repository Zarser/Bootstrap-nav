// kontaktinformation

async function regioner() {
  let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
async function renderUsers() {
  let users = await regioner();
  console.log(regioner);
  let html1 = '';
  users.Region.forEach(user => {
      let html1Segment = `<br><div class="card" style="width: 18rem;">
                      <div class="card-header"><h2>${user.Ort}</h2></div>
                          <div class="email"><ion-icon name="mail-outline"></ion-icon><a href="email:${user['E-post']}">${user['E-post']}</a></div>
                          <div class="telnr"><ion-icon name="call-outline"></ion-icon>${user.Telefon}</a></div>
                          <div class="webb"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Webbadress}">${user.Webbadress}</a></div>
                      </div>`;

      html1 += html1Segment;
  });

  let container = document.querySelector('.kontakt');
  container.innerHTML = html1;
}
renderUsers();