{
	"presets"; [
		"@parcel/babel-preset-env",
		[
			"@babel/preset-react",
			{
				"runtime": "automatic"
			}
		]
	],
	"plugins"; [
		"relay",
		"@babel/plugin-proposal-class-properties",
		"@parcel/babel-plugin-transform-runtime"
	]
}