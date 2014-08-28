$(function(){

  var $nav = $("nav")
  var $nav_links = $("nav a")

  var $nav_about = $("#nav_about")
  var $nav_skills = $("#nav_skills")
  var $nav_experience = $("#nav_experience")
  var $nav_projects = $("#nav_projects")
  var $nav_contact = $("#nav_contact")

  var $section_about = $("#about")
  var $section_skills = $("#skills")
  var $section_experience = $("#experience")
  var $section_projects = $("#projects")
  var $section_contact = $("#contact")

// scroll to certain section
  $nav_links.click(function(event){
    $.scrollTo(
      $(this).attr("href"),
      {
        duration: 1000, 
        // time taken to reach section
        offset: {"left": 0, "top": 0}
        // how far off it will go when section is reached
      }
    );
  });


  // $("#about").waypoint(function(down){
  //   alert("about");
  // })

  // $("#skills").waypoint(function(down){
  //   alert("skills");
  // })

  // $("#experience").waypoint(function(down){
  //   alert("experience");
  // })

  // $("#projects").waypoint(function(down){
  //   alert("projects");
  // })

  // $("#contact").waypoint(function(down){
  //   alert("contact");
  // })

});