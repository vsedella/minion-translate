const textAreaFrom = document.querySelector("#one");
const textAreaTo = document.querySelector(".two");
const translateButton = document.querySelector("button[name='translate']");
const minionUrl = "https://api.funtranslations.com/translate/minion.json?text=";
translateButton.addEventListener('click', ($event) => {
    console.log($event);
    const val =  textAreaFrom.value.trim();
    if(val){
        const url = encodeURI(minionUrl + val);
        fetch(minionUrl + val)
        .then(res => res.json())
        .then(resp => textAreaTo.innerHTML = resp.contents.translated)
        .catch(errorHandler);
    }else{
        alert('Please enter a valid value to translate');
    }
});

function errorHandler(error){
    console.log('error occured :', error);
    textAreaFrom.innerHTML = null;
    textAreaTo.innerHTML = null;
}