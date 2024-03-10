const navigation = document.getElementById('navigation-bar-container');
const nav_items = document.querySelectorAll('.list-item')
const desktopView = () => window.innerWidth >= 400
const dropDown = () => {
    if(navigation.classList.contains('base')){
        navigation.classList.add('appear')
        navigation.classList.remove('base')
    }
    // nav items drop simultaneously
    nav_items.forEach((n,index)=>{
    setTimeout(()=>{
        n.classList.add('appear')
        n.classList.remove('base')
        },75*(index+1))
    })

}
const hideMe = () => {
    if(navigation.classList.contains('appear')){
        navigation.classList.remove('appear')
        navigation.classList.add('base')
    }
    // nav items drop simultaneously
    for(let x = nav_items.length-1; x>=0; x--){
        nav_items[x].classList.remove('appear')
        nav_items[x].classList.add('base')
    }
}

window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    return (yPos > 0) ? dropDown() : hideMe()
})
window.addEventListener('click',e=>{
    // get scroll position for Y
    if(e.target.parentElement!==navigation){
        navigation.classList.add('base')
        navigation.classList.remove('appear')
    }
})

// //click base
const clickBaseNav=()=>{
    if(navigation.classList.contains('base')){
        navigation.addEventListener('click',e=>{
            dropDown()
        })
    }

}
clickBaseNav()
// if(!desktopView()){
//     navigation.classList.remove('base')
//     navigation.classList.remove('appear')
// }