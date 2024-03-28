import { getApiDataID } from "../utils/api";
import Button from "../components/Button";

export default class Product{
    constructor(id){
        this.id = id;
        this.item = document.createElement('div');
        this.item.classList.add('container');
    }

    async createItem(){
        const data = await getApiDataID(this.id);
        const left = document.createElement('div');
        const right = document.createElement('div');
        left.innerHTML = `
            <div className="img">
                <img src="${data.image}" alt="img" />
            </div>
        `;

        const category = document.createElement('h3');
        const productName = document.createElement('h2');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const rating = document.createElement('div');
        const rate = document.createElement('span');
        const count = document.createElement('span');

        category.innerHTML = data.category;
        productName.innerHTML = data.title;
        description.innerHTML = data.description;
        price.innerHTML = data.price;
        rate.innerHTML = data.rating.rate;
        count.innerHTML = data.rating.count;
        rating.append(rate, count);

        right.append(category, productName, description, price, rating, new Button(data).render());
        this.item.append(left, right);
    }

    render(){
        this.createItem();
        return this.item;
    }
}