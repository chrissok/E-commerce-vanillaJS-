import {getCategories} from './api/categories.js'
import {getBody} from './api/body.js'

document.addEventListener("DOMContentLoaded",init);

function init(){

 getCategories();

 getBody();

}