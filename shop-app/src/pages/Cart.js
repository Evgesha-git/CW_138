import ShopItem from "../components/ShopItem";

class Cart{
    constructor(){
        this.products = [];
        this.item = document.createElement('div');
        this.widgetItem = document.createElement('span');
        this.removeItemCart = this.removeItemCart.bind(this);
        this.setItemCart = this.setItemCart.bind(this);
        this.getItemStatus = this.getItemStatus.bind(this);
    }

    setItemCart(produt){
        produt.count = 1;
        this.products.push(produt);
        this.widget();
    }

    removeItemCart(id){
        this.products = this.products.filter(item => item.id !== id);
        this.widget();
    }

    getItemStatus(id){
        return this.products.some(item => item.id === id);
    }

    widget(){
        let count = this.products.reduce((count, item) => count += 1 * item.count, 0);
        let price = this.products.reduce((price, item) => price += item.price * item.count, 0).toFixed(2);
        this.widgetItem.innerHTML = `<a href="#cart">${count} | $ ${price}</a>`;
        return this.widgetItem;
    }

    createCart(){
        this.item.innerHTML = '';
        const title = document.createElement('h2');
        title.innerHTML = 'Корзина товаров';
        this.item.append(title);
        if (this.products.length === 0){
            const p = document.createElement('p');
            p.innerHTML = 'Корзина пуста';
            this.item.append(p);
        } else {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('cart__items');
            this.products.forEach(product => {
                const removeButton = document.createElement('bitton');
                removeButton.classList.add('cart__remove');
                removeButton.innerHTML = '&#215;';
                removeButton.addEventListener('click', () => {
                    this.removeItemCart(product.id);
                    this.createCart();
                });
                const item = new ShopItem(product, removeButton).render();
                itemContainer.append(item);
            });
            this.item.append(itemContainer);
        }
    }

    render(){
        this.createCart();
        return this.item;
    }
}

const cart = new Cart();
const setItemCart = cart.setItemCart;
const removeItemCart = cart.removeItemCart;
const getItemStatus = cart.getItemStatus;
const widget = cart.widget();

export default cart;
export {setItemCart, removeItemCart, widget, getItemStatus};