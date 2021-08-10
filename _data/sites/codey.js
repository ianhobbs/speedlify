module.exports = {
	name: "Codey", // optional, falls back to object key
	description: "Codey web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://australianceramics.com/",
		"https://cementa.com.au/",
		"https://ianhobbs.net/",
    "https://ianhobbsmedia.com.au",
    "https://dev.suepedley.com.au"
	]
};
