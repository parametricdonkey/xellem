function read() {
    //ci vorrebbe un try/catch con alert "seleziona un file"
    //verificare anche gli scope!
    const selectedFile = document.getElementById('input');
    var file = selectedFile.files[0];
    let doc;

    var show=document.getElementById("show"); 
    var info=document.getElementById("info");
   info.innerHTML=info.innerHTML+"<br> File name: "
   +file.name+"<br> File size (Kb): "+file.size
   +"<br> File Type: "+file.type
   +"<br> ----End----";
   
   var reader=new FileReader();
   var parser=new DOMParser();
   reader.onload=function(e){
       show.innerHTML=reader.result;
   }
   reader.readAsText(file);
   doc=parser.parseFromString(reader.result, "application/xml");
   init(doc);
}