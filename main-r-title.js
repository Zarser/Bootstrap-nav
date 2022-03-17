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
        let html1Segment = `<ul>
                        <li><a href=""><h6>${user.Ort}</h6></a></li>
                            </ul>`;
  
        html1 += html1Segment;
    });
  
    let container = document.querySelector('.card-text');
    container.innerHTML = html1;
  }
  renderUsers();