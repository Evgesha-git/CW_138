import { setItemCart, removeItemCart, getItemStatus } from "../pages/Cart";

class Button {
    constructor(product) {
        this.product = product;
        this.button = document.createElement("button");
        this.button.innerHTML = getItemStatus(this.product.id) ? 'Remove' : 'Add';
    }

    addEvent() {
        this.button.addEventListener("click", () => {
            if (getItemStatus(this.product.id)) {
                removeItemCart(this.product.id);
                this.button.innerHTML = 'Add';
            } else {
                setItemCart(this.product);
                this.button.innerHTML = 'Remove';
            }
        });
    }

    render() {
        this.addEvent();
        return this.button;
    }
}

export default Button;
