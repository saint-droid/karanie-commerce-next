import Commerce from "@chec/commerce.js"


let commerce = null;

function getCommerce(commercePublicKey){
    if (commerce){
        return commerce;
    }else{
        const publicKey = commercePublicKey ||process.emvCOMMERCE_PUBLIC_KEY;
        const devEnviroment = process.env.NODE_ENV ==='development';
    }
}