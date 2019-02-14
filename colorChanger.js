var colorPaletteShow=false;


function colorPaletteButtonShowerClick(paletteID, ColorselectorClassName) {

	var palette = document.getElementById(paletteID).style;

	if(colorPaletteShow == false) {
		colorPaletteShow = !colorPaletteShow;
		palette.display = "block";
		
			var lenghtOfColorPalette = (document.getElementsByClassName(ColorselectorClassName).length * 40 + 10).toString() + "px";
			palette.height = lenghtOfColorPalette;
	} else {
		colorPaletteHide(paletteID)
	}
}

function colorPaletteHide(paletteID) {
	
	var palette = document.getElementById(paletteID).style;
	
	colorPaletteShow = false;
	palette.display = "none";
}

function changeColor(colorID, paletteID, headerID) {	
	document.getElementById(paletteID).style.backgroundColor = Colors[colorID].selectColor;
	document.getElementById(headerID).style.backgroundColor = Colors[colorID].titleColor;
	document.getElementById(headerID).style.fontFamily = Colors[colorID].fontFamilyTitle;
	document.getElementById(headerID).style.color = Colors[colorID].fontColorTitle;
	document.getElementById(headerID).style.fontSize = Colors[colorID].fontSizeTitle;
	document.body.style.backgroundColor = Colors[colorID].backgroundColor;
	document.body.style.fontFamily = Colors[colorID].fontFamilyBody;
	document.body.style.color = Colors[colorID].fontColorBody;
	document.body.style.fontSize = Colors[colorID].fontSizeBody;
}