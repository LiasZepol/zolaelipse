'use strict'

const title =document.querySelectorAll('.title')
const description =document.querySelectorAll('.description')


title.forEach( ( cadaTitle , i )=>{
    title[i].addEventListener('click', ()=>{

        description.forEach( ( cadaDescription , i )=>{
            description[i].classList.remove('active')
        })
        description[i].classList.add('active')
    })
})