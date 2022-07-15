const timer2 = document.querySelector('#tempo');
const timer3 = document.querySelector('#tempofinal')
const questao = document.getElementById("pergunta");
const op1 = document.getElementById("opcao1texto");
const op2 = document.getElementById("opcao2texto");
const op3 = document.getElementById("opcao3texto");
const op4 = document.getElementById("opcao4texto");
const next = document.getElementById("nextbot");
const resposta=document.querySelectorAll(".resposta");
const score1=document.getElementById("score");
const score2=document.getElementById("scorefinal");
const errou=document.getElementById("errada")
const tempof=document.getElementById("tempofinal")



    let quizinicial = [
    {
        question:'1+1x0?',
            option1:"0",
            option2:"1",
            option3:"2",
            option4:"3",

        answer:"op2"
    },{
        question:'Qual é o símbolo Químico Da Prata?',

            option1:"Au",
            option2:"Pt",
            option3:"Ag",
            option4:"Zn",

        answer:"op3"
    },{
        question:'Qual era o 1º Nome de Picasso?',

            option1:"Pablo",
            option2:"Diego",
            option3:"Jorge",
            option4:"Nuno",

        answer:"op1"
    },{
        question:'Quem foi o 10º rei de portugal?',

            option1:"D. Fernando",
            option2:"D. Sancho I",
            option3:"D.João I",
            option4:"D.Sancho II",

        answer:"op3"
    },{
        question:'Como se chama a serra mais alta de Portugal continental',

            option1:"Geres ",
            option2:"Estrela",
            option3:"Monchique",
            option4:"Gardunha",

        answer:"op2"
    },{
        question:'Como se chama o rio que desagua em setubal?',

            option1:"Douro",
            option2:"Sado",
            option3:"Tejo",
            option4:"Minho",

        answer:"op2"
    },{
        question:'Que nome se dá aos homens que na antiga Roma lutavam nas arenas?',

            option1:"Lutadores",
            option2:"Pugilistas",
            option3:"Politicos",
            option4:"Gladiadores",

        answer:"op4"
    },{
        question:'Que nome se dá a um polígono de três lados?',

            option1:"Triângulo",
            option2:"Quadrado",
            option3:"Trapézio",
            option4:"Cubo",

        answer:"op1"
    },{
        question:'Se divir 54 por 9, quanto se obtem?',

            option1:"6",
            option2:"7",
            option3:"8",
            option4:"9",

        answer:"op1"
    },{
        question:'Qual o maior continente da Terra?',

            option1:"Europa",
            option2:"Ásia",
            option3:"África",
            option4:"América",

        answer:"op2"
    },{
        question:'Qual é atualmente o slogan da marca LG?',

            option1:"Less´s Good",
            option2:"Leading Great",
            option3:"Life´s Good",
            option4:"Life´s Great",

        answer:"op3"
    },{
        question:'Qual é a língua mais falada no mundo?',

            option1:"Chinês",
            option2:"Espanhol",
            option3:"Português",
            option4:"Inglês",

        answer:"op1"
    },{
        question:'Quantas faces tem um cubo?',

            option1:"6",
            option2:"4",
            option3:"8",
            option4:"7",

        answer:"op2"
    },{
        question:'Como se chamava o primeiro foguetão europeu?',

            option1:"Spot",
            option2:"Apollo",
            option3:"Ariane",
            option4:"Po Sat",

        answer:"op3"
    },{
        question:'Como se classifica o Morcego?',

            option1:"Ave",
            option2:"Inseto",
            option3:"Réptil",
            option4:"Mamífero",

        answer:"op4"
    },{
        question:'De que cor é a esfera armilar do escudo português?',

            option1:"Amarela",
            option2:"Vermelha",
            option3:"Verde",
            option4:"Azul",

        answer:"op1"
    },{
        question:'Qual o símbolo químico do sódio?',

            option1:"SO",
            option2:"Ra",
            option3:"Na",
            option4:"S",

        answer:"op3"
    },{
        question:'Qual é a capital da Islândia?',

            option1:"Oslo",
            option2:"Yanam",
            option3:"Reiquejavique",
            option4:"Quebec",

        answer:"op3"
    },{
        question:'Qual dos seguintes representa um sistema de navegação?',

            option1:"Wi-Fi",
            option2:"Bluetooth",
            option3:"TDT",
            option4:"GPS",

        answer:"op4"
    },{
        question:'Qual dos seguntes países faz fronteira com França?',

            option1:"Angola",
            option2:"Bélgica",
            option3:"Portugal",
            option4:"México",

        answer:"op2"
    },{
        question:'Na trilogia "O Senhor dos Anéis" quem é a personagem principal?',

            option1:"Frodo Baggins",
            option2:"Aragorn",
            option3:"Gollum",
            option4:"Gandalf",

        answer:"op1"
    }
];

    var score=0;
    var scorefinal=0;
    var currentIndex = 0;
    var wrong = 20;
    var i = 0;
    let totalTime = 120;
    var tempofinal = 0;
    
    let shuffle = function(array) {
        var temporaryValue, randomIndex;
        var currentIndex = array.length;
        while (randomIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    shuffle (quizinicial);

    let timer = setInterval(function (){ //Função do tempo;
        totalTime--;
        timer2.innerHTML = fmtMSS(totalTime);
        if (totalTime == 0){
            document.getElementById("questionScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";
            tempofinal = totalTime;
            tempof.innerHTML = fmtMSS(tempofinal) + " segundos";
            score2.innerHTML = score;
            errou.innerHTML = wrong;
        }

    }, 1000);

    questao.innerHTML = quizinicial[currentIndex].question;
    op1.innerHTML = quizinicial[currentIndex].option1;
    op2.innerHTML = quizinicial[currentIndex].option2;
    op3.innerHTML = quizinicial[currentIndex].option3;
    op4.innerHTML = quizinicial[currentIndex].option4;

    next.addEventListener('click',() => {

        var answer1=Selected();
        if(answer1 == undefined){
            alert("Nenhuma Opção Selecionada")
        }else{
        if(answer1===quizinicial[currentIndex].answer)
            
           if (currentIndex<quizinicial.length) 
           {score++;
            wrong--;
            scorefinal=score;
            console.log(score);
            score1.innerHTML = "Corretas: " + score;
            }
            
            resposta.forEach((respostas) => {
                respostas.checked=false;
            });
        
        if (currentIndex===quizinicial.length-1){
            document.getElementById("questionScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";
            tempofinal = totalTime;
            tempof.innerHTML = fmtMSS(tempofinal) + " segundos";
            score2.innerHTML = score;
            errou.innerHTML = wrong;

        
        }
        
        if (currentIndex<quizinicial.length-1){
            currentIndex +=1;
            questao.innerHTML = quizinicial[currentIndex].question;
            op1.innerHTML = quizinicial[currentIndex].option1;
            op2.innerHTML = quizinicial[currentIndex].option2;
            op3.innerHTML = quizinicial[currentIndex].option3;
            op4.innerHTML = quizinicial[currentIndex].option4;
        }

    }});


    function Selected(){
        let answer =undefined;
        resposta.forEach((respostas) => {
            if(respostas.checked){
                answer=respostas.id;
            }
        });
        return answer;
    }
