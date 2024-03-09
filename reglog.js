let photos = document.querySelectorAll('.img-border')
let inputs = document.querySelectorAll('input')
const mycontainers = [document.getElementById('profile-container'),document.getElementById('welcome-container')]
inputs = [...inputs].slice(1);
let arr = [...photos].concat(inputs)
console.log(arr)
// reverse the array
arr=[...arr].reverse()

// blink function
const blink =(arr,i,outcome)=>{
    const l = arr[i];
    setTimeout(()=>{
        arr[i].style=outcome;
        if(l.length > 0){
            arr[i].labels[0].style=outcome
        }
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
const contentHide = () => {
    if(mycontainers[0].classList.contains('appear-content')){
        mycontainers.forEach(c=>{
            c.classList.remove('appear-content')
            c.classList.add('hide-content')
        })
    }
   
}



window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    return yPos <= window.innerHeight/3 ? contentDrop() : contentHide()
})