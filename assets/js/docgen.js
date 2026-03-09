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
