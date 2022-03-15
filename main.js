
// api url
const api_url = "https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json";
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
   show(data);
}
// Calling that async function
getapi(api_url);
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
        <th>NameSV</th>
        <th>E-post</th>
        <th>Telefon</th>
        <th>Webbadress</th>
        <th>Postnr</th>
        <th>Ort</th>
        </tr>`;
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.NameSV} </td>
    <td>${r.E-post}</td>
    <td>${r.Telefon}</td> 
    <td>${r.Webbadress}</td> 
    <td>${r.Postnr}</td>
    <td>${r.Ort}</td>
    </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("regioner").innerHTML = tab;
}