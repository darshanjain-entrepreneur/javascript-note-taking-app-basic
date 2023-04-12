const addBtn = document.querySelector('#addBtn');

const main = document.querySelector('#main');

const saveNotes = () => {

    const notes = document.querySelectorAll(".note textarea");
 
    const data = [];
    notes.forEach((note) => {
       data.push(note.value);
    })

if(data.length === 0){
    localStorage.removeItem("notes")
}else{
    localStorage.setItem("notes" , JSON.stringify(data))
}

   
}


addBtn.addEventListener('click' , () => {
    addNote()
})

const addNote = (text= "") => {

    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
    <i class=" save fas fa-save"></i>
    <i class="  trash fas fa-trash"></i>
</div>
<textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener('click' ,() => {
         
        note.remove();
        saveNotes()
    })

note.querySelector(".save").addEventListener('click' , () => {
  note.querySelector(".save").classList.add("change");
    saveNotes()
})

note.querySelector('textarea').addEventListener('focusout' , () => {
    saveNotes()
})

    main.appendChild(note);
saveNotes()

}

(
function(){

    const lsnotes = JSON.parse(localStorage.getItem('notes'));
   if(lsnotes == null){
addNote()
   }else{
    lsnotes.forEach((lsnote) => {
       
        addNote(lsnote)
})
   }


})()