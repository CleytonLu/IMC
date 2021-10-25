// CALCULO
function calcular(){  
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var res = document.getElementById('res') 
    var infor = document.getElementById('infor')    

    let imc = peso.value / (altura.value * altura.value)
    res.innerHTML += imc.toFixed(2)

    if(imc <= 16){
        res.innerHTML += '<br> Magreza Grave'
        infor.innerHTML += 'Deve-se incluir carboidratos simples, fundamentais para fornecer energia ao organismo, além de proteínas, indispensáveis para ganho de massa magra. O ideal é consumir alimentos integrais por possuírem elevada densidade energética e baixo índice glicêmico, como pães, massas e biscoitos.'
    }else if(imc >= 16 && imc < 17){
        res.innerHTML += '<br> Magreza Moderada'
        infor.innerHTML += 'Bebidas como o chá verde, chá de casca de laranja, de limão, de mexerica ou de jabuticaba, e chá de gengibre têm alto teor de fitoquímicos que previnem doenças, maximizam a perda de gordura e o aumento da massa magra. Eles também ajudam a silenciar os genes envolvidos com o ganho de peso.'
    }else if(imc >= 17 && imc < 19){
        res.innerHTML += '<br> Magreza Leve'
        infor.innerHTML += 'Deve-se incluir carboidratos simples, pois são fundamentais para prover energia, além de proteínas – indispensáveis para ganho de massa magra. Pode-se incluir na dieta alimentos como: ovos, leite e derivados, grãos integrais, feijão e vegetais ricos em amido como a batata.'
    }else if(imc >= 19 && imc < 25){
        res.innerHTML += '<br> Saudável'
        infor.innerHTML += 'Uma alimentação saudável pede equilíbrio de nutrientes e variedade de alimentos. Para emagrecer vale investir em frutas, legumes, verduras. Não se esqueça de completar o menu com diferentes tipos de carnes, cereais, leguminosas (feijão, lentilha), leites e derivados, grupos alimentares essenciais para a alimentação diária.'
    }else if(imc >= 25 && imc < 30){
        res.innerHTML += '<br> Sobre Peso'
        infor.innerHTML += 'É preciso evitar comidas gordurosas e diminuir o consumo de produtos como pães, massas e bolos. A dica é fazer trocas inteligentes ao optar pelas alternativas integrais. O açúcar e o sal em excesso também devem ser cortados do seu cardápio. É essencial aprender a temperar os pratos sem exageros e com opções saudáveis.'
    }else if(imc >= 30 && imc < 35){
        res.innerHTML += '<br> Obesidade Grau I'
        infor.innerHTML += 'dieta, exercício físico e medicação em longo prazo por se tratar de uma doença crônica. "Pacientes que têm IMC abaixo de 35, sem doenças associadas, devem sem dúvidas tentar o tratamento clínico antes, com chances de conseguir resultados razoáveis. </br> <a href="https://blog.winsocial.com.br/obesidade/"> Para Saber Mais</a>'
    }else if(imc >= 35 && imc < 40){
        res.innerHTML += '<br> Obesidade Grau II'
        infor.innerHTML += 'Reeducação Alimentar, Exercício e Tratamento Medicamentoso </br> <a href="https://centrodeobesidadeediabetes.org.br/tudo-sobre-obesidade/tratamento-da-obesidade/">Para Saber Mais</a>'
    }else{
        res.innerHTML += '<br> Obesidade Grau III (Morbida)'
        infor.innerHTML += 'Reeducação alimentar, Atividade física, Medicamentos e Cirurgia </br> <a href="http://blog.clinicanexa.com.br/2019/10/16/obesidade-morbida-como-trata-la/"> Para Saber Mais</a>'
    }
}

// LIMPAR
function limpar(){
    let res = document.getElementById('res') 
    let infor = document.getElementById('infor')
    
    res.innerHTML = 'IMC: '
    infor.innerHTML = 'O que Fazer se estiver nesse caso: '

}

// MASCARA
function masc(){
    var altura = document.getElementById('altura')

    if(altura.value.length == 1){
        altura.value += '.'
    }
}