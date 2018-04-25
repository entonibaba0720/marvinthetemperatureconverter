function marvinTheConverter () {
	var celsius = prompt('What is the temperature outside, in °C?');
	var fahrenheit = celsius * 9 / 5 + 32;
	alert('Nice! Did you know that this is a swell ' + fahrenheit + ' degrees in Fahrenheit?');
	return;
}
marvinTheConverter();
