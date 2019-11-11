alert('opora');
/*class User{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.adm = false;
    }    

    isAdm(){
        return this.adm; 
    }
}

class Admin extends User{
    constructor(email, senha){
        super(email, senha);

        this.adm = true;
    }
}


const User1 = new User('email@teste.com','123');
const User2 = new Admin('emaidl@teste.com','12d3');

console.log(User1);
console.log(User1.isAdm());
console.log(User2);
console.log(User2.isAdm());
*/

//console.log('--------------------------------------- fim do e1 ---------------------------------------');

/*
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


const x = usuarios.map(item => item.idade);
console.log(x);

const y = usuarios.filter(item => (item.empresa === 'Rocketseat' && item.idade >= 18));
console.log(y);

const z = usuarios.find(item => item.empresa === 'Google');
console.log(z);

const a = usuarios.map(item => item = {...item, idade: item.idade*2}).filter(item => item.idade <= 50)
console.log(a);
*/

//console.log('--------------------------------------- fim do e2 ---------------------------------------');


//console.log('--------------------------------------- fim do e3 (incompleto) ---------------------------------------');

/*
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

const mostraInfo = ({nome, idade} = usuario) => `${nome} tem ${idade} anos.`;
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;
console.log(x);
console.log(y)

const {nome, endereco,endereco: {cidade, estado}} = empresa;

const usuario2 = {
    ...empresa,
    nome: 'Gabriel'
}

const usuario3 = {
    ...empresa,
    endereco:{
        ...endereco, cidade: 'Fortal City',
    },
}
console.log(empresa);
console.log(usuario2);
console.log(usuario3);

*/
//console.log('--------------------------------------- fim do e4 ---------------------------------------');

/* 

const promise = () => new Promise((resolve, reject) =>{ 
    setTimeout(() => {resolve('OK')}, 2000);
});

export async function executaPromise() {
    const response = await promise();

    console.log(response);
}
*/

//console.log('--------------------------------------- fim do teste ---------------------------------------');

/*

const delay = () => new Promise(resolve => setTimeout(resolve,1000));

async function umPorUm() {
    await delay();
    console.log('1s')
    await delay();
    console.log('2s')
    await delay();
    console.log('3s')
}
umPorUm();
*/

//console.log('--------------------------------------- fim do e5 ---------------------------------------');

/*
import axios from 'axios';

const getUser = (user) => axios.get(`https://api.github.com/users/${user}`);

async function mostraUser(userName){
    try{
        Response = await getUser(userName);
        console.log(Response.data);
    } catch(err){
        console.log('User n existe');
    }
}

mostraUser('Diego3g');
*/

//console.log('--------------------------------------- fim do e6 ---------------------------------------');

/*

*/

//console.log('--------------------------------------- fim do e7 ---------------------------------------');

/*

*/

//console.log('--------------------------------------- fim do e8 ---------------------------------------');

