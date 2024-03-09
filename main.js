const navigation = document.getElementById('navigation-bar-container');
const nav_items = document.querySelectorAll('.list-item')
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
        console.log(nav_items[x])
    }
}



window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    return yPos > 50 ? dropDown() : hideMe()
})