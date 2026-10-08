/* export { meny } from "./src/components/Array.jsx" */
import spaghettiImg from "./Images/Spaghetti.jpg"
import kyllingImg from "./Images/KyllingSuppe.jpg"
import pizzaImg from "./Images/Pizza.jpg"
import sushiImg from "./Images/Sushi-mix.jpg"
import saladImg from "./Images/Salad.jpg"
import brownieImg from "./Images/Brownie.jpg"
import tacoImg from "./Images/Taco.jpg"
import pancakeImg from "./Images/Pancake.jpg"
import shrimpImg from "./Images/Shrimp.jpg"
import ribeyeImg from "./Images/ribeye.jpg"

/* const Img = module[`../Images/${title}`]; */


export const meny = [
  {
    id: 1,
    tittel: "Spaghetti bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
    img: spaghettiImg,
  },
  {
    id: 2,
    tittel: "Kremet kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
    img: kyllingImg,
  },
  {
    id: 3,
    tittel: "Margarita pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
    img: pizzaImg,
  },
  {
    id: 4,
    tittel: "Sushi-mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
    img: sushiImg,
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
    img: saladImg,
  },
  {
    id: 6,
    tittel: "Brownie med is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
    img: brownieImg,
  },
  {
    id: 7,
    tittel: "Taco-tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
    img: tacoImg,
  },
  {
    id: 8,
    tittel: "Pannekaker med syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
    img: pancakeImg,
  },
  {
    id: 9,
    tittel: "Reker med sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
    img: shrimpImg,
  },
  {
    id: 10,
    tittel: "Entrecôte med grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, asparges, poteter, peppersaus",
    kategori: "Hovedrett",
    img: ribeyeImg,
  },
];