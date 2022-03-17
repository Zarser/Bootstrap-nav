// kontaktinformation





  /*  
const btn = document.getElementById("regioner");
console.log(addEventListener);
btn.addEventListener("click", Regioner);
console.log("HALLOJ IGEN");

function Regioner() {
const container = document.querySelector('.container');
console.log("HALLOJ i Regioner");
console.log(container);
container.innerHTML = html;

} */






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
                            <br><div class="desSV"><img src="img/se.svg" class="svg"></div>
                            <div class="desSV">${user.DescriptionSV}</a></div>
                            <br><div class="desSV"><img src="img/ua.svg" class="svg"></div>
                            <div class="desUA">${user.DescriptionUA}</a></div>
                            <br><div class="desSV"><img src="img/ru.svg" class="svg"></div>
                            <div class="desRU">${user.DescriptionRU}</a></div>
                            <br><div class="adress"><ion-icon name="navigate-outline"></ion-icon> ${user.Adress}</a></div>
                            <div class="date"><ion-icon name="calendar-outline"></ion-icon> ${user.Date}</a></div>
                            <div class="tid"><ion-icon name="time-outline"></ion-icon> ${user['Time from']}-${user['Time To']}</a></div>
                            <div class="booking"><ion-icon name="bookmark-outline"></ion-icon> <a href="${user['Booking link']}">${user['Booking link']}</a></div>
                            <div class="link"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Link}">${user.Link}</a></div>
                        </div><hr>`;
  
        html += htmlSegment;
    });
  
    let container = document.querySelector('.aktiviteter-m');
    container.innerHTML = html;
    
  }
  
  renderUsers();
 