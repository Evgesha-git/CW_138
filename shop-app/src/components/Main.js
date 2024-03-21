export default class Main{
    constructor() {
        this.main = document.createElement('main');
        // this.main.innerHTML = `<h1>Main 2</h1>`
        this.routeHandler = this.routeHandler.bind(this);
        this.router()
    }

    async routeHandler() {
        console.log(this);
        this.main.innerHTML = '';
        let hash = window.location.hash.slice(1);

        if (!hash) hash = 'Home';

        const module = await import(`../pages/${hash}.js`);

        console.log(module);
        const Item = module.default
        const item = new Item().render();
        this.main.append(item);
    }

    router() {
        window.addEventListener('hashchange', this.routeHandler)
        window.addEventListener('load', this.routeHandler)
    }

    render(){
        return this.main;
    }
}