
let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");

let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let InputValue = elInput.value;
    let piyodaSoat = Math.floor(InputValue / 3.6);
    let piyodaMinut = (InputValue - (piyodaSoat * 3.6)).toFixed(1);
    let piyodahisobla = (3.6 / piyodaMinut).toFixed(1);
    let velosipedSoat = Math.floor(InputValue / 20.1);
    let velosipedMinut = (InputValue - (velosipedSoat * 20.1));
    let velosipedHisobla = (20.1 / velosipedMinut).toFixed(1);
    let mowinaSoat = Math.floor(InputValue / 70);
    let mowinaMinut = (InputValue - (mowinaSoat * 70));
    let mowinaHisobla = (70  / mowinaMinut).toFixed(1);
    let samalyotSoat = Math.floor(InputValue /800);
    let samalyotMinut = (InputValue - (samalyotSoat * 800));
    let samalyotHisobla = (800 / mowinaMinut).toFixed(1);




    text1.textContent = piyodaSoat + "h " + (60 / piyodahisobla).toFixed(0) + "min";
    text2.textContent = velosipedSoat + "h " + (60 / velosipedHisobla).toFixed(0) + "min";
    text3.textContent = mowinaSoat + "h " + (60 / mowinaHisobla).toFixed(0) + "min";
    text4.textContent = samalyotSoat + "h " + (60 / samalyotHisobla).toFixed (0) + "min";
})
