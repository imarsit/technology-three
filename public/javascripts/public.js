
includeScript('../public/javascripts/flexslider.js');
includeScript('../public/javascripts/banner.js');
includeScript('../public/javascripts/ditu.js');
includeScript('../public/javascripts/lib.js');
includeScript('../public/javascripts/map.js');





function includeScript(url) {
	document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
	return false;
}