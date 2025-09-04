module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					api: './src/services/api',
					assets: './src/assets',
					context: './src/context',
					components: './src/components',
					hooks: './src/hooks',
					navigation: './src/navigation',
					screens: './src/screens',
					store: './src/store',
					types: './src/types',
					utilities: './src/utilities',
				},
			},
		],
	],
};
