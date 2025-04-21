module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,js,py}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};