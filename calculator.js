
function calculate() {

    let conf = document.getElementById("expression").value;
    var output;
    if (conf.includes("+")) {

        var cong = conf.split("+")
        output = (Number(cong[0]) + Number(cong[1]))
    }
    else if (conf.includes("-")) {
        var cong = conf.split("-")
        output = (Number(cong[0]) - Number(cong[1]))
    }
    else if
        (conf.includes("*")) {
        var cong = conf.split("*")
        output = (Number(cong[0]) * Number(cong[1]))
    }else if (conf.includes("/")) {
        var cong = conf.split("/")
        if (cong[1] != 0) { 
            output = (Number(cong[0]) / Number(cong[1])) 
        }
    }
    document.getElementById("dd").innerText = output;

}

