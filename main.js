const burger = document.getElementById('burger')
const container = document.getElementById('container')
const close = document.getElementById('closer')
const burgerler = document.getElementById('burgerler')
const windowM = document.getElementById('window-mod')
const body = document.getElementById('body')
const modalBtn = document.getElementById('modal')
const closemodal = document.getElementById('close-modal')



modalBtn.onclick = function(){
    windowM.style.top = "40%"
}
closemodal.onclick = function(){
    windowM.style.top = "-40%"
}


burger.onclick = function(){
    container.style.display = "none"
    burgerler.style.display = "flex"
}
close.onclick = function(){
    burgerler.style.display = "none"
    container.style.display = "flex"
}


// SLIDER
const one = document.getElementById('one')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')


let counter = 0

leftbtn.onclick = function(){
    counter--
    if(counter == 0){
        one.attributes.src.value = "./images/images (1).jpeg"
    }
    if(counter == 1){
        one.attributes.src.value = "./images/images (2).jpeg"
    }
    if(counter == 2){
        one.attributes.src.value = "./images/images.jpeg"
    }
}
rightbtn.onclick = function(){
    counter++
    if(counter == 0){
        one.attributes.src.value = "./images/images (1).jpeg"
    }
    if(counter == 1){
        one.attributes.src.value = "./images/images (2).jpeg"
    }
    if(counter == 2){
        one.attributes.src.value = "./images/images.jpeg"
    }
    if(counter < 0 || counter > 2){
        one.attributes.src.value = "./images/images (1).jpeg"
        counter = 0
    }
}

const content = document.getElementById("content")
const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const tab3 = document.getElementById("tab3")
const tab4 = document.getElementById("tab4")

tab1.onclick = function(){
    content.innerHTML = `
        <div class="h">Hello1</div>
    `
}
tab2.onclick = function(){
    content.innerHTML = `
        <div class="h">Hello2</div>
    `
}
tab3.onclick = function(){
    content.innerHTML = `
        <div class="h">Hello3</div>
    `
}

tab4.onclick = function(){
    content.innerHTML = `
        <div class="h">Hello4</div>
    `
}


//Dark light

const dark = document.getElementById('dark')
const darks = document.getElementById('darks')


dark.onclick = function(){
    body.classList.toggle('qara')
}
darks.onclick = function(){
    body.classList.toggle('qara')
}
