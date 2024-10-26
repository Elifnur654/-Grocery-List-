// var text="";
// list =()=>{
//   const userInput=document.getElementById('userInput');
//   document.getElementById("allİtem").textContent=userInput;
// }
const list=document.getElementsByClassName("list")[0];
const pencil=document.getElementById('pencil');
const allİtem= document.getElementById("allİtem");
const userInput=document.getElementById('userInput');
pencil.addEventListener("click",function(){
  allİtem.innerHTML='';
})
userInput.addEventListener("keydown",function(event){
  if(event.key =="Enter")
    addİtem();
});
function  addİtem(){
var h2=document.createElement("h2");
h2.innerHTML= "-" +userInput.value;
h2.addEventListener("click",function(){
  h2.style.textDecoration="line-through";
})
allİtem.insertAdjacentElement("beforeend",h2);
userInput.value="";
}