import '../../style/shop.scss';
import ShopItem from '../components/ShopItem';
import Button from '../components/Button';
import { getData } from '../utils/api';

export default class Shop{
    constructor(){
        this.elem = document.createElement('div');
        this.elem.classList.add('container');
    }

    async getContent(){
        const data = await getData();
        if (!data) return;
        const header = document.createElement('h2');
        header.classList.add('title');
        header.innerHTML = 'Shop';
        const items = document.createElement('div');
        items.classList.add('items');

        data.forEach(data => {
            const item = new ShopItem(data, new Button(data).render()).render();
            items.append(item);
        });

        this.elem.append(header, items)
    }

    render(){
        this.getContent();
        return this.elem;
    }
}