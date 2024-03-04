const header = document.getElementById("header");
const mybutton = document.getElementById("goToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
    mybutton.style.bottom = "12%";
  } else {
    header.classList.remove("scrolled");
    mybutton.style.bottom = "-50px";
  }
});

function goToTop() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

navEl = document.querySelector(".fixed-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 50) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// Function to handle form Validation for email
const handleEmailValidation = (email) => {
  const regExEmail = /\S+@\S+\.\S+/;

return regExEmail.test(email)
}
const handlePhoneValidation =(phoneNumber) =>{
  if(!phoneNumber){
    alert("Please Enter PhoneNumber");
    return false;
  }
  return true;
}


(function (d, w, c) {
  w.ChatraID = "9iRKaD6dErHtazY4s";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");

const myTimeout = setTimeout(show, 25000);
function show() {
  var x = document.getElementById("showWhatsapp");
  if (x.style.visibility == "hidden") {
    x.style.cssText = `
    visibility:visible;
    opacity: 1;
  `;
  } else {
    x.style.cssText = `
    visibility:hidden;
    opacity: 0;
  `;
  }
}
function closeWhatsapp() {
  document.getElementById("showWhatsapp").style.cssText = `
  visibility:hidden;
  opacity: 0; 
  `;
}

const submitBtn = document.querySelector(".form-submit-btn");

if (submitBtn) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector("#NameHero").value;
    const email = document.querySelector("#EmailHero").value;
    const phoneNumber = document.querySelector("#NumberHero").value;
    const message = document.querySelector("#MessageHero").value;
    
    if (!name || !email || !phoneNumber || !message) {
      alert("Please Fill Up Every Fields")
    }
    // Form Content Validation
  
    else if (!handleEmailValidation(email)) {
      alert("Invalid Email Address")
    }
    else if (!handlePhoneValidation(phoneNumber)) {
      alert("Invalid Phone Number")
    }
    else {
      Email.send({
        SecureToken: "12f7607c-5485-4210-b851-bd317043bddb",
        To: "aadhyasharma469@gmail.com",
        From: "aadhyasharma469@cdrwriteraustralia.com",
        Subject: "New CDR Form Enquiry",
        Body:
          "Name: " +
          document.getElementById("NameHero").value +
          "<br /> Email: " +
          document.getElementById("EmailHero").value +
          "<br /> Number: " +
          document.getElementById("NumberHero").value +
          "<br /> Message: " +
          document.getElementById("MessageHero").value,
      }).then((message) => alert("Message Sent Successfuly"));
      submitHero.reset();
      return true;
    }
  
    
  });
}



  const submitCTA = document.querySelector('#submitCTA');
  if (submitCTA) {
    submitCTA.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("nameCTA").value;
      const email = document.getElementById("emailCTA").value;
      const phoneNumber = document.getElementById("numberCTA").value;
      const message = document.getElementById("messageCTA").value;
      if (!name || !email || !phoneNumber || !message) {
        alert("Please Fill Up Every Fields")
      }
      // Form Content Validation
      else if (!handleEmailValidation(email)) {
        alert("Invalid Email Address")
      }
      else if (!handlePhoneValidation(phoneNumber)) {
        alert("Invalid Phone Number")
      }
      else {
        Email.send({
          SecureToken: "12f7607c-5485-4210-b851-bd317043bddb",
          To: "aadhyasharma469@gmail.com",
          From: "aadhyasharma469@cdrwriteraustralia.com",
          Subject: "New CDR Form Enquiry",
          Body:
            "Name: " +
            document.getElementById("nameCTA").value +
            "<br /> Email: " +
            document.getElementById("emailCTA").value +
            "<br /> Number: " +
            document.getElementById("numberCTA").value +
            "<br /> Message: " +
            document.getElementById("messageCTA").value,
        }).then((message) => alert("Message Sent Successfuly"));
        submitCTA.reset();
      }
      
    });
  }



const submitFooter = document.querySelector('#submitFooter');
submitFooter.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Ss")
  const name = document.getElementById("nameFooter").value;
  const email = document.getElementById("emailFooter").value;
  const phoneNumber = document.getElementById("phoneFooter").value;
  const message = document.getElementById("messageFooter").value;
  
  if (!name || !email || !phoneNumber || !message) {
    alert("Please Fill Up Every Fields")
  }
  // Form Content Validation
  else if (!handleEmailValidation(email)) {
    alert("Invalid Email Address")
  }
  else if (!handlePhoneValidation(phoneNumber)) {
    alert("Invalid Phone Number")
  }
  else {
    Email.send({
      SecureToken: "12f7607c-5485-4210-b851-bd317043bddb",
      To: "aadhyasharma469@gmail.com",
      From: "aadhyasharma469@cdrwriteraustralia.com",
      Subject: "New CDR Form Enquiry",
      Body:
        "Name: " +
        document.getElementById("nameFooter").value +
        "<br /> Email: " +
        document.getElementById("emailFooter").value +
        "<br /> Number: " +
        document.getElementById("phoneFooter").value +
        "<br /> Message: " +
        document.getElementById("messageFooter").value,
    }).then((message) => alert("Message Sent Successfuly"));
    submitFooter.reset();
  }
  
});


//============= Manage table of content ============

// On Document loaded fetch all the h2 tags and then load that h2 tag into the table of content

// Issue: Due to single main.js file queryselector error is thrown on the get consultaton form and when blog is loaded eventLitener error is thrown.

// Possible Solution:
// 1. Create separate js file for handling the table of content or form handling

// ------------------- Code Starts Here---------------

// window.addEventListener("DOMContentLoaded", (e) => {
//   const contentContainer = document.querySelector('.blog-content');
// var headings = contentContainer.querySelectorAll("h2");

// const tableContent = document.querySelector('.tablecontent');

// const arr=[{id:'','title':''}];
//   for (i = 0; i < headings.length; i++) {
//     const id = headings[i].innerHTML.toLowerCase().trim().replace(/ /g, "-");
//     const formattedId = id.replace(/^a-zA-Z0-9]/g, '');
//     var title = headings[i].innerHTML.trim();
  
//     console.log("ss",formattedId)
//     const li = document.createElement("li");
//     const a = document.createElement("a");

//     a.setAttribute("href", "#", id);
//     a.innerHTML = title;

    
//     if (id != '' && title != "") {
//       arr.push({
//         id: formattedId.trim(),
//         title: title
//       })
//     }
//   }
  

// Print into <ul></ul> of the table of content
  
//  tableContent.innerHTML=arr.splice(1,arr.length).map((item,index)=>(
//             ` <li>
             
//                         <a href=${'#'+item.formattedId}> ${index+1} . ${item.title}</a>
//                       </li>`
//  )).join("")
  
//   console.log(arr)
// })



// Check if the URL has a trailing slash and remove it
if (window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
  const newURL = window.location.pathname.slice(0, -1) + window.location.search + window.location.hash;
  window.location.replace(newURL);
}
