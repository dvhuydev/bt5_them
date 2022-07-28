function thecountTax() {

    // Input

    const namePersontax = String(document.getElementById("namePersontax").value);
    const totalIncome = Number(document.getElementById("totalIncome").value);
    const totalDependents = Number(document.getElementById("totalDependents").value);

    let incomeTaxes = 0;
    incomeTaxes = totalIncome - 4000000 - totalDependents * 1600000;


    let alertIncome = "";
    let countIncome = 0;

    function count() {


        if (incomeTaxes >= 10000000 && incomeTaxes < 60000000) {
            countIncome = (incomeTaxes * 5) / 100;
        }
        else if (incomeTaxes >= 60000000 && incomeTaxes < 120000000) {
            countIncome = (incomeTaxes * 10) / 100;
            alertIncome = `10% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 120000000 && incomeTaxes < 210000000) {
            countIncome = (incomeTaxes * 15) / 100;
            alertIncome = `15% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 210000000 && incomeTaxes < 384000000) {
            countIncome = (incomeTaxes * 20) / 100;
            alertIncome = `20% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 384000000 && incomeTaxes < 624000000) {
            countIncome = (incomeTaxes * 25) / 100;
            alertIncome = `25% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes >= 624000000 && incomeTaxes < 960000000) {
            countIncome = (incomeTaxes * 30) / 100;
            alertIncome = `30% THUẾ phải đóng là: ${countIncome}`;
        }
        else if (incomeTaxes > 960000000) {
            countIncome = (incomeTaxes * 35) / 100;
            alertIncome = `35% THUẾ phải đóng là: ${countIncome}`;
        }

        return alertIncome;



    }
    count();
    document.getElementById("resultsTax").innerHTML = `${namePersontax} ${alertIncome}`;
}
thecountTax();















function selectCustomer() {
    let selectCustomer = document.getElementById("selectCustomer").value;
    let connectChannels = document.getElementById("connectChannels");

    if (selectCustomer === "enterprise") {
        connectChannels.style.display = "block";
    }
    else {
        connectChannels.style.display = "none";
    }

    return connectChannels;
}



function countMoneybill() {

    const customer = String(document.getElementById("customer").value);
    const channels = Number(document.getElementById("channels").value);
    const connectChannels = Number(document.getElementById("connectChannels").value);

    const selectCustomer = document.getElementById("selectCustomer").value;



    let addPick = 0;

    let pickCustomer =  function () {
        let alertPick = "";

        if (selectCustomer === "family") {
            addPick = 4.5 + (7.5 * channels) + 20.5

        }


        else if (selectCustomer === "enterprise") {

            if (connectChannels <= 10) {
                addPick = (connectChannels * 7.5) + 15 + (50 * channels)
            }
            else if (connectChannels > 10) {
                addPick = 75 + 15 + (connectChannels - 10) * 5 + (50 * channels)
            }
            else {
                alertPick = "Error"
            }
        }
        else    {
            alertPick = "Error"
        }

        return addPick;

    }
    pickCustomer();

    document.getElementById("countResults").innerHTML = `Your bill ID: ${customer} customer is: ${addPick}$`;
}
countMoneybill();