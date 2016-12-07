const titleCase = str => {
	str = str.toLowerCase().split(" ")
	for (i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1)
	}
	return str.join(' ')
}