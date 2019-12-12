
function closeR(){
    document.getElementById("myModal").style.display = "none";
}

function openR(){
    document.getElementById("myModal").style.display = "block";
}

var img = [
    "img/gorgeousbadger.jpg",
    "img/TheStoffel.gif",
    "img/Badger2.jpeg",
    "img/badgerfield.jpg",
    "img/sand-badger.jpg"
]

let imgElement = document.getElementById("imgTag");

let imgCounter = 0;

imgElement.src = img[imgCounter];

function imgNext(){
    if(imgCounter > img.length) {
        imgCounter = 0;
    }
    else{
        imgCounter++;

        if (imgCounter < img.length) {
            imgElement.src = img[imgCounter];
                
          }
          if(imgCounter == 5){
            imgCounter = 0;
            imgElement.src = img[imgCounter];

        }
    }
}
