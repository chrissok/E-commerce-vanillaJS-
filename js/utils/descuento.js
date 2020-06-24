export function descuento(priceList,priceSell){

    let priceDesc = parseInt(((priceSell*100)/priceList)-100);
 
    return priceDesc;
 }