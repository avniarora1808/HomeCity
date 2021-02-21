window.load=doShowAll();
function doShowAll() {
        var key = "";
        var list = "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>\n";
        var i = 0;
        var temp ="";
        var total=0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        if(localStorage.length>=1){
            for (i = 0; i <= localStorage.length-1; i++) {
                key = localStorage.key(i);
                list += "<tr><td>" + key + "</td>\n<td>"
                        + localStorage.getItem(key) + "</td></tr>\n";
                temp = key.split("</td>\n<td>");
                total+=Math.imul(parseInt(temp[1].substring(1),10),parseInt(localStorage.getItem(key),10));
            }
            //If no item exists in the cart.
            if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>\n") {
                list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
            }
            //Bind the data to HTML table.
            //You can use jQuery, too.
        }
        document.getElementById('list').innerHTML = list;
        document.getElementById("totalshit").innerHTML = "Total Price:     $"+total+".00";


        
}
function SaveItem() {
    var name = document.querySelector(".name").textContent;
    var data = document.getElementById("cost").value;
    var price = document.querySelector(".price").textContent;
    localStorage.setItem(name+"</td>\n<td>"+price, data);
}

function RemoveItem()
{
    var name = document.querySelector(".name").textContent;
    var data = document.getElementById("cost").value;
    var price = document.querySelector(".price").textContent;
    localStorage.removeItem(name);
    doShowAll();
}
function ClearAll() {
    localStorage.clear();
    doShowAll();
    document.getElementById("totalshit").innerHTML = "Total Price:     $0.00";
}




