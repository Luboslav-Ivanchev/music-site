window.addEventListener('load',solve)

function solve() {



        let allInputs=document.querySelectorAll('#wrapper input');

        let genre=allInputs[0];
    let name=allInputs[1];
    let author=allInputs[2];
    let date=allInputs[3];

    let btn10=document.querySelector('#wrapper button');


    let divClass=document.querySelectorAll('#all-hits div')[1];
    console.log(divClass);


    btn10.addEventListener('click',function () {

        let h2=document.createElement('h2');
        h2.textContent=`Genre:${genre.value}\n`;
        h2.textContent=`Name:${name.value}\n`;
       h2.textContent=`Author:${author.value}\n`;

       let h3=document.createElement('h3');
       h3.textContent=`Date:${date.value}\n`;

       divClass.appendChild(h2);
       divClass.appendChild(h3);

    });






    let likes=document.querySelectorAll('.likes p ')[0];

    console.log(likes);

    let btnLike=document.getElementsByClassName('like-btn')[0];

    let count=0;

    btnLike.addEventListener('click',function () {

        count++;

        likes.textContent=`Total likes:${count}`;
    })

    let btn2=document.getElementsByClassName('delete-btn')[0];
    btn2.addEventListener('click',function () {
        divClass.remove();
    })


    let buttonSaved=document.getElementsByClassName('save-btn')[0];

    let divSaved=document.querySelectorAll('#saved-hits div ')[0];


    buttonSaved.addEventListener('click',function () {

    divSaved.appendChild(divClass);

    });

}
