var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(event, tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}  

function closemenu(){
    sidemenu.style.right = "-200px";
} 
document.querySelectorAll("#sidemenu li a").forEach(link => {
    link.addEventListener("click", () => {
        closemenu();
    });
});


function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

const serviceID = "service_wp160xh";
const templateID = "template_84nq9vt"

emailjs
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully")
    }
)
.catch((err) => console.log(err));
}