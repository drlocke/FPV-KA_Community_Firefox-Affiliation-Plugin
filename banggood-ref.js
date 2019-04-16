/* document.body.style.border = "5px solid red";

var x = document.URL    */
var url = window.location.toString();

var refCode = "p=NG011621283472201805";
if (!url.includes(refCode))
{
	var prefixIndex = url.lastIndexOf('/') + 1;
	var prefixUrl = url.substr(0, prefixIndex);
	var postUrl = url.substr(prefixIndex);
	
	if (postUrl.includes("?")) {
		if (postUrl.includes("p=")) {
			//replace existing ref code
			var regex = new RegExp("p=\\w+&");
			postUrl = postUrl.replace(regex, refCode);
		} else {
			//add our very own ref code to the front
			postUrl = postUrl.replace("?", "?" + refCode + "&");
		}
	} else {
		postUrl = postUrl.concat("?" + refCode);
	}
	
	if (postUrl != null)
	{
		history.replaceState(null, null, postUrl);
		//window.location = prefixUrl + postUrl;
	}
}
