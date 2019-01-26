function read() {
    //ci vorrebbe un try/catch con alert "seleziona un file"
    const selectedFile = document.getElementById('input');
    var file = selectedFile.files[0];
    
    var show=document.getElementById("show"); 
    var info=document.getElementById("info");
   info.innerHTML=info.innerHTML+"<br> File name: "
   +file.name+"<br> File size (Kb): "+file.size
   +"<br> File Type: "+file.type;
   
   var reader=new FileReader();
   reader.onload=function(e){
       show.innerHTML=reader.result;
   }
   reader.readAsText(file);
}