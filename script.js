function getQR(){
    var gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        myimg.src = gapi + mysize + "&chl=" + mytext;

        // Show the download button
        document.getElementsByClassName("btn").style.display = "block";
    } else {
        alert("Please enter text !");
    }
}



myimg.onload = function () {
    document.getElementById("a").href = myimg.src;
    // document.getElementById("a").style.display = "block";
};
