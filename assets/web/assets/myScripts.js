var myLink = document.getElementById('mylink');

myLink.onclick = function(){

    var table = document.getElementById("demo");
    var message = document.getElementById("message-form1-0");
    let add = message.value;

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var txt = document.createTextNode(add);
    var spc = document.createTextNode("     ");
    var dlt = document.createTextNode("DELETE");

    td.appendChild(txt);
    td.appendChild(spc);
    td.appendChild(dlt)

    tr.appendChild(td);
    table.appendChild(tr);

    message.value = "";

    return;
};