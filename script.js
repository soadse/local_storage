let name = document.getElementById('name');
let age = document.getElementById('age');
let city = document.getElementById('city');
let uf = document.getElementById('uf');
let send = document.getElementById('send');
let check = document.getElementById('check');
let clear = document.getElementById('clear');
let containerCards = document.getElementById('containerCards');
let cadastro = [];

let response = document.createElement('p');
let inputs = [name, age, city, uf];
inputs.forEach(item => {
    item.addEventListener('input', () => {
        if(!document.body.contains(response)) {
            document.body.appendChild(response)
        }
        response.innerHTML = ''
    })
});



send.addEventListener('click', () => {
    if(name.value === '' || age.value === '' || city.value === '' || uf.value === '') {
        document.body.appendChild(response).innerHTML = 'Campos vazios!!!'
    } else {
        document.body.appendChild(response).innerHTML = ''
        cadastro.push({nome: name.value, idade: age.value, cidade: city.value, uf: uf.value});
        localStorage.setItem('usuario', JSON.stringify(cadastro))
        name.value = '';
        age.value = '';
        city.value = '';
        uf.value = '';
    }
});

check.addEventListener('click', () => {
    document.body.appendChild(response).innerHTML = ''
    if(localStorage.length === 0){
        document.body.appendChild(response).innerHTML = 'Local Storage vazio!!!'
    } else {
        let recupera = JSON.parse(localStorage.getItem('usuario'))
        recupera.forEach((item) => {
            response.classList.add('card');
            document.body.appendChild(response).innerHTML += `
            <strong>Nome:</strong> ${item.nome}<br>
            <strong>Idade:</strong> ${item.idade}<br>
            <strong>Cidade:</strong> ${item.cidade}<br>
            <strong>UF:</strong> ${item.uf}<br><hr style="margin: 10px;">
        `;
        })
    }
})

clear.addEventListener('click', () => {
    localStorage.removeItem('usuario')
    document.body.appendChild(response).innerHTML = ''
})
