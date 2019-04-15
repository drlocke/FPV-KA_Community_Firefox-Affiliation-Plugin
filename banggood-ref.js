/* document.body.style.border = "5px solid red";

var x = document.URL    */
var url = window.location.toString();

var refCode = "p=NG011621283472201805";
if (!url.includes(refCode))
{
	if (url.includes("?")) {
		if (url.includes("p=")) {
			var regex = new RegExp("p=\\w+&");
			url = url.replace(regex, refCode);
		} else {
			url = url.concat("&" + refCode);
		}
	} else {
		url = url.concat("?" + refCode);
	}
	window.location = url;
}
