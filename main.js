function dataTransfer(){
    var firstAnimal = document.getElementById('animal').value;
    localStorage.setItem('firstAnimal',firstAnimal)

    var secondAnimal = document.getElementById('anotherAnimal').value;
    localStorage.setItem('secondAnimal',secondAnimal)

  
    var yes = document.getElementById('yesNo').value;
    localStorage.setItem('yes',yes)

    var speed = document.getElementById('speed').value;
    localStorage.setItem('speed',speed)

    var adjective = document.getElementById('adjective').value;
    localStorage.setItem('adjective',adjective)

    var thirdAnimal = document.getElementById('oneMoreAnimal').value;
    localStorage.setItem('thirdAnimal',thirdAnimal)

    var quotes = document.getElementById('quotes').value;
    localStorage.setItem('quotes',quotes)

    var verbs = document.getElementById('verbs').value;
    localStorage.setItem('verbs',verbs)

    var number = document.getElementById('number').value;
    localStorage.setItem('number',number)

    var message = document.getElementById('message').value;
    localStorage.setItem('message',message)

    return false;
}
document.getElementById('firstAnimalName').innerHTML = localStorage.getItem('firstAnimal');
document.getElementById('secondAnimalName').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('firstAnimalName01').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('secondAnimalName01').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('yesOption').innerHTML = localStorage.getItem('yes')
document.getElementById('secondAnimalName02').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('speed1').innerHTML = localStorage.getItem('speed')
document.getElementById('firstAnimalName02').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('tense').innerHTML = localStorage.getItem('adjective')
document.getElementById('secondAnimalName03').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('thirdAnimalName').innerHTML = localStorage.getItem('thirdAnimal')
document.getElementById('motivational').innerHTML = localStorage.getItem('quotes')
document.getElementById('firstAnimalName03').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('secondAnimalName04').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('firstAnimalName04').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('verbs1').innerHTML = localStorage.getItem('verbs')
document.getElementById('number1').innerHTML = localStorage.getItem('number')
document.getElementById('secondAnimalName05').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('secondAnimalName06').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('firstAnimalName05').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('verbs2').innerHTML = localStorage.getItem('verbs')
document.getElementById('firstAnimalName06').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('verbs3').innerHTML = localStorage.getItem('verbs')
document.getElementById('secondAnimalName07').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('firstAnimalName07').innerHTML = localStorage.getItem('firstAnimal')
document.getElementById('secondAnimalName08').innerHTML = localStorage.getItem('secondAnimal')
document.getElementById('moral').innerHTML = localStorage.getItem('message')
 