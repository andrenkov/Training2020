//#region button event
//Single element selector
//console.log(window);
//const elementname = document.getElementById('name');
//console.log(elementname);

//const elementSel = (document.querySelector('.msg'));
// const elementSel = (document.querySelector('#email'));
// elementSel.textContent = "Your email:";
// console.log(elementSel);

// const elementSelLbl = (document.getElementById('email'));
// elementSelLbl.textContent = "Your email:";
// console.log(elementSelLbl);

//Multiple element selector
//console.log(document.querySelectorAll('.item'));
//or old style
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//  const ul = document.querySelector('.items');
// // ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Vlad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
//  var _cout = 0;
//  const btn = document.querySelector('.submit');
 //btn.style.background = 'red';//requires css
//  btn.addEventListener('click', (e) => {
//     e.preventDefault();//stop continueus submittion
//     console.log(`click ${_cout + 1}`);
    //console.log(e.target.className);
    //document.querySelector('.form-style-2').style.background = '#ccc';
    //dot is by class name, # is by element id
    // document.querySelector('#my-form').style.background = '#ccc';//dot is by class name, # is by element id
    // document.querySelector('.body').classList.add('bg-dark');
    // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello again</h1>';


    // _cout++;
//})
//#endregion

//#region input events
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '')
    {
        //alert('Please emter name and email');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else {
        //console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
        userList.appendChild(li);
        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
//#endregion


