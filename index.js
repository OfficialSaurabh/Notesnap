const getById = (id) => {
  return document.getElementById(id);
};
const addTitleId = "add-note-title";
const addContentId = "add-note-content";
const addNoteBtnId = "add-note-btn";

let allNotes;
let errorMessage = "";
// localStorage.clear();

const addNoteTitle = getById(addTitleId);
const addNoteContent = getById(addContentId);
const addNoteBtn = getById(addNoteBtnId);

displayNotes();

addNoteBtn.addEventListener("click", () => {
  let errorDiv = document.querySelector("#error-message");
  errorDiv.innerText = "";
  if (addNoteContent.value) {
    addNote();
  } else {
    errorDiv.innerText =
      "Note contents are empty. Add content in order to save note.";
  }
});

function addNote() {
  console.log("Add note Button clicked");
  let notes = localStorage.getItem("notes");
  if (notes) {
    allNotes = JSON.parse(notes);
  } else {
    allNotes = [];
  }
  allNotes.push({ title: addNoteTitle.value, content: addNoteContent.value });
  localStorage.setItem("notes", JSON.stringify(allNotes));
  addNoteTitle.value = "";
  addNoteContent.value = "";
  console.log(allNotes);
  displayNotes();
}

function displayNotes() {
  let notesContainer = getById("notes");
  let noteCard = "";
  let notes = localStorage.getItem("notes");
  if (notes) {
    allNotes = JSON.parse(notes);
  } else {
    allNotes = [];
  }
  allNotes.forEach((element, index) => {
    noteCard =
      noteCard +
      `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="note-title">${element?.title ?? ""}</h5>
                    <p class="note-content"> ${element?.content ?? ""}</p>
                    <!-- <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button> -->
                </div>
            </div>`;
    notesContainer.innerHTML = noteCard;
  });
}

