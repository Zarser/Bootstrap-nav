async function locals() {
    let url = 'https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/locals.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  async function renderUsers() {
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
  renderUsers();