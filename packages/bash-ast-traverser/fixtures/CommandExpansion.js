/* eslint-disable xo/filename-case */
module.exports = {
	ast: {
		type: 'CommandExpansion',
		text: '0',
		expansion: [{
			type: 'Name',
			text: '1'
		}]
	},
	expected: [
		[
			['Name on 1']
		],
		'CommandExpansion on 0'
	]
};
