function docgen_writeCopyrightDate(baseYear, siteURL) {
	
	let baseYearString = "" + baseYear;
	let currentYearString = "" + new Date().getFullYear();
	
	document.write("&copy; " + baseYearString);
	
	if(currentYearString !== baseYearString) {
		document.write(" - " + currentYearString);
	}
	
	document.write(", <a href=\"" + siteURL + "\" target=\"_blank\"> Genuine Mercenary Games </a> All rights reserved");
}
