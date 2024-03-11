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
    }
}

window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    return (yPos > 0) ? dropDown() : hideMe()
})
// function for hiding the navigation bar
const iDoNotSelectNavigation = (e) => {
    return /space|hr|pre-bod-container/g.test(e.target.classList[0])||/profile-container/g.test(e.target.id)
}
window.addEventListener('click',e=>{
    // get scroll position for Y
    if(iDoNotSelectNavigation(e)){
        navigation.classList.add('base')
        navigation.classList.remove('appear')
    }
})

//click base
const clickBaseNav=()=>{
    if(navigation.classList.contains('base')){
        navigation.addEventListener('click',e=>{
            dropDown()
        })
    }

}
clickBaseNav()



