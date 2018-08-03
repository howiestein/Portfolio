// Function to generate a dated copyright notice
// Code taken from https://answers.squarespace.com/questions/58787/how-to-display-current-year-for-copyright.html -->
// TODO: in 2019, change this to be "© 2018-[CURRENT YEAR] Howard S. Stein"

function generateCopyright() {
  var date=new Date(),
      year = date.getFullYear(),
      text = "© " + year + " Howard S. Stein",
      html = '<div class="text-align-center">' + text + '</div>';

   document.write(html);
}
