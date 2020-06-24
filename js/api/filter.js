export function getFilter(filters, img){

const filter = document.getElementById('filter');

let prodImgs = img;

let inputFilt = [];

let inputOn = [];

let inputOff = [];

filters.forEach( obj =>{

    let filterCont = document.createElement('div');

    filterCont.className = 'filterCont';

    filterCont.innerHTML = `<p>${obj.title}</p>`;

    filter.insertAdjacentElement('beforeend',filterCont);

        obj.values.forEach( value => {
          
          let valueCont = document.createElement('div');
          valueCont.className = 'filter-children';
          valueCont.setAttribute("id", `${value}`);

          let valueFilter = document.createElement('input');
          valueFilter.type = 'checkbox';
          valueFilter.setAttribute("id", `${value}`);

          let customCheckBoxOff = document.createElement('span');
          customCheckBoxOff.className = "icon-icn_checkbox_off";
          customCheckBoxOff.setAttribute("id", `off${value}`);

          let customCheckBoxOn = document.createElement('span');
          customCheckBoxOn.className = "icon-icn_checkbox_on";
          customCheckBoxOn.setAttribute("id", `on${value}`);

          
          let label = document.createElement('label');
          label.setAttribute("for",`${value}`);
          label.className= 'filter-label';
          label.innerHTML = `${value}`;

          valueCont.appendChild(valueFilter);
          valueCont.appendChild(customCheckBoxOff);
          valueCont.appendChild(customCheckBoxOn);
          valueCont.appendChild(label);
          
          filterCont.insertAdjacentElement('beforeend',valueCont);

          inputFilt.push(document.getElementById(`${value}`));
          inputOn.push(document.getElementById(`on${value}`));
          inputOff.push(document.getElementById(`off${value}`));
        })
})
let filterFlag = new Array(inputFilt.length).fill(false);
    

    for (let i = 0; i < inputFilt.length; i++) {

    inputFilt[i].addEventListener('change', ()=>{
       
        if(filterFlag[i] === false){

        for (let j = 0; j < prodImgs.length; j++) {
                
               if(!prodImgs[j].id.includes(inputFilt[i].id)) {
                prodImgs[j].style.display = 'none';

               } 
            }

            inputOff[i].style.display = 'none';
            inputOn[i].style.display = 'inline';

            filterFlag[i] = true;

        }else{
            for (let j = 0; j < prodImgs.length; j++) {

                if(!prodImgs[j].id.includes(inputFilt[i].id)) {
                   
                    prodImgs[j].style.display = 'block';
                   }
            }

            inputOff[i].style.display = 'inline';
            inputOn[i].style.display = 'none';

            filterFlag[i] = false;
        }
    })
}
}