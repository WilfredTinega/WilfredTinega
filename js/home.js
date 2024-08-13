//hiding all elements until called in for in the button
document.getElementById("about").style.display="none";
document.getElementById("experience").style.display="none";
document.getElementById("education").style.display="none";
document.getElementById("skills").style.display="none";
document.getElementById("project").style.display="none";
document.getElementById("contact").style.display="none";

/*MAIN functions on the nav bar and display option*/
const showNav=document.getElementById("showNav");
const hideNav=document.getElementById("hideNav");
const landing=document.getElementById("title1");
const about=document.getElementById("aboutPage");//functions of nav list links
const experience=document.getElementById("experiencePage");
const education=document.getElementById("educationPage");
const skills=document.getElementById("skillsPage");
const project=document.getElementById("projectPage");
const contact=document.getElementById("contactPage");

//loading landing page
landing.addEventListener("click",function(){
    document.getElementById("landing").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
})

//showing navigation bar
showNav.addEventListener("click",function(){
    document.getElementById("showNav").style.display="none";
    document.getElementById("hideNav").style.display="block";
    document.getElementById("lists").style.left="0%";
})
//hiding navigation bar
hideNav.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%"; 
});

//when you click the navigation links, hide the nav bar list

//ABOUT
about.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";

    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="block";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
});

//EXPERIENCE
experience.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";
    
    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="block";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
});

//EDUCATION
education.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";

    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="block";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
});

//SKILLS
skills.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";
    
    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="block";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="none";
});

//PROJECTS
project.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";
    
    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="block";
    document.getElementById("contact").style.display="none";
});

//CONTACT
contact.addEventListener("click",function(){
    document.getElementById("showNav").style.display="block";
    document.getElementById("hideNav").style.display="none";
    document.getElementById("lists").style.left="-50%";
    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
    document.getElementById("project").style.display="none";
    document.getElementById("contact").style.display="block";
});

//#about,#experience,#certification,#education,#skills,#project,#contact*/