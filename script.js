"use strict"
let text = document.getElementsByClassName("text")[0]
let lists =document.querySelector("#list");
let image =document.querySelector("#image");
let btnNo = document.querySelector("#no");
let btnYes = document.querySelector("#yes");
let loveText =document.querySelector("#loveText");
function showText(){
 text.innerHTML = "I Love you💕"
}
let no =0;
function addNewlist(){
    let listItem = document.createElement("li")
    listItem.innerText = "New list item"
    lists.appendChild(listItem)
    no++;
    console.log("no",no)
}
function removelist(){
    let lastlistItem = document.querySelectorAll("li")[no]
    lists.removeChild(lastlistItem)
    no--;
}
btnNo.addEventListener("click", function(){
 loveText.innerHTML = "Oh no I'm so sad😢"
 image.setAttribute("src",
    "https://i.pinimg.com/originals/6b/01/f6/6b01f69a75c0c8ecc130db410c80eeeb.gif"
);
});
btnYes.addEventListener("click", function(){
    loveText.innerHTML = "Yes i love you too❤💕"
    image.setAttribute("src",
       "https://i.pinimg.com/originals/f4/44/a4/f444a402438987bac97a6a74921448ef.gif"
   );
   });
