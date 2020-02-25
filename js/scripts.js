/*business logic*/
function mycontacts(){
    var Name = $("input#Name").val();
    var Email = $("input#Email").val();
    var message = $("input.Message").val();
    alert("Hey, " + Name + ". We got your message. Thanks for reaching out to us.");
    event.preventDefault();
    $('#name').val('');
      $('#email').val('');
      $('#textarea').val('');
    }
/* user interface*/
  $(document).ready(function(){
    $("#m1").click(function () {
      $("#d1").sidetoggle();
      $(".m1").toggle();
    }); 
    $("#m2").click(function () {
      $("#d2").sidetoggle();
      $(".m2").toggle();
    });
    $("#m3").click(function () {
      $("#d").sidetoggle();
      $(".m3").toggle();
    });
  });
  
