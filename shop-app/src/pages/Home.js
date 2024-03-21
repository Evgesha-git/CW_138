export default class Home{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('container');
        this.elem.innerHTML = `<h1>Home</h1>`
    }

    render(){
        return this.elem;
    }
}