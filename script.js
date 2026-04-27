const inputElement = document.querySelector(".inputBox")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        handleInput(value);
    }); 
});

function handleInput(value) {
    if(value === "C"){

        inputElement.value = "";

    } else if(value === "DEL"){
            
        inputElement.value = inputElement.value.slice(0, -1);

    }else if(value === "="){

        try{
            inputElement.value = eval(inputElement.value);
        } catch {
            inputElement.value = "Error";
        }

    }else{
        inputElement.value += value;
    }
}

document.addEventListener("keydown", (event) =>{
    const key = event.key

    if(!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)){
        handleInput(key)
    } else if(key === "Enter" || key === "="){
        handleInput("=");
    } else if(key === "Backspace") {
        handleInput("DEL");
    } else if(key === "Escape") {
        handleInput("C")
    }
})