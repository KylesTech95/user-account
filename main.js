const navigation = document.getElementById('navigation-bar-container');

const dropDown = () => {
    if(navigation.classList.contains('hidden')){
        navigation.classList.toggle('appear')
    }
}
setTimeout(()=>{
dropDown()
},3000)