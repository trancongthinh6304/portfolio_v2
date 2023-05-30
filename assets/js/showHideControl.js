var section_states = Array(6).fill(false);
section_states[5] = true;  // main-section by default

console.log(section_states);

var section_elements = [
    document.querySelectorAll(".about-me-content"), 
    document.querySelectorAll(".education-content"), 
    document.querySelectorAll(".work-exp-content"), 
    document.querySelectorAll(".personal-projs-content"), 
    document.querySelectorAll(".technical-skills-content"),
    document.querySelectorAll(".main-page-content")
];

var btns = [
    document.querySelector("#js-about-me-btn"), 
    document.querySelector("#js-education-btn"), 
    document.querySelector("#js-work-exp-btn"), 
    document.querySelector("#js-personal-projs-btn"), 
    document.querySelector("#js-technical-skills-btn"),
    // document.querySelectorAll(".main-page-content")
];

function updatePage() {
    for (var i = 0; i < section_states.length; i++) {
        if (section_states.at(i)) {
            section_elements.at(i).forEach(function (element, index) {
                element.classList.remove("hide");
            });
        }
        else {
            section_elements.at(i).forEach(function (element, index) {
                element.classList.add("hide");
            });
        }
    }
    console.log(section_states);
};

updatePage();

btns.forEach(function(element, index) {
    element.addEventListener("click", function(e) {
        section_states.fill(false);
        section_states[index] = true;
        updatePage();
    })
});