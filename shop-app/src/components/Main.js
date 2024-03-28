import cart from "../pages/Cart";

export default class Main {
    constructor() {
        this.main = document.createElement("main");
        // this.main.innerHTML = `<h1>Main 2</h1>`
        this.routeHandler = this.routeHandler.bind(this);
        this.router();
    }

    async routeHandler() {
        console.log(this);
        this.main.innerHTML = "";
        let hash = window.location.hash.slice(1);
        let id = null;

        if (!hash) hash = "Home";

        if (hash.indexOf('_') !== -1){
            let index = hash.indexOf('_');
            id = hash.slice(index + 1);
            hash = hash.slice(0, index);
        }

        if (hash === "cart") {
            const item = cart.render();
            this.main.append(item);
        } else {
            const module = await import(`../pages/${hash}.js`);
            const Item = module.default;
            const item = new Item(id).render();
            this.main.append(item);
        }
    }

    router() {
        window.addEventListener("hashchange", this.routeHandler);
        window.addEventListener("load", this.routeHandler);
    }

    render() {
        return this.main;
    }
}
