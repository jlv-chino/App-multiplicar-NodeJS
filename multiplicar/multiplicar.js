const fs = require('fs')
const colors = require('colors')

let listarTabla = (base, limite = 10)=>{
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('No es un número')
            return
        }

        console.log(`------Tabla de ${base}------`.blue);

        if(!Number(limite)){
            reject('No es un número')
            return
        }

        for (let i = 1; i <= limite; i++) {

            console.log(`${ base } * ${ i } = ${ base * i }`); 

        }
    })
}

let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('No es un número')
            return
        }

        let datos = ''

        for (let i = 1; i <= limite; i++) {

            datos += `${ base } * ${ i } = ${ base * i } \n`

        }

        fs.writeFile(`tablas/tabla-${base}.txt `, datos, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    })

}
module.exports = {
    crearArchivo,
    listarTabla
}