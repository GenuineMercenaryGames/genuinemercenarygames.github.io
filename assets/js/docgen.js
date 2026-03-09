function docgen_writeCopyrightDate(baseYear, siteURL) {
	
	let baseYearString = "" + baseYear;
	let currentYearString = "" + new Date().getFullYear();
	
	document.write("&copy; " + baseYearString);
	
	if(currentYearString !== baseYearString) {
		document.write(" - " + currentYearString);
	}
	
	document.write(", <a href=\"" + siteURL + "\" target=\"_blank\"> Genuine Mercenary Games </a> All rights reserved");
}

function docgen_writeProfile(name, picture, description, socials) {
	let socialsString = "";
	for(let i = 0; i < socials.length; ++i) {
		let s_img = socials[i].img;
		let s_url = socials[i].url;
		socialsString += `
			<a href="${s_url}" target="_blank" class="px-2"><img src="${s_img}" class="custom_rrss_btn"></a>
		`
	}
	let s = `
	<div class="col-md-4 my-3">
		<div class="team-wrapper text-center">
			<img src="${picture}" class="circle-120 rounded-circle mb-3 shadow" alt="${name}">
			<h5 class="my-3">${name}</h5>
			<p>${description}</p>
			<h6 class="socials mt-3">
				<center>
					${socialsString}
				</center>
			</h6>
		</div>
	</div>
	`;
	document.write(s);
}

function docgen_writeSocialNetwork(snName, snImage, snUrl) {
	// sn prefix for social network
	// TODO : Clean up, this is some old code I had lying around so it's pre-multiline strings.
	var str0 = '<a class="dra_a" href="';
	var str01 = '" target="_blank">';
	var strend = "</a>";
	
	var strbase = '<div class="col-md-4 my-3 my-md-0">';
	var strbasend = '</div>';
	
	var str1 = '<div class="card dra_image_container2">' +
			'<div class="card-body">' +
				'<div class="media align-items-center mb-3">' +
					'<img class="mr-3" src="';
	
	var str1p2 = '"alt="socials_image">' +
					'<div class="media-body">' +
						'<h6 class="mt-1 mb-0">';
	var str2 = '</h6>' +
						'<small class="text-muted mb-0">';
	
	var str3 = '</small>' +
					'</div>'+
				'</div>'+
				'<p class="mb-0"></p>'+
			'</div>'+
		'</div>';
	
	document.write(strbase + str0 + snUrl + str01 + str1 + snImage + str1p2 + snName + str2 + str3 + strend + strbasend);
}
