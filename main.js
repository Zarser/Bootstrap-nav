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
        let htmlSegment = `<div class="Region">
                            <h2>${user.Ort}</h2>
                            <div class="email"><a href="email:${user['E-post']}">${user['E-post']}</a></div>
                            <div class="telnr">${user.Telefon}</a></div>
                            <div class="webb"><a href="${user.Webbadress}">${user.Webbadress}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    //let container = document.querySelector('.container');
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



// aktiviteter

/*
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
        let htmlSegment = `<div class="aktiviteter">
                            <h2>${user.TitleSV}</h2>
                            <div class="email">${user.DescriptionSV}</a></div>
                            <div class="email">${user.DescriptionUA}</a></div>
                            <div class="email">${user.DescriptionRU}</a></div>
                            <div class="telnr">${user.Adress}</a></div>
                            <div class="telnr">${user.Date}</a></div>
                            <div class="telnr">${user['Time from']}-${user['Time To']}</a></div>
                            <div class="webb"><a href="${user['Booking link']}">${user['Booking link']}</a></div>
                            <div class="webb"><a href="${user.Link}">${user.Link}</a></div>
  
                        </div>`;
  
        html += htmlSegment;
    });
  
    let container = document.querySelector('.container');
    container.innerHTML = html;
    
  }
  
  renderUsers();
  */