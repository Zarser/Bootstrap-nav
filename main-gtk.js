async function GoodToKnow() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/GoodToKnow.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsers() {
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
  
  renderUsers();