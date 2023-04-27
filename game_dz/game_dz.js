let number = Math.floor(Math.random() * 101);//случайное число
console.log(number)
let count = 3;
let out = document.getElementById('out');

// запись использованных чисел
let usedLetters = [];

document.getElementById('check').onclick =function(){

    if(count > 0){
        let usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);

        if(usedLetters.includes(usernum)){
            out.innerHTML = "Такая цифра уже была, попробуй ещё раз"
        }else{

            usedLetters.push(usernum);

            if(usernum == number){
                out.innerHTML = `Ура вы победили!!! Вы вводили значения ${usedLetters}`;
                alert('Вы победили!!! Страница будет перезагружина')
                location.reload();
                
            }
            else if(usernum > number){
                out.innerHTML = "Перелёт";
            }
            else if(usernum < number){
                out.innerHTML = "Недолёт";
            }
            count = count - 1
            if(count != 0){
                document.getElementById('count').innerHTML ="Осталось попыток" + count;
            } else{
                alert('Попытки закончены, вы проиграли. Страница будет перезагружина')
                location.reload();
            }
        }
    } 
};