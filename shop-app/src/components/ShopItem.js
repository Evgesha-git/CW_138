import '../../style/shopItem.scss';

export default class ShopItem{
    constructor (data, button){
        this.item = document.createElement('div');
        this.item.classList.add("shop__item");
        this.button = button;
        this.data = data;
    }

    createItem(){
        const title = document.createElement('h3');
        title.classList.add('item__title');
        title.innerHTML = this.data.title;
        const price = document.createElement('span');
        price.classList.add('item__price');
        price.innerHTML = this.data.price;
        const img = document.createElement('img');
        img.setAttribute('src', this.data.image);
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img__container');
        const imgLinck = document.createElement('a');
        imgLinck.setAttribute('href', `#Product_${this.data.id}`);
        imgLinck.append(img);
        imgContainer.append(imgLinck);
        this.item.append(title, imgContainer, price, this.button);
    }

    render(){
        this.createItem();
        return this.item;
    }
}