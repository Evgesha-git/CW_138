class Note {
    constructor(data) {
        this.data = data;
    }

    edit(data) {
        this.data = { ...this.data, ...data }; // {...{title: 'title1', content: 'content1'}, ...{content: 'edit content1'}} -> {title: 'title1', content: 'edit content1'}
    }
}

export default Note;