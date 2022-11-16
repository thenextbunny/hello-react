# Exercício sobre input

A ideia desse exercício é praticar os conceitos de formulários e o uso do `onChange` e `onSubmit`, bem como do `useState`.

## Instruções

1. Faça um fetch (POST) para a API abaixo enviando nome, email, senha, cep, rua, número, bairro, cidade e estado do usuário capturado no formulário.
2. Utilize a função abaixo para realizar o post. Ela já está pronta, basta passar os dados do usuário como argumento.
    ```js
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    	method: "POST",
    	headers: {
    		"Content-Type": "application/json",
    	},
    	body: JSON.stringify(form), // `form` é o objeto com os dados do usuário
    });
    ```
3. Mostre um alerta com a mensagem de sucesso ou erro.
