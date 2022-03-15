async function aktiviteter() {
  let url = '';
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
                          <div class="telnr">${user.['Time from']}-${user.['Time To']}</a></div>
                          <div class="webb"><a href="${user.['Booking link']}">${user.['Booking link']}</a></div>
                          <div class="webb"><a href="${user.Link}">${user.Link}</a></div>

                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
  
}

renderUsers();