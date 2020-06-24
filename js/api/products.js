import {descuento} from '../utils/descuento.js'
import {getFilter} from './filter.js';

export function getProducts(products, filters){

let prodImgs = [];
let discProduct = [];
const productContain = document.getElementById('product-grid');

products.forEach((obj,index) =>{

    let product = document.createElement('a');

    product.href = `${obj.href}`;

    const [{value : marca} , {value : categoria}] = obj.attributes;

    product.innerHTML = `<div id="${marca} ${categoria}"><img src="img/${obj.image}"><div class="product-data">
    <p class="product-name">${obj.title}</p><p class="price-list" id="list${index}">$${obj.price.listPrice}</p>
    <p class="price-disc">$ ${obj.price.sellingPrice}</p></div></img>`;

    productContain.insertAdjacentElement('afterbegin', product);

    prodImgs[index] = document.getElementById(`${marca} ${categoria}`);

    discProduct[index] = document.createElement('div');

    discProduct[index].className = `discount`;

    discProduct[index].setAttribute("id", `discount${obj.id}`);

    discProduct[index].innerHTML = `<p>${descuento(obj.price.listPrice,obj.price.sellingPrice)}%</p>`;

    prodImgs[index].insertBefore(discProduct[index],prodImgs[index].childNodes[0]);

    prodImgs[index].style.display = 'flex';
    prodImgs[index].style.flexDirection = 'column';

    if(descuento(obj.price.listPrice,obj.price.sellingPrice) === 0){
        discProduct[index].style.display = 'none';
        
        
    }else{
        discProduct[index].style.display = 'block'
        document.getElementById(`list${index}`).style.display = 'block';
    }
    
})

    getFilter(filters,prodImgs);
}