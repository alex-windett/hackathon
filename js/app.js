$(function(){

  var $nav = $("nav")
  var $nav_links = $("nav a")

  var $nav_about = $("#nav_about")
  var $nav_skills = $("#nav_skills")
  var $nav_expirience = $("#nav_expirience")
  var $nav_projects = $("#nav_projects")
  var $nav_contact = $("#nav_contact")

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

  $("#about").waypoint(function(down){
    alert("about");
  })

  $("#skills").waypoint(function(down){
    alert("skills");
  })

  $("#expirience").waypoint(function(down){
    alert("expirience");
  })

  $("#projects").waypoint(function(down){
    alert("projects");
  })

  $("#contact").waypoint(function(down){
    alert("contact");
  })

});