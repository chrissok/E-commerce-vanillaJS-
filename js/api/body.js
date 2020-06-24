import {getProducts} from './products.js'
import {getSlider} from './slider.js';
import {getFilter} from './filter.js'

export function getBody(){

fetch('http://remote.fizzmod.com/body.json')
.then(response => response.json()
)
.then(content =>{
    
    getSlider(content.slides);

    getProducts(content.products, content.filters);

    
})
.catch(err =>{
    console.log('Hubo un problema con la petición Fetch:' + err.message);
    });
}