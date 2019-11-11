import Sortable from 'sortablejs';

import axios from 'axios';


const getTimes = () => axios.get('http://serieahairon.000webhostapp.com/server/times.php?sT=true');
//const putTimes = () => axios.post('http://serieahairon.000webhostapp.com/requests/times.php?');

//console.log(getTimes());


async function putNames(){
    try{
        Response = await getTimes();

        let sep = Response.data.split('<br>', 20);
        //console.log(sep);

        var main = document.getElementById('example1');
        for(var x of sep){
            let n = document.createTextNode(x);
            let d = document.createElement('div');
            d.setAttribute('class','list-group-item');
            d.setAttribute('id',`time/${x}`);
            d.setAttribute('draggable','false');
            d.appendChild(n);

            main.appendChild(d);
        }
    } catch(err){
        console.log('Erro de conexão');
    }

}
putNames();

async function enviarPalpites(ordem){
	
}

new Sortable(example1, {
    animation: 150,
    ghostClass: 'blue-background-class'
});



/*
const putName  = (id) => {
    var c = 1;
    var z = document.getElementsByClassName('list-group-item')

    for(var item of z){
        var nomeTime = document.createTextNode(`Item ${c}`);
        item.appendChild(nomeTime);
        c++;
    }
};

putName();*/