// var conf=prompt("enter the number")
// if (conf[1]=="+"){
//     alert(Number(conf[0])+Number(conf[2]))
// }

// get element by the id it will take the id and it by the class name by class and if we use the query selector it will 
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
// str.includes("+") it will check if the element is in the str or not the it will run otherwise not
