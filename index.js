var fs = require('fs'),
		path = require('path'),
		rootPath = path.join(__dirname, '../../'),
		meepoConfig;

try {
	meepoConfig = fs.readFileSync(path.join(rootPath, 'meepo.json'), 'utf8');
	meepoConfig = JSON.parse(meepoConfig);
} catch (err) {
	console.log('there are no config');
}

module.exports = function (name) {
	var module = meepoConfig[name];

	if (module)
		return require(path.join(rootPath, module));

	return;
};