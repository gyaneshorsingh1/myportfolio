let url = 'https://script.google.com/macros/s/AKfycbzL2IriTIpqRFGSeMOmHCX5jHOSnk6-wcWdIMc-DXyZbukN8JLeUfG_vEzeru2_t6Oj5Q/exec';
var form= document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Submitting";
    var d = new FormData(form);
    fetch(url,{
        method:"POST",
        body:d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        form.reset();
        document.querySelector("#submited").innerHTML=finalRes;
        setTimeout(() => {
            document.querySelector("#submited").innerHTML="";
        }, 5000);
    })
    e.preventDefault();
    
})