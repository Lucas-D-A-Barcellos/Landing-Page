<h1>Landing Page com PHP e JavaScript</h1>

Landing page simples que utiliza PHP para conectar-se a um banco de dados e JavaScript para verificar os campos de entrada (input) em um formulário HTML.

<h2>Pré-requisitos</h2>

<strong>Servidor Web:</strong> Execução um servidor web, no caso do projeto utilizado o APACHE.

<strong>PHP:</strong> Instalação do PHP no seu sistema.

<strong>Banco de Dados MySQL:</strong> Instalação do banco de dados MySQL configurado e executado no servidor APACHE.
Estrutura de Arquivos

<br>
<h2>Descrição dos arquivos:</h2>

<strong>index.html:</strong> Este é o arquivo HTML principal contendo o corpo do projeto.

<strong>bd.php:</strong> Este arquivo PHP processa os dados do formulário e faz a inserção no banco MySQL.

<strong>conexao.php:</strong> Aqui você configura as informações de conexão com o banco de dados MySQL.

<strong>script.js:</strong> O arquivo JavaScript que valida os campos de entrada do formulário.

<br>


<h2>Conexão com o Banco de Dados</h2>

No arquivo conexao.php, são configurados as informações de conexão com o seu banco de dados MySQL:
     
```php
    $hostname = "localhost";
    $bancodedados = "formulario";
    $usuario = "root";
    $senha = "";

    //objeto mysqli para conexões com o banco seguidos dos parâmetros setados anteriormente
    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

    //teste retornando erro de conexão
    if ($mysqli->connect_errno) {
        
        echo "Falha ao conectar: (". $mysqli->connect_errno . ") " . $mysqli->connect_errno;
    }else {
        echo "conexão concluida";
    }
```

<br>

<h2>Validação de Campos com JavaScript</h2>
O arquivo js/validation.js contém funções JavaScript para verificar os campos de entrada no formulário. Você pode adicionar lógica personalizada para validar os campos de acordo com seus requisitos.

<h3>Função validação do DDD</h3>

```javascript    
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
```
<br>

<h3>Função validação do Telefone</h3>

```javascript
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
```
<br>

<h3>Função validação da Senha</h3>    

```javascript
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
```    
<br>

<h3>Função validação do Email</h3>

```javascript
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

```
