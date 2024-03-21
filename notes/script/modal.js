const modal = () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
    `;
    document.body.append(modal);
}

export default modal;

const a = 10
const b = 20;

export {a, b};