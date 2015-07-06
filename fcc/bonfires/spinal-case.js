function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
		 .toLowerCase()
		 .replace(/(\s|_)+/g, '-');
	return str;
}
