let photos = document.querySelectorAll('.img-border')
let inputs = document.querySelectorAll('input')
const mycontainers = [document.getElementById('profile-container'),document.getElementById('welcome-container')]
const mycontainers2 = [document.getElementById('profile-container2'),document.getElementById('welcome-container2')]

inputs = [...inputs].slice(1);
let arr = [...photos].concat(inputs)
// reverse the array
arr=[...arr].reverse()

// blink function
const blink =(arr,i,outcome)=>{
    const l = arr[i];
    let label = l.previousSibling.previousSibling;
    setTimeout(()=>{
        arr[i].style=outcome;
        label.style=outcome
    }, 95*(i+1))
}
// appear function
const appear = (arr) => {
for(let i = arr.length-1; i >=0; i--){
    const showing = `opacity:1;`
        setTimeout(()=>{
            blink(arr,i,showing)
        },750)
    
}
}
appear(arr)

const contentDrop = () => {
    if(mycontainers[0].classList.contains('hide-content')){
        mycontainers.forEach(c=>{
            c.classList.add('appear-content')
            c.classList.remove('hide-content')
        })
    }

}
const contentDrop2 = () => {
    if(mycontainers2[0].classList.contains('hide-content-down')){
        mycontainers2.forEach(c=>{
            c.classList.add('appear-content')
            c.classList.remove('hide-content-down')
        })
    }

}
const contentHide = () => {
    if(mycontainers[0].classList.contains('appear-content')){
        mycontainers.forEach(c=>{
            c.classList.remove('appear-content')
            c.classList.add('hide-content')
        })
    }
   
}
const contentHide2 = () => {
    if(mycontainers2[0].classList.contains('appear-content')){
        mycontainers2.forEach(c=>{
            c.classList.remove('appear-content')
            c.classList.add('hide-content-down')
        })
    }
}



window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    // return yPos <= window.innerHeight/3 ? contentDrop() : contentHide()
    if(yPos <= window.innerHeight/3){
        contentDrop()
        contentHide2()
    }
    else{
        contentDrop2()
        contentHide()
    }
})