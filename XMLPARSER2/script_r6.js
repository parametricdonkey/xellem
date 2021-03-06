function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      // Display file content
      displayContents(contents);
    };
    reader.readAsText(file);
  }
   
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.innerHTML = contents;
  }
   
  document.getElementById('file-input').addEventListener('change', readSingleFile, false);
  