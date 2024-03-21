export default class Shop{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('container');
        this.elem.innerHTML = `<h1>Shop</h1>`
    }

    render(){
        return this.elem;
    }
}