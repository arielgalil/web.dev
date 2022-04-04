document.getElementById("submitButton").onclick = function () {
    let str1 = (document.getElementById("numInput1").value);
    let str2 = (document.getElementById("numInput2").value);

    if (document.getElementById("checkBox1").checked) {
        let resultStr = str2 + str1
        console.log(resultStr);
        document.getElementById("results").innerHTML = resultStr;
    } else {
        let resultStr = str1 + str2;
        console.log(resultStr);
        document.getElementById("results").innerHTML = resultStr;
    }
}

