$(document).ready(function(){
    getJSON('https://raw.githubusercontent.com/HackersOfSweden/WelcomeToSweden/main/DB/regions.json', function(data){
    var regions = '';
    $.each(data, fuction(key, value){
        regions += '<tr>';
        regions += '<td>'+value.Ort+'</td>';
        regions += '<td>'+value.Telefon+'</td>';
        regions += '<td>'+value.E-post+'</td>';
        regions += '<td>'+value.Webbadress+'</td>';
        regions += '</tr>';
    });
    $('#"posts-table').append(regions);
});
});