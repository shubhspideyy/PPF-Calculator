document.querySelector("#btn").addEventListener("click",ppfCalculator);

function ppfCalculator()
{
    document.querySelector("#result").innerHTML='';
    console.log(document.querySelectorAll("#xyz"));

    var[text1,text2,text3]=document.querySelectorAll("#xyz");
    console.log(text1.value);

    var amount=+text1.value;
    var roi=+text2.value;
    var years=+text3.value;

    var openingBalance=0;

    // for(let i=1;i<=years;i++)
    // {
    //     var interest=Math.round((openingBalance+amount)*roi/100);
    //     var closingBalance=(openingBalance+amount+interest);
    //     console.log(i,openingBalance,amount,interest,closingBalance);
    //     openingBalance=closingBalance;
    // }

    var i=1;
    var sum=0;
    while(i<=years)
    {
        var interest=Math.round((openingBalance+amount)*roi/100);
        var closingBalance=(openingBalance+amount+interest);
        console.log(i,openingBalance,amount,interest,closingBalance);

        var trTag=document.createElement("tr");
        var tdTag1=document.createElement("td");
        var tdTag2=document.createElement("td");
        var tdTag3=document.createElement("td");
        var tdTag4=document.createElement("td");
        var tdTag5=document.createElement("td");

        tdTag1.innerText=i;
        tdTag2.innerText=openingBalance;
        tdTag3.innerText=amount;
        tdTag4.innerText=interest;
        tdTag5.innerText=closingBalance;

        trTag.append(tdTag1);
        trTag.append(tdTag1);
        trTag.append(tdTag1);
        trTag.append(tdTag1);
        trTag.append(tdTag1);

        i++;

    }

}