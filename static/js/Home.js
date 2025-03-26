

const openBtn = document.getElementsByClassName("items");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const innerH2 = document.getElementById("modal-h2");
const image = document.getElementById("image-box");



// Open Modal: Add the "open" class to make the modal visible
for (let i = 0; i < openBtn.length; i++){
    // const item = openBtn[i]
    if(i === 0){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 1th image"
            modal.backGroundImage = "<img src='bURGEr.png' alt='jj'>"
            modal.classList.add("open");
        });
    }
    else if(i == 1){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 2th image"
            modal.classList.add("open");
        });
    }
    else if(i == 2){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 3th image"
            modal.classList.add("open");
        });
    }
    else if(i == 3){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 4th image"
            modal.classList.add("open");
        });
    }
    else if(i == 4){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 5th image"
            modal.classList.add("open");
        });
    }
    else if(i == 5){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 6th image"
            modal.classList.add("open");
        });
    }
    else if(i == 6){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 7th image"
            modal.classList.add("open");
        });
    }
    else if(i == 7){
        openBtn[i].addEventListener("click", () => {
            innerH2.innerText = "You clicked 8th image"
            modal.classList.add("open");
        });
    }
    

}


// Close Modal: Remove the "open" class to hide the modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});