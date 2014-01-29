function embedSWF(swfURL)
{
	var targetDiv = "flashWrapper";
	
	var swfSize = "100%";
	
	var swfVersion = "11.0.0";
	
	var xiSWFURL = "assets/swf/libs/playerProductInstall.swf";
	
	var flashvars = {};
	flashvars.timestamp = Number(new Date());
	
	var params = {};
	params.allowFullScreen = "true";
	params.allowScriptAccess = "sameDomain";
	params.bgColor = "#ffffff";
	params.quality = "high";
	params.wmode = "direct";
	
	var attributes = {};
	attributes.id = "Main";
	attributes.name = "Main";
	attributes.align = "middle";
	
	swfobject.embedSWF	(	swfURL, 
							targetDiv, 
							swfSize, 
							swfSize, 
							swfVersion, 
							xiSWFURL,
							flashvars,
							params,
							attributes
						);
}
