const frame1=document.getElementById("frame1");
const frame2=document.getElementById("frame2");

frame1.innerText="";
frame2.innerText="";
let expression="";
let result="";

function input(button){
    const value=button.value;
    if(value!="="){
        expression+=value;
        frame1.innerText=expression;
    }
    else {
        try {
            result = eval(expression);
            frame2.innerText = result;
        } catch (error) {
            frame2.innerText = "Error!";
        }
    }
}

function allclear(){
    expression="";
    result="";
    frame1.innerText = "";
    frame2.innerText = "";
}

function del(){
    expression=expression.slice(0,-1);
    frame1.innerText=expression;
}
