//option 04: 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//another option :

const makePurple = document.getElementById('make-purple');
makePurple.addEventListener('click', function makePurple(){
    document.body.style.backgroundColor = 'purple';

})

//option 04 Final process

document.getElementById('make-skyBlue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'skyblue';
})
