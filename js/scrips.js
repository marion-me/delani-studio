    $(document).ready(function(){
    $("form").submit(function(event){
      var userName = $("input#userName").val();
    var userEmail = $("input#userEmail").val();
    var message = $("input#message").val();
    alert("Hey, " + userName + ". We got your message. Thanks for reaching out to us.")
    event.preventDefault()
    }
  }
  $().ready(function () {
    $("#design").click(function () {
      $("#design-1").toggle();
      $("#design-2").toggle();
    });