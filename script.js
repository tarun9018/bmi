// const form = document.querySelector('#form')
const form = document.querySelector("body > div > form")
console.log(form);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#results");
    if (height === '' || height < 0 || isNaN(height))    // for checking height values 
    {
        result.innerHTML = `in not valid formate  ${weight}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight))         // for checking weight valuess
    {
        result.innerHTML = `in not valid formate   ${height}`;
    }
    else {
       bmi = (weight / ((height * height) / 10000).toFixed(2))   // formula of bmi calculater 
        // }show text in  result
        result.innerHTML = `<span>${bmi}</span>`;
        
    }
    if(bmi<18.6){
        
        console.log(`you are under weight${bmi}`);
        result.innerHTML = `<span>you are under weight ${bmi}</span>`;
        
        }
    else if (bmi<24.9){
        console.log(`you have perfect weight ${bmi}`);
        result.innerHTML = `<span>you have perfect  weight ${bmi}</span>`;

    }
    else{
        console.log(`you are  overweight${bmi}`);
        result.innerHTML = `<span>you are  overweight${bmi}</span>`;


    } 
    }
) 