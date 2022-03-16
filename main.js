// kontaktinformation


async function kontaktInfo() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await kontaktInfo();
    console.log(kontaktInfo);
    let html = '';
    users.Region.forEach(user => {
        let htmlSegment = `<br><div class="card" style="width: 18rem;">
                        <div class="card-header"><h2>${user.Ort}</h2></div>
                            <div class="email"><ion-icon name="mail-outline"></ion-icon><a href="email:${user['E-post']}">${user['E-post']}</a></div>
                            <div class="telnr"><ion-icon name="call-outline"></ion-icon>${user.Telefon}</a></div>
                            <div class="webb"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Webbadress}">${user.Webbadress}</a></div>
                        </div><br>`;

        html += htmlSegment;
    });

    //let container = document.querySelector('.card');
    //container.innerHTML = html;
const btn = document.getElementById("regioner");
console.log(addEventListener);
btn.addEventListener("click", Regioner);
console.log("HALLOJ IGEN");

function Regioner() {
const container = document.querySelector('.container');
console.log("HALLOJ i Regioner");
console.log(container);
container.innerHTML = html;
}
}
renderUsers();


/*
// aktiviteter


async function aktiviteter() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/activities.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsers() {
    let users = await aktiviteter();
    console.log(aktiviteter);
    let html = '';
    users.Activities.forEach(user => {
        let htmlSegment = `<br><div class="aktiviteter">
                            <h2>${user.TitleSV}</h2>
                            <div class="desSV">${user.DescriptionSV}</a></div>
                            <div class="desUA">${user.DescriptionUA}</a></div>
                            <div class="desRU">${user.DescriptionRU}</a></div>
                            <div class="adress"><ion-icon name="navigate-outline"></ion-icon> ${user.Adress}</a></div>
                            <div class="date"><ion-icon name="calendar-outline"></ion-icon> ${user.Date}</a></div>
                            <div class="tid"><ion-icon name="time-outline"></ion-icon> ${user['Time from']}-${user['Time To']}</a></div>
                            <div class="booking"><ion-icon name="bookmark-outline"></ion-icon> <a href="${user['Booking link']}">${user['Booking link']}</a></div>
                            <div class="link"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Link}">${user.Link}</a></div>
  
                        </div>`;
  
        html += htmlSegment;
    });
  
    let container = document.querySelector('.container');
    container.innerHTML = html;
    
  }
  
  renderUsers();
 */