// arrays, objetos

let meta = {
    value: 'ler um livro todo mês',
    addres: 2,
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.isChecked(meta.value)

//function // arrow functions

const criarMeta = () => {

}