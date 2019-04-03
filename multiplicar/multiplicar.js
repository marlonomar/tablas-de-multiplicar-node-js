const fs = require('fs');

const colors = require('colors');

let crearArchivos = (numb,limite)=>{
    return new Promise ((resolve,reject)=>{

        if(!Number(numb)){
            reject(`el valor ${numb} no es un numero valido`)
            return;
        }if(!Number(limite)){
            reject(`el valor ${limite} no es un valor valido`)
            return;
        }

        tabla =''
        console.log(colors.rainbow('===================='))
        console.log(colors.rainbow(`tabla del ${numb}`))
        console.log(colors.rainbow('===================='))
        for(i=1;i<=limite;i++){
            tabla += `${numb} X ${i} = ${numb * i }\n`;
        }

        console.log(tabla)

        fs.writeFile(`tablas/tabla-${numb}-al-${limite}.txt`,tabla, (err) => {
            if (err){
                reject(err)
            }else{
                resolve(`tabla-${numb}-al-${limite}.txt`)
            }
        });
    });
}

module.exports = {
    crearArchivos
}