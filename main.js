async function aktiviteter() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/activities.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersA() {
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
  
    let container = document.querySelector('#card-text1');
    container.innerHTML = html;
    
  }
  
  renderUsersA();



  async function GoodToKnow() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/GoodToKnow.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersGTK() {
    let users = await GoodToKnow();
    console.log(GoodToKnow);
    let html = '';
    users['Good To Know'].forEach(user => {
        let htmlSegment = `<br><div class="aktiviteter">
                            <h2>${user.TitleSV}</h2>
                            <br><div class="desSV"><img src="img/se.svg" class="svg"></div>
                            <div class="desSV">${user.DescriptionSV}</a></div>
                            <br><div class="desSV"><img src="img/ua.svg" class="svg"></div>
                            <div class="desUA">${user.NameUA}</a></div>
                            <br><div class="desSV"><img src="img/ru.svg" class="svg"></div>
                            <div class="desRU">${user.NameRU}</a></div>
                            <br><div class="link"><ion-icon name="unlink-outline"></ion-icon><a href="${user.Link}">${user.Link}</a></div>
                        </div><hr>`;
  
        html += htmlSegment;
    });
  
    let container = document.querySelector('#card-text');
    container.innerHTML = html;
    
  }
  
  renderUsersGTK();



  async function kommuner() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/municipalities.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersK() {
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
  
  renderUsersK();



  async function locals() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/locals.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersL() {
    let users = await locals();
    console.log(locals);
    let html1 = '';
    users.Locals.forEach(user => {
        let html1Segment = `<br><div class="card" style="width: 20rem;">
                        <div class="card-header"><h2>${user.Name}</h2></div>
                            <div class="email"><b>Hjälp:</b> ${user.TypeOfHelp}</a></div>
                            <div class="telnr"><b>Språk:</b> ${user['What languages speak?']}</a></div>
                            <div class="webb"><b>Kontakt info:</b> ${user['Contact info']}</a></div>
                            <div class="webb"><b>KommunID:</b> ${user.KommunID}</a></div>
                        </div>`;
  
        html1 += html1Segment;
    });
  
    let container = document.querySelector('.locals');
    container.innerHTML = html1;
  }
  renderUsersL();




  async function regioner() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersR() {
    let users = await regioner();
    console.log(regioner);
    let html1 = '';
    users.Region.forEach(user => {
        let html1Segment = `<ul>
                        <li><button type="button" class="btn btn-primary">${user.Ort}
                        </button>
                        </li>
                            </ul>`;
  
        html1 += html1Segment;
    });
    let container = document.querySelector('.card-text');
    container.innerHTML = html1;
  }
  renderUsersR();




async function regioner() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsersRR() {
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
  renderUsersRR();