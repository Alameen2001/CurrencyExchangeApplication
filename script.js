fetch("https://v6.exchangerate-api.com/v6/3729239800972c5cc844226c/latest/USD").then(res=>res.json())
.then(data=>processData(data))




function processData(data){
    var currencyCode=[]
for(let code in data.conversion_rates){
    currencyCode.push(code)
}

var fromBox=document.querySelector('#id_fromBox')
var toBox=document.querySelector('#id_toBox')

for(let code of currencyCode){
    let opt=document.createElement('option')
    opt.text=code
    opt.value=code
    fromBox.appendChild(opt)
}

for(let code of currencyCode){
    let opt=document.createElement('option')
    opt.text=code
    opt.value=code
    toBox.appendChild(opt)

}
function convert(){
    let amount=id_amount.value
    let fromCurrencyCode=id_fromBox.value
    let toCurrencyCode=id_toBox.value
    console.log(amount,fromCurrencyCode,toCurrencyCode);
    let fromRate=data.conversion_rates[fromCurrencyCode]
    let toRate=data.conversion_rates[toCurrencyCode]
    let out=(amount/fromRate*toRate)
    document.querySelector('#id_result').innerHTML=`<h3>${amount} ${fromCurrencyCode} is equal to ${out} ${toCurrencyCode}</h3>`
}

}