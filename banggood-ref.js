var defaultRefCode = "H8052232981273201905";

function setRefCode(code)
{
	browser.storage.sync.set({
		refcode_banggood: code
	});
	
	if (!code.startsWith("p="))
	{
		code = "p=" + code;
	}

	var url = window.location.toString();

	var codeExtended = code + "&";

	if (!url.includes(codeExtended))
	{
		var prefixIndex = url.lastIndexOf('/') + 1;
		var prefixUrl = url.substr(0, prefixIndex);
		var postUrl = url.substr(prefixIndex);
		
		if (postUrl.includes("?")) {
			if (postUrl.includes("?p=") || postUrl.includes("&p=")) {
				//replace existing ref code
				var regex = new RegExp("(?<=([?|&]))p=\\w+&");
				postUrl = postUrl.replace(regex, code + "&");
			} else {
				//add our very own ref code to the front
				postUrl = postUrl.replace("?", "?" + code + "&");
			}
		} else {
			postUrl = postUrl.concat("?" + code);
		}
		
		if (postUrl != null)
		{
			history.replaceState(null, null, postUrl);
			//window.location = prefixUrl + postUrl;
		}
	}	
}

var optRefCode = browser.storage.sync.get("refcode_banggood");

function onError(error) {
	console.log(`Error: ${error}`);
	setRefCode(defaultRefCode);
}

function onGot(item) {
	if (item.refcode_banggood) 
	{
		setRefCode(item.refcode_banggood);
	}
	else
	{
		setRefCode(defaultRefCode);
	}
}

optRefCode.then(onGot, onError);
