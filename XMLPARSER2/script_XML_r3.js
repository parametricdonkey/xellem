
var selects;
var path;

function init() {

    var attrName = [];
    var selection;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var XMLDoc = this.responseXML;
            console.log(XMLDoc);

            var XMLRoot = XMLDoc.getRootNode();//nodeValue;
            console.log(XMLRoot);

            var XMLRootAttributes = XMLRoot.getElementsByTagName("*"); //restituisce tutti i tag
            console.log("XMLRootAttributes " + XMLRootAttributes);

            for (i = 0; i < XMLRootAttributes.length; i++) {
                attrName.push(XMLRootAttributes[i].nodeName); //creo array con tutti i nomi dei tag

                var attrNameU = attrName.filter(function (elem, pos) {
                    return attrName.indexOf(elem) == pos;
                });

            }
            console.log("attrName= ---> " + attrName);
            console.log("attrName[i]= ---> " + attrName[2]); //accedo ad un elemento a caso

            //PROVO A FARE UNA SELEZIONE E RICAVARE GLI ATTRIBUTI
            var selection = select(XMLDoc, attrName[2]);
            console.log(selection);


            //questo è un testttt!
            var XMLSelectionRootAttributes = XMLDoc.getElementsByTagName(selection); //restituisce tutti i tag
            console.log(XMLSelectionRootAttributes);

            //TABLE

            // document.write("<table align='left' border='1' id='outTab'>");
            // for (i = 0; i < attrName.length; i++) {
            //     document.write("<tr><td>");
            //     document.write(attrName[i]);
            //     // document.write(attrNameU[i]);
            //     document.write("</tr></td>");
            // }
            // document.write("</table>");
        }


        //################### added 26th Jan 2019 https://www.electrictoolbox.com/javascript-add-options-html-select/ 
        // var i;
        var myobject = attrName;
        selects = document.getElementById("example-select");
        for (i in myobject) {
            selects.options[selects.options.length] = new Option(myobject[i], i);
        }







    };
    // xhttp.open("GET", "read.xml", true);
    // xhttp.open("GET", "navisSearch1.xml", true);
    xhttp.open("GET", path, true);
    xhttp.send();
}
//window.onload = init;

function path(){
var fileInput = document.getElementById('file-input');
var file = fileInput.files[0];
path=(window.URL||window.webkitURL).createObjectURL(file);
console.log('path', path);
}


//FUNZIONI
function select(XMLDoc, XMLNode) {
    var output = XMLDoc.getElementsByTagName(XMLNode);
    return output;
}

function getNodes(XMLDoc, select) {
    let nodes = XMLDoc.getElementsByTagName("" + selection + "");
    let attrName;
    for (i = 0; i < nodes.length; i++) {
        attrName.push(nodes[i].nodeName); //creo array con tutti i nomi dei tag
        let attrNameU = attrName.filter(function (elem, pos) {
            return attrName.indexOf(elem) == pos;
        });
    }
    return attrNameU;
}

//SCRIPT READ FILE

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('file').innerHTML = '<ul>' + output.join('') + '</ul>';
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
}


function showselectsopt() {
    if (selects.options.length > 0) {
        window.alert("Text: " + selects.options[selects.selectedIndex].text + "\nValue: " + selects.options[selects.selectedIndex].value);
    }
    else {
        window.alert("Select box is empty");
    }
}


