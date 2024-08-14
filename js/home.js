/*MAIN functions on the nav bar and display option*/
const showNav=document.getElementById("showNav");
const hideNav=document.getElementById("hideNav");
const landing=document.getElementById("title1");
const about=document.getElementById("aboutPage");//functions of nav list links
const experience=document.getElementById("experiencePage");
const education=document.getElementById("educationPage");
const skills=document.getElementById("skillsPage");


document.getElementById("landing").style.display="block";
document.getElementById("about").style.display="none";
document.getElementById("experience").style.display="none";
document.getElementById("education").style.display="none";
document.getElementById("skills").style.display="none";

//loading landing page
landing.addEventListener("click",function(){
    document.getElementById("landing").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("experience").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("skills").style.display="none";
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
    //responsive
    const getWidth=window.innerWidth;
    if(getWidth>425){
        document.getElementById("showNav").style.display="none";
        document.getElementById("hideNav").style.display="none";
    }
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
    //responsive
    const getWidth1=window.innerWidth;
    
    if(getWidth1>425){
        document.getElementById("showNav").style.display="none";
        document.getElementById("hideNav").style.display="none";
    }
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
    //responsive
    const getWidth2=window.innerWidth;
    
    if(getWidth2>425){
        document.getElementById("showNav").style.display="none";
        document.getElementById("hideNav").style.display="none";
    }
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
    //responsive
    const getWidth3=window.innerWidth;
    
    if(getWidth3>425){
        document.getElementById("showNav").style.display="none";
        document.getElementById("hideNav").style.display="none";
    }
});

//LANDING PAGE FUNCTIONS AND BEHAVIOR
const showOne=setTimeout(function(){
    document.getElementById("one").style.visibility="visible";
      
},1000);

const showTwo=setTimeout(function(){
    document.getElementById("two").style.visibility="visible"; 
},2000);

const showThree=setTimeout(function(){
    document.getElementById("three").style.visibility="visible";
},3000)
const showFour=setTimeout(function(){
    document.getElementById("four").style.visibility="visible";
},4000);
const showFive=setTimeout(function(){
    document.getElementById("five").style.visibility="visible";
},5000);
const showSix=setTimeout(function(){
    document.getElementById("six").style.visibility="visible";
},6000);
const showSeven=setTimeout(function(){
    document.getElementById("seven").style.visibility="visible";
},7000);