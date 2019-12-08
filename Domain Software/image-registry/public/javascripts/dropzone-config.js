Dropzone.options.myAwesomeDropzone = {
  paramName: "sampleFile", // The name that will be used to transfer the file
  maxFilesize: 4, // MB
  accept: function(file, done) {
    if (file.name == "justinbieber.jpg") {
      done("Naha, you don't.");
    }
    else { done(); }
  }
};