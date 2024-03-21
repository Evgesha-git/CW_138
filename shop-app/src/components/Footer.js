export default class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.innerHTML = `
            <div class="container">
                <h1>FOOTER</h1>
            </div>
        `
    }

    render(){
        return this.footer;
    }
}