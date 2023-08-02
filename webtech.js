
const Display1=document.querySelector("#Name")

const Location=document.querySelector("#Location")

function Selections2(string) {
  Location.value=string

}


const AddAfter=document.querySelector("#btn1")
const tble=document.getElementById("Mumbai1")
const tble1=document.getElementById("Delhi1")
const tble2=document.getElementById("Kolkata1")
       AddAfter.addEventListener("click",next)
let n=1;



  

function next() {
  let create=document.createElement("div")
  create.classList.add("number1")
  tble1.appendChild(create)
   let insert=document.getElementById("Name")
   const p= n++;
   create.textContent = `Parcel ${p}\n${insert.value}`;
   console.log(create.textContent);
   let loco=document.getElementById("Location")
  //  Display.value=create.value
if (loco.value==="Mumbai") {
  create.style.backgroundColor = "red";
  tble.appendChild(create)
  function red() {
    Display.value=create.innerText
    return;
  }
} else if (loco.value==="Kolkata") {
  create.style.backgroundColor = "rgb(76, 58, 236)";
  tble2.appendChild(create)
} if (loco.value==="Delhi") {
  create.style.backgroundColor = "yellow";
  tble1.appendChild(create)
}

}
let del = document.querySelector("#btn4");
let deldiv = document.querySelector(".mb");

del.addEventListener("click", dele);

function dele() {
  if (deldiv.hasChildNodes()) {
removeChild(deldiv.lastElementChild);
  }
}



var Display =document.querySelector("#Selected");
let view = document.querySelector(".mb");

view.forEach(element => {
  element.addEventListener("click", dis);
});

function dis() {
  Display.value = this.value;
}




let rep=document.querySelector("#btn3");
let view1 = document.querySelector(".mb");

rep.addEventListener("click", repl);
  