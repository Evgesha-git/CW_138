import Note from './Note.js';

class Notes {
    constructor() {
        this.notes = []; // [Note, Note, Note, .., Note];
        // this.id = 0
    }

    add(data) {
        if (data.title === "" || data.content === "") return;

        const note = new Note(data);
        if (!note.data.id) {
            const id = Date.now();
            note.edit({ id });
        }
        this.notes.push(note);
        return note;
    }

    remove(id) {
        this.notes = this.notes.filter((note) => note.data.id !== id);
    }

    edit(id, data) {
        const note = this.notes.find((note) => note.data.id === id);
        note.edit(data);
    }

    set store(notes) {
        const data = JSON.stringify(notes);
        localStorage.setItem("notes", data); //localStorage.setItem('notes', JSON.stringify(notes));
    }

    get store() {
        const data = localStorage.getItem("notes");
        return JSON.parse(data);
    }

    setCookie(maxAge) {
        const options = {
            path: "/",
            "max-age": maxAge,
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent("notes") + "=" + encodeURIComponent("");

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    getCookie() {
        const name = "notes";
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return matches ? true : false;
    }

    clearStore() {
        localStorage.removeItem("notes");
    }

    async getApiData() {
        const resp = await fetch("http://localhost:3000/api/notes");
        const data = await resp.json();
        return data;
    }

    async putApiData(id, data) {
        const resp = await fetch("http://localhost:3000/api/notes", {
            method: "PUT",
            headers: { Acceps: "application/json", "Content-type": "application/json" },
            body: JSON.stringify({
                id: id,
                data: data,
            }),
        });
    }

    setApiData(note) {
        const data = {
            data: note.data,
        };
        fetch("http://localhost:3000/api/notes", {
            method: "POST",
            headers: { Acceps: "application/json", "Content-type": "application/json" },
            body: JSON.stringify(data),
        });
    }

    removeApiNote(id) {
        fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "DELETE",
            headers: { Acceps: "application/json", "Content-type": "application/json" },
        });
    }
}

export default Notes;