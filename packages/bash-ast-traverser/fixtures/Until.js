/* eslint-disable xo/filename-case */
module.exports = {
	ast: {
		type: 'Until',
		text: '0',
		clause: {
			type: 'Name',
			text: '1'
		},
		do: {
			type: 'Name',
			text: '2'
		}
	},
	expected: [
		[
			['Name on 1'],
			['Name on 2']
		],
		'Until on 0'
	]
};
