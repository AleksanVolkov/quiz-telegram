'use strict'

const form = document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();


   const errorM = document.querySelector('#error');
    

    let TOKEN = '5791633342:AAEOD_eKDntfzgcOco4R0WbOB9jN-SMXGyY';
    let URI_API =`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    let CHAT_Id = '-1001656232893';
    
    
    let message = '<b>заявка из сайта</b>\n';

    message+=`<b>пользватель:</b>${this.name.value}\n`;
    message+=`<b>Email:</b>${this.email.value}`;

    console.log(message)


    const spiner = document.querySelector('#load');

    spiner.style.display= "block";

    axios.post(URI_API,{
        chat_id:CHAT_Id,
        parse_mode:'html',
        text:message
    }).then((res)=>{
        this.name.value='';
        this.email.value='';
        const alert = document.querySelector('#message');
        alert.style.display="block";
        spiner.style.display= "none";
        setTimeout(()=>{alert.style.display="none";},'3000')
    }).catch((error)=>{
        errorM.style.display="block";
        errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`;
    })




});