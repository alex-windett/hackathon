$(function(){

  var $nav = $("nav")
  var $nav_links = $("nav a")

  var $nav_about = $("#nav_about")
  var $nav_skills = $("#nav_skills")
  var $nav_expirience = $("#nav_expirience")
  var $nav_projects = $("#nav_projects")
  var $nav_contact = $("#nav_contact")


// scroll to certain section
  $nav_links.click(function(e){
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000, 
        // time taken to reach section
        offset: {"left": 0, "top": 0}
        // how far off it will go when section is reached
      })
  })


$(".icon-plus-sign").click(
        function() {   
            $(".pop").fadeIn('slow');
        }
    );

$(".pop i").click(
        function() {   
            $(".pop").fadeOut('fast');
        }
    );

var getIphoneWindowHeight = function() {
  // Get zoom level of mobile Safari
  // Such zoom detection might not work correctly on other platforms
  // 
  var zoomLevel = document.documentElement.clientWidth / window.innerWidth;

  // window.innerHeight returns height of the visible area. 
  // We multiply it by zoom and get our real height.
  return window.innerHeight * zoomLevel;
};


$("#menu").dialog({
  autoOpen: false,
  show: {
    effect: "blind",
    duration: 1000
  },
  hide: {
    effect: "explode",
    duration: 100
  }
})

$("#menu_icon").click(function(){
  $("#menu").dialog("open")
  });

  // $("#about").waypoint(function(down){
  //   alert("about");
  // })

  // $("#skills").waypoint(function(down){
  //   alert("skills");
  // })

  // $("#expirience").waypoint(function(down){
  //   alert("expirience");
  // })

  // $("#projects").waypoint(function(down){
  //   alert("projects");
  // })

  // $("#contact").waypoint(function(down){
  //   alert("contact");
  // })

});