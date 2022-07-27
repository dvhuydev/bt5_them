function thecountTax() {

    // Input
    
    const namePersontax = String(document.getElementById("namePersontax").value);
    const totalIncome = Number(document.getElementById("totalIncome").value);
    const totalDependents = Number(document.getElementById("totalDependents").value);

    let incomeTaxes = 0;
    incomeTaxes = totalIncome - 4000000 - totalDependents * 1600000;
    

    let alertIncome = "";
    let countIncome = 0;

    function count()    {


        if (incomeTaxes >= 10000000 && incomeTaxes < 60000000 )    {
            countIncome = (incomeTaxes * 5) / 100;
        }
        else if (incomeTaxes >= 60000000 && incomeTaxes < 120000000)    {
            countIncome = (incomeTaxes * 10) / 100;
            alertIncome = `10% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 120000000 && incomeTaxes < 210000000)    {
            countIncome = (incomeTaxes * 15) / 100;
            alertIncome = `15% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 210000000 && incomeTaxes < 384000000)    {
            countIncome = (incomeTaxes * 20) / 100;
            alertIncome = `20% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 384000000 && incomeTaxes < 624000000)    {
            countIncome = (incomeTaxes * 25) / 100;
            alertIncome = `25% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 624000000 && incomeTaxes < 960000000)    {
            countIncome = (incomeTaxes * 30) / 100;
            alertIncome = `30% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes > 960000000){
            countIncome = (incomeTaxes * 35) / 100;
            alertIncome = `35% THUẾ phải đóng là: ${countIncome}`;
        }
    
        return alertIncome;
    
    
        
    }
    count();
    document.getElementById("resultsTax").innerHTML = `${namePersontax} ${alertIncome}`;
}
thecountTax();



