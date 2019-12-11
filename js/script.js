var words = ["1","2","3","4"]

let pTag = document.getElementById("wordElement")

let wordCounter = 0

pTag.innerHTML = words[wordCounter]

function whenClicked(){
    if(wordCounter<4){wordCounter++
    pTag.innerHTML = words[wordCounter]
    }
    else{
        pTag.innerHTML = words[wordCounter]
    }
}