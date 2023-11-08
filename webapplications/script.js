let webAppsData = [
    {"name": "Google Search", "users": "2 Billion"},
    {"name": "YouTube", "users": "1.9 Billion"},
    {"name": "Facebook", "users": "2.8 Billion"},
    {"name": "Gmail", "users": "1.5 Billion"},
    {"name": "WhatsApp Web", "users": "2 Billion"},
    {"name": "Amazon", "users": "300 Million"},
    {"name": "Twitter", "users": "330 Million"},
    {"name": "Zoom", "users": "300 Million"},
    {"name": "LinkedIn", "users": "740 Million"},
    {"name": "Google Drive", "users": "1 Billion"}
];
function convert(usersString){
    let users = parseFloat(usersString);
    if(usersString.includs('Billion')){
    users *=1000;
    }
    return users
}

function buildTable(data){
    let table = document.getElementById("WebAppsTable")
    while (table.row.length > 1){
        table.deleteRow(1);
    }
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        nameCell.textContent = data[i].name;
        row.appendChild(nameCell);
        let userCell = document.createElement('td');
        userCell.textContent = data[i].users;
        row.appendChild(userCell);
        table.appendChild(row);
        
    }
}
window.onload = function(){
    buildTable(webAppsData);
}
document.getElementById("MostUsers").addEventListener('click',function(){
    webAppsData.sort(function(a,b){
        return convert(b.users) - convert(a.users)
    });
    buildTable(webAppsData);
})
document.getElementById("FewUsers").addEventListener('click',function(){
    webAppsData.sort(function(a,b){
        return convert(a.users) - convert(b.users)
    });
    buildTable(webAppsData);
})