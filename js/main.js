function Checkname(nameValue) {
    if ((typeof(nameValue)=='string') && nameValue.length>5){
        return true;
    }
    else{
        return false;
    }
}
function CheckSurname(surnameValue) {
    if ((typeof(surnameValue)=='string') && surnameValue.length>5){
        return true;
    }
    else{
        return false;
    }
}
function CheckAge(ageValue){
    if (ageValue>0) {
        return true;
    }
    else return false;
}

let nameInput=document.getElementById('nameInput');

nameInput.addEventListener('input',function(){
if((Checkname(nameInput.value))){
    nameInput.nextElementSibling.classList.remove('d-none');
    nameInput.nextElementSibling.innerText='Daxil olunan ad string ve onun uzunlugu 5-den boyuk olmalidir!';
}
else{
    nameInput.nextElementSibling.classList.add('d-none');
}
})


let surnameInput=document.getElementById('surnameInput');

surnameInput.addEventListener('input',function(){
if((CheckSurname(surnameInput.value))){
    surnameInput.nextElementSibling.classList.remove('d-none');
    surnameInput.nextElementSibling.innerText='Daxil olunan soyad string ve onun uzunlugu 5-den boyuk olmalidir!';
}
else{
    surnameInput.nextElementSibling.classList.add('d-none');
}
})

let ageInput=document.getElementById(ageInput);

ageInput.addEventListener('input',function()
{
    if (!CheckAge(ageInput.value)) {
        ageInput.nextElementSibling.classList.remove('d-none');
        ageInput.nextElementSibling.innerText='Yas 18> olmalidir!';
    }
    else{
        ageInput.nextElementSibling.classList.add('d-none');
    }
})