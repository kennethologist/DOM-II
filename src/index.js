import './less/index.less'

// Your code goes here!
const logoHeading = document.querySelector(".logo-heading");
//1. mouseover
logoHeading.addEventListener("mouseover", (evt) => {
    logoHeading.style = "background-color: red";
});
//2. mouseout
logoHeading.addEventListener("mouseout", (evt) => {
    logoHeading.style = "";
});

//3. click
const signupButtons = document.querySelectorAll(".btn");
console.log(signupButtons);
signupButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("Button clicked");
        e.preventDefault = true;
    });
});

//4. load
window.onload = function () {
    console.log("Document loaded.");
}

//5. dblclick
document.querySelectorAll("h2").forEach(item => {
    item.addEventListener("dblclick", (e) => {
        e.target.innerHTML = "";
    })
});

//6. hover
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("hover", e => {
        e.target.style = "color:orange";
    });
});

//7. scroll
document.addEventListener("scroll", () => {
    console.log("scrolling...scrolling");
});

//8. keydown
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        //window.rel
    }
});