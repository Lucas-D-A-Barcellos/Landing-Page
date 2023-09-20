<?php

    //requisição da conexão com o banco
    require_once("conexao.php");

    //setando as variaveis dos campos do formulario
    $nome = $_POST['nome'];
    $ddd = $_POST['ddd'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $mensagem = $_POST['mensagem'];

    //sql utilizando para inserir dados no banco, seguidos das variaveis inseridas
    $sql = "INSERT INTO aluno (nome, ddd, telefone, email, senha, mensagem) VALUES  ('$nome', '$ddd', '$telefone', '$email', '$senha', '$mensagem')";
    $result = $mysqli->query($sql);

    // Dados inseridos com sucesso, redirecione para index.html com um alerta
    echo '<script>alert("Aluno cadastrado com sucesso!");</script>';

    // Redireciona para index.html
    header("Location: index.html"); 

    // Encerra o script para evitar que o código continue executando após o redirecionamento
    exit; 

    //fechar conexão com o banco
    $mysqli->close();
?>