/* function getEarnings() { */
fetch('https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json')
.then(res => res.text())
.then((out) =>
   {
      // alert("I am here"); // I can't see it if from function
      let jsonData = JSON.parse(out);
      for (let i = 0; i < jsonData.quarterlyEarnings.length; i++)
       {
          let earnings = jsonData.quarterlyEarnings[i];
          document.getElementById("regions").innerHTML +=
          "<tr><td>" + earnings.reportedDate + "</td>" +
          "<td align='right'>" + earnings.reportedEPS + "</td>" +
          "<td align='right'>" + earnings.estimatedEPS + "</td>" +
          "<td align='right'>" + earnings.surprise + "</td></tr>";
       };
   })
.catch(err => console.error(err));
/* } */
