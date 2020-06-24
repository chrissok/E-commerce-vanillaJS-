export function getCategories(){

    fetch("http://remote.fizzmod.com/menu.json")
    
    .then(response => response.json()
    )
    .then(content =>{

        const categories = document.getElementById("categories");

        content.menu.categories.forEach( obj => {

            var catg  = document.createElement("a");

            catg.innerHTML =`<li>${obj.title}</li>`;

            catg.href = `${obj.href}`;

            categories.insertAdjacentElement('afterbegin', catg); 

        });
    })
    .catch(err =>{
        console.log('Hubo un problema con la petición Fetch:' + err.message);
        });
    }
