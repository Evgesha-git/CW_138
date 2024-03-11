class User {
    // #age;
    constructor(name, lastName, age){
        this.name = name;
        this._lastName = lastName;
        this.age = age;
        this.count = 0;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    set lastName (val){
        this._lastName = val;
    }

    get lastName (){
        return this._lastName;
    }
}


const user = new User();

console.log(user);

class Admin extends User {
    constructor(name, lastName, age, status){
        super(name, lastName, age);
        this.status = status;
    }

    getName(){
        return 'Имя: ' + super.getName(); //uper.getName() --> User.prototype.getName.call(this);
    }
}

const admn = new Admin('Petr', 'Petrov', 44, 1);

console.log(admn.getName());

/**
 * Note - описание одной заметки
 * Notes - класс для работы с заметками
 * NoteUI - класс для определения графического интерфейса
 */

class Note{
    constructor(data){ // {title, content}
        // if (data.title.length > 0) this.data = data;
        this.data = data;
    }

    edit(data) { // {title, content}
        // this.data = data;
        // Object.assign(this.data, data);
        this.data = {...this.data, ...data}; // {...{title: 'title1', content: 'content1'}, ...{content: 'edit content1'}} -> {title: 'title1', content: 'edit content1'}
    }
}

// const note = new Note({title: 'title1', content: 'content1'});

// [...[1, 2, 3,], ...[4, 5, 6]] -> [1, 2, 3, 4, 5, 6]

class Notes{
    constructor(){
        this.notes = []; // [Note, Note, Note, .., Note];
        // this.id = 0
    }

    add (data){
        if (data.title === '' || data.content === '') return;
        const note = new Note(data);
        const id = Date.now();
        note.edit({id});
        this.notes.push(note);
    }

    remove(id){
        this.notes = this.notes.filter(note => note.data.id !== id);
    }

    edit(id, data){
        const note = this.notes.find(note => note.data.id === id);
        note.edit(data);
    }
}

const notes = new Notes()
// notes.add({title: 'title1', content: 'content1'});
// notes.add({title: 'title2', content: 'content2'});
// notes.add({title: 'title3', content: 'content3'});

class NoteUI extends Notes{
    constructor(selector){
        super();
        this.container = document.querySelector(selector);
        this.notesContainer = document.createElement('div');
        this.init();
    }

    init(){
        const form = document.createElement('form');
        const title = document.createElement('input');
        title.setAttribute('type', 'text');
        const content = document.createElement('textarea');
        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.innerHTML = 'Add Note';
        form.append(title, content, submit);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = {
                title: title.value,
                content: content.value,
            }
            this.add(data);
            this.render();
            title.value = '';
            content.value = '';
        });

        this.notesContainer.classList.add('notes');
        this.container.append(form, this.notesContainer);
        this.render();
    }

    render(){
        if (this.notes.length === 0){
            this.notesContainer.innerHTML = `<h2 class='title'>Список заметок пуст</h2>`;
            return;
        }
        this.notesContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = false;
            const noteItem = document.createElement('div');
            noteItem.classList.add('item');
            const title = document.createElement('h3');
            const content = document.createElement('p');
            const remove = document.createElement('button');
            remove.classList.add('remove');
            const edit = document.createElement('button');
            edit.classList.add('edit');
            remove.innerHTML = 'Remove';
            edit.innerHTML = 'Edit';
            title.innerHTML = note.data.title;
            content.innerHTML = note.data.content;

            remove.addEventListener('click', () => {
                this.remove(note.data.id);
                this.render();
            });

            edit.addEventListener('click', () => {
                if (flag){
                    edit.innerHTML = 'Edit';
                    title.contentEditable = false;
                    content.contentEditable = false;
                    const data = {
                        title: title.innerText,
                        content: content.innerText,
                    }
                    this.edit(note.data.id, data);
                    this.render();
                    flag = !flag;
                } else {
                    edit.innerHTML = 'Save';
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

new NoteUI('#root');