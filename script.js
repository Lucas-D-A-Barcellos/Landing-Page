alert("Seja Bem vindo ao Portal do Aluno")

//ID´s dos campos de entrada (input)
var showPassword = document.getElementById('showPassword')

var senha = document.getElementById('senha')
var nome = document.getElementById('nome')
var email = document.getElementById('email')
var telefone = document.getElementById('telefone')
var mensagem = document.getElementById('mensagem')
var ddd = document.getElementById('ddd')

const valor = document.getElementById('telefone').value.replace(/\D/g, '')
const valorddd = document.getElementById('ddd').value.replace(/\D/g, '')

//Evento adicionado a uma checkbox para adicionar funcionalidade de mostrar senha alterando o type do input
showPassword.addEventListener("click", function(){

	if (showPassword.checked) {

		senha.type = "text"
		
	}else{

		senha.type = "password"
	}

})

//função que válida o DDD cadastrado por regex e número de caracteres
function validaDDD() {

	if (!(campoDDD.value.length === 2 || (/^\d+$/.test(campoDDD)))) {
		
		document.getElementById('ddd').classList.add('border', 'border-danger')

	}else{

		document.getElementById('ddd').classList.remove('border', 'border-danger')
	}
	
}
	//evento input para capturar em tempo real as modificações no campo ddd
	const campoDDD = document.getElementById('ddd')
	campoDDD.addEventListener('input', validaDDD)

//Evento que quando perde o foco do input ele verifica se há incosistencia no ddd e envia um alerta
campoDDD.addEventListener('blur', function (){

	if (!(campoDDD.value.length === 2 || (/^\d+$/.test(campoDDD)))) {

		campoDDD.value = '' // Limpa o campo de ddd
		alert("DDD inválido. Deve conter 2 dígitos numéricos.")

	} 
	
})

//função que válida o telefone cadastrado pelo número de caracteres
function validaTelefone() {

	if (!(campoTelefone.value.length === 9 || campoTelefone.value.length === 8 && (/^\d+$/.test(campoTelefone)))) {

		document.getElementById('telefone').classList.add('border', 'border-danger')


	}else{

		document.getElementById('telefone').classList.remove('border', 'border-danger')
				
	}
	
}
	//evento input para capturar em tempo real as modificações no campo telefone
	const campoTelefone = document.getElementById('telefone')
	campoTelefone.addEventListener('input', validaTelefone)

//Evento que quando perde o foco do input ele verifica se há incosistencia no telefone e envia um alerta
campoTelefone.addEventListener('blur', function (){

	if (!(campoTelefone.value.length === 9 || campoTelefone.value.length === 8 && (/^\d+$/.test(campoTelefone)))) {

		campoTelefone.value = '' // Limpa o campo de telefone
		alert("Telefone inválido. Deve conter 8 ou 9 dígitos numéricos.")

	} 
	
})
	
				



//função que valida senha cadastrada se apresenta o número correto de caracteres
function validaSenha() { 

	const valida = document.getElementById('senha')
	
	//confição que testa o número de caracteres e adiciona o estilo ao objeto
	if (valida.value.length < 8 || valida.value.length > 20) {
		
		document.getElementById('senha').classList.add('border', 'border-danger')
		document.getElementById('regraSenha').style.color = "red"

	} else {

		document.getElementById('senha').classList.remove('border', 'border-danger')
		document.getElementById('regraSenha').style.color = ""
	}

}
	//evento input para capturar em tempo real as modificações no campo senha
	const campoSenha = document.getElementById('senha')
	campoSenha.addEventListener('input', validaSenha)


//função que valida o email cadastrado usando REGEX
function validaEmail() { 

	const campoEmail = document.getElementById('email')
    const valorEmail = campoEmail.value

    // Expressão regular para validar o formato do email (regex)
    const regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

	//condição testando a string do email com a regex
    if (regexEmail.test(valorEmail)) { 


        console.log("email válido")
		document.getElementById('email').classList.remove('border', 'border-danger')

    } else {

        document.getElementById('email').classList.add('border', 'border-danger')

    }

}
	//evento input para capturar em tempo real as modificações no campo email
	const campoEmail = document.getElementById('email') 
	campoEmail.addEventListener('input', validaEmail)
