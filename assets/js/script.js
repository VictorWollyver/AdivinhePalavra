const temas = {

    naruto: ["naruto", "sasuke", "sakura", "obito", "tsunade", "orochimaru", "tobi", "pain", "nagato", "hidan"],

    linguagens: ["javascript", "java", "python", "pascal", "c", "c++", "php", "c#", "ruby", "swift"],

    frutas: ["uva", "manga", "pêra", "goiaba", "morango", "banana", "kiwi", "acerola", "melancia", "melão"],

    animais: ["zebra", "elefante", "cachorro", "gato", "esquilo", "gavião", "peixe", "cobra", "macaco", "lobo"],

    games: ["hollow knight", "mario", "sonic", "life is strange", "nier automata", "final fantasy", "forza horizon", "god of war", "hades"]

}

let palavraSelecionada
let score = 0
let erros = 0

const divDica = document.querySelector('.value-dica')
const divScore = document.querySelector(".value-score")
const temaSelected = document.querySelector('select#temas')
const divJogo = document.querySelector('div#input-letras')
const btn = document.querySelector('button')
const divErro = document.querySelector('.erro')


temaSelected.addEventListener('click', selectTema)

function selectTema(params) {
    
   
    switch (temaSelected.value) {
        case "Naruto":

            palavraSelecionada = temas.naruto[Math.floor(Math.random() * 9)]
            break;

        case "Frutas":
            
            palavraSelecionada = temas.frutas[Math.floor(Math.random() * 9)]

            break;

        case "Animais":
           
            palavraSelecionada = temas.animais[Math.floor(Math.random() * 9)]

            break;

        case "Linguagens de Programação":
            

            palavraSelecionada = temas.linguagens[Math.floor(Math.random() * 9)]
            break;

        case "games":

            palavraSelecionada = temas.games[Math.floor(Math.random() * 9)]
            break;

        default :
            console.log("Escolha um tema para iniciar")
            break;
    }
    
}

 btn.addEventListener('click', verify )  
    function verify(params) {
        console.log(palavraSelecionada)

        let inputUser = document.querySelector('input.palavra')

        if (inputUser.value == palavraSelecionada) {
            inputUser.value = ""
            divErro.innerHTML = "Acertou! Trocando palavra"
            selectTema()


            setTimeout(function(){divErro.innerHTML = ""}, 2000)
            
            score += 10
            divScore.innerHTML = score

            divDica.innerHTML = ""
            erros = 0

        }else if(inputUser.value != palavraSelecionada && temaSelected.value != "notSelected"){
            divErro.style.opacity = "0"
            setTimeout(function(){divErro.style.opacity = "100"}, 100)
            divErro.innerHTML = "Errou!"

            erros += 1

            if (erros >= 3) {
                divDica.innerHTML = `A palavra possui ${palavraSelecionada.length} caracteres (Incluindo espaços).`

                if (erros >= 6) {
                divDica.innerHTML += `<br> <br> A primeira letra é ${palavraSelecionada.toUpperCase().substr(0,1)}`
                    
                }
            }

        } else if(temaSelected.value == "notSelected")
            divErro.innerHTML = "Selecione um tema acima para jogar"
        }

  