
//declare variables
var selects;
var path;
var xhttp;
var attrName = [];
var XMLDoc;
var XMLRoot;
var XMLRootAttributes;
var XMLSelectionRootAttributes;
var attrNameU;
var selection;
var myobject;
var s; //i would use this var to store selected node

function init() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            XMLDoc = this.responseXML; //restituisce l'xml in chiaro
            XMLRoot = XMLDoc.getRootNode();//come XMLDoc restituisce l'xml in chiaro
            XMLRootAttributes = XMLRoot.getElementsByTagName("*"); //restituisce tutti i tag in un array
            for (i = 0; i < XMLRootAttributes.length; i++) {
                attrName.push(XMLRootAttributes[i].nodeName); //creo array con tutti i nomi dei tag sono stringhe e non array
                attrNameU = attrName.filter(function (elem, pos) {
                    return attrName.indexOf(elem) == pos;
                });
            }
            //PROVO A FARE UNA SELEZIONE E RICAVARE GLI ATTRIBUTI
            selection = select(XMLDoc, attrName[2]); //restituisce i tag contenuti nel tag selezionato (i figli)
        }

        //################### added 26th Jan 2019 https://www.electrictoolbox.com/javascript-add-options-html-select/
        // var i;
        myobject = attrName;
        selects = document.getElementById("example-select");
        for (i in myobject) {
            selects.options[selects.options.length] = new Option(myobject[i], i);
        }

    };
    xhttp.open("GET", path, true);
    xhttp.send();
}
//FUNZIONI *************************************************************************
function path() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
    path = (window.URL || window.webkitURL).createObjectURL(file);
    console.log('path', path);
}

function select(XMLDoc, XMLNode) {
    var output = XMLDoc.getElementsByTagName(XMLNode);
    return output;
}

function getNodes(XMLDoc, selection) {
    let nodes = XMLDoc.getElementsByTagName("" + selection + "");
    let attrName;
    for (i = 0; i < nodes.length; i++) {
        attrName.push(nodes[i].nodeName); //creo array con tutti i nomi dei tag
        // let attrNameU = attrName.filter(function (elem, pos) {
        //     return attrName.indexOf(elem) == pos;
        // });
    }
    return attrName;
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
      s=selects.options[selects.selectedIndex];
        // XMLSelectionRootAttributes = XMLDoc.getElementsByTagName(selects.options[selects.selectedIndex].value);
        XMLSelectionRootAttributes = XMLDoc.getElementsByTagName(s.value);
        // window.alert("Text: " + selects.options[selects.selectedIndex].text + "\nValue: " + selects.options[selects.selectedIndex].value);
        window.alert("Text: " + s.text + "\nValue: " + s.value);
        return s;
    }
    else {
        window.alert("Select box is empty");
    }
}

function setTable() {
    //let tableArea=document.getElementById('table');
    let table;
    let row=[];
    let cell=[];
    table=document.createElement('table');
    for (i=0;i<XMLRootAttributes.length;i++){
      row[i]=table.insertRow();
      cell[i]=row[i].insertCell();
      // cell[i].innerHTML=XMLRootAttributes[i].nodeName;
      cell[i].innerHTML=getNodes(XMLDoc, s);

    }
    document.body.appendChild(table);
  }
