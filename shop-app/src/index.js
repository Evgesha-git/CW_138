import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../style/main.scss";

const root = document.getElementById("root");

const header = new Header().render();
const main = new Main().render();
const footer = new Footer().render();

root.append(header, main, footer);

const test = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
};

const {
    id,
    image,
    rating: { rate, count: c },
} = test;

console.log(c);
