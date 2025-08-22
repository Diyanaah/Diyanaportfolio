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



// const scriptURL = 'https://script.google.com/macros/s/AKfycbwBKc5LGDzn2-WyRoljGAxOyTFPAJtmkjh0gkO2cEE4sSUPdDFMYsqaeBTm2xyEsDcDWw/exec'
//   const form = document.forms['submit-to-google-sheet']
//   const msg = document.getElementById("msg")

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//       })
//       .catch(error => console.error('Error!', error.message))
//   })

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