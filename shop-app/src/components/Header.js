import { widget } from "../pages/Cart";

export default class Header {
    constructor() {
        this.header = document.createElement('hreader');
        this.container = document.createElement('div');
        this.container.classList.add('container');
        this.widgetContainer = document.createElement('div');
        this.widgetContainer.classList.add('widget');
        this.widgetContainer.append(widget);
        this.container.innerHTML = `
                <div className="logo"><img src="https://via.placeholder.com/50" alt="logo" /></div>
                <nav>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Shop">Shop</a></li>
                        <li><a href="#About">About</a></li>
                    </ul>
                </nav>
        `;

        this.container.append(this.widgetContainer);
        this.header.append(this.container);
    }

    render(){
        return this.header;
    }
}