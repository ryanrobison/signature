## Scripts

* build javascript source: `gulp build`
* rebuild files when they change: `gulp watch`
* start server: `node index.js`

## Tasks

1. Hook up the form so that when someone enters values in the inputs, it shows up immediately as part of the signature
1. Transform the full name so that it shows up as all uppercase in the signature
1. Have the job title show up as all uppercase and a different color in the signature (Note: all the CSS styles will need to be inlined because users will be copy+pasting it)
1. Format the phone number in the signature so that it looks like a phone number even if the user enters something like: 8015551234 (I used an npm module called 'phone-formatter', but anything that works is fine)
1. Add your name to the list of contributors in the package.json file.
