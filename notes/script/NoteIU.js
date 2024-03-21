import Notes from './Notes.js';


export default class NoteUI extends Notes {
    constructor(selector) {
        super();
        this.container = document.querySelector(selector);
        this.notesContainer = document.createElement("div");
        this.init();
    }

    async init() {
        const form = document.createElement("form");
        const title = document.createElement("input");
        title.setAttribute("type", "text");
        const content = document.createElement("textarea");
        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.innerHTML = "Add Note";
        form.append(title, content, submit);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = {
                title: title.value,
                content: content.value,
            };
            const note = this.add(data);
            this.setApiData(note);
            this.store = this.notes;
            this.setCookie(3600000);
            this.render();
            title.value = "";
            content.value = "";
            import('./modal.js')
                .then((module) => {
                    console.log(module);
                    module.default();
                })
                .catch((err) => {
                    console.log(err);
                });
        });

        this.notesContainer.classList.add("notes");
        this.container.append(form, this.notesContainer);

        if (!this.getCookie()) {
            this.clearStore();
        }

        if (this.store) {
            this.store.forEach((note) => this.add(note.data));
        }

        if (!this.store) {
            const notesServer = await this.getApiData();
            notesServer.forEach((data) => {
                if (!this.notes.some((note) => note.data.id === data.id)) {
                    this.add(data);
                }
            });
        }

        this.render();
    }

    render() {
        if (this.notes.length === 0) {
            this.notesContainer.innerHTML = `<h2 class='title'>Список заметок пуст</h2>`;
            return;
        }
        this.notesContainer.innerHTML = "";
        this.notes.forEach((note) => {
            let flag = false;
            const noteItem = document.createElement("div");
            noteItem.classList.add("item");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            const remove = document.createElement("button");
            remove.classList.add("remove");
            const edit = document.createElement("button");
            edit.classList.add("edit");
            remove.innerHTML = "Remove";
            edit.innerHTML = "Edit";
            title.innerHTML = note.data.title;
            content.innerHTML = note.data.content;

            remove.addEventListener("click", () => {
                this.remove(note.data.id);
                this.render();
                this.removeApiNote(note.data.id);
                this.store = this.notes;
            });

            edit.addEventListener("click", () => {
                if (flag) {
                    edit.innerHTML = "Edit";
                    title.contentEditable = false;
                    content.contentEditable = false;
                    const data = {
                        title: title.innerText,
                        content: content.innerText,
                    };
                    this.edit(note.data.id, data);
                    this.putApiData(note.data.id, data);
                    this.store = this.notes;
                    this.render();
                    flag = !flag;
                } else {
                    edit.innerHTML = "Save";
                    title.contentEditable = true;
                    content.contentEditable = true;
                    flag = !flag;
                }
            });

            noteItem.append(title, content, remove, edit);
            this.notesContainer.append(noteItem);
        });
    }
}

let a = 1;
let b = 2;

export {a};
export {b as b1};

