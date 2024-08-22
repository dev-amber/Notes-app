const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

const savenotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
    )
    //console.log(data);
    localStorage.setItem("notes",JSON.stringify(data));
}
addbtn.addEventListener("click", function () {
    addnote();
});
(
    function(){
const lsnote=JSON.parselocalStorage.getItem("notes");
lsnote.forEach(
    (lsnote)=>{
        addnote(lsnote);
    }
)
    }

)()


const addnote = () => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="tool"> 
    <i class="trash fas fa-trash"></i>
    <i class="save fas  fa-save"></i>
    </div>
    <textarea ></textarea>
    `;
    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
    });
    note.querySelector(".save").addEventListener("click",function(){
        savenotes();
    });
    savenotes();
    main.appendChild(note);
}
