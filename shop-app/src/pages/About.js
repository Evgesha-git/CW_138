export default class About{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('container');
        this.elem.innerHTML = `<h1>About</h1>`
    }

    render(){
        return this.elem;
    }
}