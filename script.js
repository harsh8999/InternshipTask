var count = 1;
var list;
function addClick(){
    var divrt = document.createElement("div");
    
    //remove add button on each iteration
    document.getElementById("bt" + count).style.visibility = 'hidden';
    count++;
    divrt.innerHTML =
    '<div class="container" id="div'+count+'">'+
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
            '<input type="number" id="quan'+count+'" placeholder="Quantity">'+
        '</div>'+
        '<div class="col-lg-2">'+
            '<input type="number" id="rate'+count+'" placeholder="Rate">'+
        '</div>'+
        '<div class="col col-lg-2">'+
            '<input type="number" placeholder="Amount" id="amt'+count+'">'+
        '</div>'+
        '<div class="col col-lg-2">'+
            '<button type="button" class="btn btn-primary" onclick="addClick()" id="bt'+count+'">+</button>'+
        '</div>'+
    '</div>'+
'</div>'

    // document.getElementsByClassName("container").appendChild(divrt);
    // divrt.appendChild(divrt);
    var t = count-1;
    // document.getElementById("div"+t).appendChild(divrt);
    document.body.appendChild(divrt);
    // alert(document.body.childElementCount);
    // alert(document.body.children[0].id);

    list = document.body.children;
    // alert(list);
    console.log(list);
    // alert(count);

}

function minusClick(a){
    // alert(a.id.slice(-1));
    document.getElementById("bt" + (count-1)).style.visibility = 'visible';
    count--;
    document.body.removeChild(list[a.id.slice(-1)-1]);
    // alert(count);
    
}

function changeAmount(e){
    var t = document.getElementById("amt"+count);
}