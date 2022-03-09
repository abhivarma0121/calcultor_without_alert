// function perform(){
//     alert("vdsfd");
//     debugger;
//    let res = document.getElementById('val').value;
//    document.getElementById('val').value=eval(res);
// }

function perform() {
    let res = document.getElementById("val").value;
    let result = eval(res);
    document.getElementById("val").value = result;
}

