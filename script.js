var count = 1;
var list,arr;
function addClick(){
    var divrt = document.createElement("div");
    divrt.id="div"+count;
    //remove add button on each iteration
    // document.getElementById("bt" + count).style.visibility = 'hidden';
    count++;
    divrt.innerHTML =
    '<div class="container" >'+
    '<div class="row justify-content-md-center">'+
    '<div class="col col-sm-1">'+
        '<button type="button" class="btn btn-primary" onclick="minusClick(this)" id="btm'+count+'">-</button>'+
    '</div>'+
    '<div class="col col-sm-1">'+
    '<label>'+count+'</label>'+
    '</div>'+
        '<div class="col col-lg-2">'+
           '<input type="text" placeholder="Name">'+
        '</div>'+
        '<div class="col-lg-2">'+
            '<input type="number" id="quan'+count+'" placeholder="Quantity" onchange="changeAmount()">'+
        '</div>'+
        '<div class="col-lg-2">'+
            '<input type="number" id="rate'+count+'" placeholder="Rate" onchange="changeAmount()">'+
        '</div>'+
        '<div class="col col-lg-2">'+
            '<input type="number" placeholder="Amount" id="amt'+count+'" onchange="changeAmount()">'+
        '</div>'+
        '<div class="col col-lg-2">'+
            '<button type="button" style="visibility:hidden" class="btn btn-primary" onclick="addClick()" id="bt'+count+'">+</button>'+
        '</div>'+
    '</div>'+
'</div>'
    // document.body.appendChild(divrt);
    document.getElementById("over").appendChild(divrt);

    // document.getElementsByClassName("container").appendChild(divrt);
    // divrt.appendChild(divrt);
    var t = count-1;
    // document.getElementById("div"+t).appendChild(divrt);
    
    // alert(document.body.childElementCount);
    // alert(document.body.children[0].id);

    list = document.getElementById("over").children;
    // alert(list);
    // console.log(list);
    // alert(count);
    
}

function minusClick(a){
    
    var r = a.id.slice(-1) - 1;
    alert("div"+r);
    var rowNode = document.getElementById("div"+r);    //get div#
    document.getElementById("over").removeChild(rowNode);
    // alert(rowNode);
    // document.body.removeChild(rowNode);
    // document.getElementById("bt" + (count-1)).style.visibility = 'visible';
    count--;
    // document.body.removeChild(list[a.id.slice(-1)-1]);
    // document.getElementById("over").removeChild(list[a.id.slice(-1)-1]);
    // alert(count);
    changeAmount();
    
}

function changeAmount(){
    var a = document.getElementById("amt"+count);
    var y = document.getElementById("rate"+count);
    var r = document.getElementById("quan"+count);
    var s = document.getElementById("st");
    var d = document.getElementById("discount");
    var total = document.getElementById("total");
    var tax = document.getElementById("tax");

    a.value = r.value * y.value;
    var su = parseInt(0);
    var x;
    var c = count;
    while(c!=0){
        var a = document.getElementById("amt"+c);
        su = parseInt(su) + parseInt(a.value);
        c--;
    }
    
    s.value = su;
    
    //if discount is there
    if(!isNaN(d.value) && !isNaN(tax.value)){
        if(isNaN(tax.value)){
            tax.value=0;
        }
        if(isNaN(d.value)){
            d.value=0;
        }
        total.value = parseInt(s.value) - parseInt(d.value) + parseInt(parseInt(tax.value) * parseInt(s.value) / 100);
    }
    else{
        total.value = parseInt(s.value);
    }
    

    
}