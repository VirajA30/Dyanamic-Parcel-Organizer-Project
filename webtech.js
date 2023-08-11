var AddAfter=document.getElementById("btn1")
var AddBefore=document.getElementById("btn2")
var Replace=document.getElementById("btn3")
var Delete=document.getElementById("btn4")
var ShowFinal=document.getElementById("btn6")
var selectedItemDiv;


var click = document.getElementById("Add");
click.addEventListener("click", function () {
  var div = document.createElement("div");

  var inputName = document.getElementById("Name").value;
  var inputLoc = document.querySelector("select").value;

  div.innerHTML = inputName;

  if (inputName == "") {
    alert("enter valid parcel name");
  } else {
    if (inputLoc == "Mumbai") {
      var new1 = document.querySelector(".Mumbai1");
      new1.append(div);
      div.classList.add("mum");
    } else if (inputLoc == "Delhi") {
      var new2 = document.querySelector(".Delhi1");
      new2.append(div);
      div.classList.add("delh");
    } else if (inputLoc == "Kolkata") {
      var new3 = document.querySelector(".Kolkata1");
      new3.append(div);
      div.classList.add("kol");
    }
  }
  div.addEventListener("click", function () {
    if (selectedItemDiv !== div) {
      if (selectedItemDiv) {
        deselectItem(selectedItemDiv);
      }
  
      selectItem(div);
    } else {
      deselectItem(selectedItemDiv);
    }
  });
  
  div.addEventListener("dblclick", function () {
    deselectItem(selectedItemDiv);
  });
  
  function selectItem(item) {
    selectedItemDiv = item;
  
    if (selectedItemDiv.classList.contains("mum" || "Mumbai1")) {
      setSelectValue("Mumbai");
    } else if (selectedItemDiv.classList.contains("delh" || "Delhi1")) {
      setSelectValue("Delhi");
    } else if (selectedItemDiv.classList.contains("kol" || "Kolkata1")) {
      setSelectValue("Kolkata");
    }
  
    selectedItemDiv.style.transform = "scale(1.5)";
    selectedItemDiv.style.border = "solid white";
  }
  
  function deselectItem(item) {
    if (!item) return;
  
    item.style.boxShadow = "none";
    item.style.borderColor = "initial";
    item.style.borderStyle = "none";
    item.style.borderWidth = "0";
    item.style.transform = "scale(1)";
    item.style.border = "none";
  
    selectedItemDiv = null;
    setSelectValue("");
  }
  
  function setSelectValue(value) {
    const select = document.querySelector("select");
    select.value = value;
    select.disabled = (value !== "");
  }

  var selecteditem = document.getElementById("Selected");
  selecteditem.textContent = inputName;

});
AddAfter.addEventListener("click", function () {
  if (selectedItemDiv) {
    var div = document.createElement("div");
    var inputName = document.getElementById("Name").value;
    var inputLoc = document.querySelector("select").value;

    div.innerHTML = inputName;

    if (inputName === "") {
      alert("Enter valid parcel name");
    } else {
      if (inputLoc == "Mumbai") {
        div.classList.add("mum");
      } else if (inputLoc == "Delhi") {
        div.classList.add("delh");
      } else if (inputLoc == "Kolkata") {
        div.classList.add("kol");
      }
    }
    selectedItemDiv.parentNode.insertBefore(div, selectedItemDiv.nextSibling);
    
    div.addEventListener("click", function () {
      if (selectedItemDiv !== div) {
        if (selectedItemDiv) {
          deselectItem(selectedItemDiv);
        }
    
        selectItem(div);
      } else {
        deselectItem(selectedItemDiv);
      }
    });
    
    div.addEventListener("dblclick", function () {
      deselectItem(selectedItemDiv);
    });
    
    function selectItem(item) {
      selectedItemDiv = item;
    
      if (selectedItemDiv.classList.contains("mum" || "Mumbai1")) {
        setSelectValue("Mumbai");
      } else if (selectedItemDiv.classList.contains("delh" || "Delhi1")) {
        setSelectValue("Delhi");
      } else if (selectedItemDiv.classList.contains("kol" || "Kolkata1")) {
        setSelectValue("Kolkata");
      }
    
      selectedItemDiv.style.transform = "scale(1.5)";
      selectedItemDiv.style.border = "solid white";
    }
    
    function deselectItem(item) {
      if (!item) return;
    
      item.style.boxShadow = "none";
      item.style.borderColor = "initial";
      item.style.borderStyle = "none";
      item.style.borderWidth = "0";
      item.style.transform = "scale(1)";
      item.style.border = "none";
    
      selectedItemDiv = null;
      setSelectValue("");
    }
    
    function setSelectValue(value) {
      const select = document.querySelector("select");
      select.value = value;
      select.disabled = (value !== "");
      
   
    }}})

    AddBefore.addEventListener("click", function () {
      if (selectedItemDiv) {
        var div = document.createElement("div");
        var inputName = document.getElementById("Name").value;
        var inputLoc = document.querySelector("select").value;
    
        div.innerHTML = inputName;
    
        if (inputName == "") {
          alert("Enter valid parcel name");
        } else {
          if (inputLoc == "Mumbai") {
            div.classList.add("mum");
          } else if (inputLoc == "Delhi") {
            div.classList.add("delh");
          } else if (inputLoc == "Kolkata") {
            div.classList.add("kol");
          }
        }
    
        selectedItemDiv.parentNode.insertBefore(div, selectedItemDiv);
    div.addEventListener("click", function () {
      if (selectedItemDiv !== div) {
        if (selectedItemDiv) {
          deselectItem(selectedItemDiv);
        }
    
        selectItem(div);
      } else {
        deselectItem(selectedItemDiv);
      }
    });
    
    div.addEventListener("dblclick", function () {
      deselectItem(selectedItemDiv);
    });
    
    function selectItem(item) {
      selectedItemDiv = item;
    
      if (selectedItemDiv.classList.contains("mum" || "Mumbai1")) {
        setSelectValue("Mumbai");
      } else if (selectedItemDiv.classList.contains("delh" || "Delhi1")) {
        setSelectValue("Delhi");
      } else if (selectedItemDiv.classList.contains("kol" || "Kolkata1")) {
        setSelectValue("Kolkata");
      }
    
      selectedItemDiv.style.transform = "scale(1.5)";
      selectedItemDiv.style.border = "solid white";
    }
    
    function deselectItem(item) {
      if (!item) return;
    
      item.style.boxShadow = "none";
      item.style.borderColor = "initial";
      item.style.borderStyle = "none";
      item.style.borderWidth = "0";
      item.style.transform = "scale(1)";
      item.style.border = "none";
    
      selectedItemDiv = null;
      setSelectValue("");
    }
    
    function setSelectValue(value) {
      const select = document.querySelector("select");
      select.value = value;
      select.disabled = (value !== "");
      
   
    }}})

    Delete.addEventListener("click", function () {
      if (selectedItemDiv) {
        selectedItemDiv.remove(); 
        selectedItemDiv = null;
        const selectedItem = document.getElementById("Selected");
        selectedItem.textContent = "";
      }
    });
    Replace.addEventListener("click", function() {
    var inputName = document.getElementById("Name").value;
      selectedItemDiv.innerHTML = inputName;
    });
    function getDataObjects() {
      var dataObjects = [];
      
      var mumDivs = document.getElementsByClassName("Mumbai1")[0].getElementsByTagName("div");
      var delhDivs = document.getElementsByClassName("Delhi1")[0].getElementsByTagName("div");
      var kolDivs = document.getElementsByClassName("Kolkata1")[0].getElementsByTagName("div");
      
      for (var i = 0; i < mumDivs.length; i++) {
        var obj = {
          name: mumDivs[i].innerHTML,
          location: "Mumbai"
        };
        dataObjects.push(obj);
      }
      
      for (var i = 0; i < delhDivs.length; i++) {
        var obj = {
          name: delhDivs[i].innerHTML,
          location: "Delhi"
        };
        dataObjects.push(obj);
      }
      
      for (var i = 0; i < kolDivs.length; i++) {
        var obj = {
          name: kolDivs[i].innerHTML,
          location: "Kolkata"
        };
        dataObjects.push(obj);
      }
      
      return dataObjects;
    }
    
    ShowFinal.addEventListener("click", showFinalData);
    function showFinalData() {
      console.log("Current data objects:");
      var dataObjects = getDataObjects(); 
      console.log(dataObjects);
    }