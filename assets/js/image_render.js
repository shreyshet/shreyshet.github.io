function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result
    $(".input").html("<img src='" + the_url + "' style='width:100%;' />")
  }

  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}

// handle input changes
$("#input_button").change(function() {
    // grab the first image in the FileList object and pass it to the function
    console.log(this.files)
    renderImage(this.files[0])
});