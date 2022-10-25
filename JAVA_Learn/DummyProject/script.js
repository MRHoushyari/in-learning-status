document.querySelector("#main-title").addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("myh",e.target.id)
});

document.querySelector("header").addEventListener("dragover",(e)=>{
    e.preventDefault()
});

document.querySelector("header").addEventListener("drop",(e)=>{
    e.target.appendChild(document.getElementById(e.dataTransfer.getData("myh")))});






// document.querySelector("#main-title")
//     .addEventListener("dragstart",(e)=>{
//         // console.log(e)
//         e.dataTransfer.setData('text/plain', e.target.id)
//     })
//     document.querySelector("header").addEventListener("dragenter",(e)=>{
//         e.preventDefault = true;})
     
//     document.querySelector("header").addEventListener("dragover",(e)=>{
//         e.preventDefault = true});
    
// document.querySelector("header")
//     .addEventListener("drop",(e)=>{
//         // e.defaultPrevented = true;
//         // document.querySelector("header").appendChild(e.dataTransfer.getData('text/plain', e.target.id));
//         const id = e.dataTransfer.getData('text/plain');
//         const draggable = document.getElementById(id);
//         // add it to the drop target
//         e.target.appendChild(draggable);
//     })
