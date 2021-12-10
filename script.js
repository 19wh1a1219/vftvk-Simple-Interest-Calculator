function compute()
{
    let z = 5;
    let p = document.getElementById("principal").value;
    let q = document.getElementById("rate").value;
    let r = document.getElementById("years").value;
    let intrest = ((p*q*r)/100);
    document.getElementById("amount").innerHTML = "If you deposit " + p + ",";
    document.getElementById("rate2").innerHTML = "at an intrest rate of " + q + "%.";
    document.getElementById("result").innerHTML = "You will receive an amount of " + (intrest + parseInt(p)) + ",";
    document.getElementById("year").innerHTML = "in the year " + (2021 + parseInt(r));
}
function showVal(val)
{
    document.getElementById("value").innerHTML = val + "%";
}
