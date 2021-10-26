var string = "Me chamo João Paulo, Tenho 18 anos, aluno da FATEPI, fascinado por tecnologia..."; 
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) 
  {
    document.getElementById("text").innerHTML += array.shift();
  } 
  else 
  {
    clearTimeout(timer);
  }
  loopTimer = setTimeout('frameLooper()',60); 

}
frameLooper();

function typingEffect() {
    const contactTexts = shuffleArray(['Desenvolvedor Web Jr', 'Python', 'Inteligência Artificial', 'Deep Learning (Aprendizado Profundo)', 'Machine Learning (Aprendizado de Maquina)']);
    const typedtext = document.getElementsByClassName("typedtext")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { 

        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        if (char == contactTexts[idx].length + 15) removing = true;

        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++;

        if (typedtext.innerHTML.length === 0) {
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; 
            removing = false; 
        }

    }, 100);

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}