
    let names;  //variable declaration
    names="Kamlesh"; 
    console.log(names);

    // typeof 
    // three types of the method to form the variable
    // and- && and for the purpose of or -||v
    // it is the interpreted language 
    let age=17;
    if (age>18 && age<=70){
        console.log("Eligible to vote")
    } else if (age>70) {
        console.log("too much old to vote")
    }
    else{

    console.log("not elegible to vote")
    }
    for (let i=0; i<100;i++){
        console.log(i)
    }

    //for (start; stopping ; increasing);
    // ++i it is the fast processing vs i++ it is slow processing  we can also write the i=i+1
    function func(){
        console.log(5)
    }
    func();
    // what is the arrow function ()=>{} 
        // func=()=>{}

// promt and (. it will give the pop up --alert("hello")
// confirm("hello")-- it will ask for yes or no 
// var conf= confirm("hello");
// confirm alert prompt provides by the browser 
// if we write the value of the confirm in the alert it will return the true or false 
// the use of the prompt command  to get the input and we pass it in the alert it will print the name or the 
var conf1=prompt("give the 1st nummber");
var conf2=prompt("give the 2st nummber");
alert('${conf1} ${conf2}');
alert (`hello ${conf2}`) //$IT IS used  to add the variabe in the string use of the baco tick 
alert(conf1+conf2);// it will concatenate both the string 
alert(number(conf1)+conf2); // it will generally not give the error
alert(number(conf1)+number(conf2));

// 2+2 we give as the input using the prompt it return the output as the 2+2 because it is taking as the string by using the alert function




