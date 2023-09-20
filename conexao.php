<?php
    //variaveis com os parâmetros de conexão do banco de dados
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

?>