


let btn=document.querySelector(".form-btn");
let fro00m=document.querySelector(".formvallue");
let todolist=document.querySelector(".todolist");
let removevallue = document.querySelector(".removevallue");
let sub=document.querySelector("#sub");

btn.addEventListener("click", (e)=>{
    e.preventDefault;
   if(fro00m.value==''){
    alert("Please fill Up Form")
   }else{
    let li = document.createElement("li");
    li.innerHTML=fro00m.value;
    let span=document.createElement("span");
    span.id="sub";
    span.innerHTML="\u00d7";
    li.appendChild(span);


    todolist.appendChild(li);
   }
   savedata();
})



todolist.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        // savedata();
        savedata()
        // // let head=document.createElement("h1");
        // // head.innerHTML="The Work Done Succesfully";
        // // removevallue.appendChild(head);
        // let ullist=document.createElement("ul")
        //     let moveli=document.querySelector("li")
        //      moveli.innerHTML=fro00m.value;
        //      ullist.appendChild(moveli);
        //    removevallue.appendChild(ullist);
           
        
    }
} )



function savedata(){
    localStorage.setItem("Data", todolist.innerHTML);

}

function showItem() {
    todolist.innerHTML=localStorage.getItem("Data");
}
showItem() ;







