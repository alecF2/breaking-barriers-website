# Making changes to your website

## How to make changes



## How to test changes

Make sure to use Git Bash to run these commands.

### Testing only the frontend (email functions won't work)

* `cd <path_to_directory>`
* `npm install`
* `npm start`
* website will open at `http://localhost:3000/`

### Testing both the frontend and backend together (emails will work)

* `cd <path_to_directory>`
* `npm install`
* `cd functions`
* `npm install`
* `cd ..`
* `npm run build`
* `firebase functions:config:get > .runtimeconfig.json`
* `firebase serve`
* website is usually available at `http://localhost:5000/`

## When done testing
* CTRL + C to end the process (if it doesn't end, do it again)
* terminal might prompt with `Terminate batch job? (Y/n)`
	* type `Y` and enter

## Deploying your changes
* `cd <path_to_directory>`
* `cd functions`
* `npm install`
* `cd ..`
* `npm run build`
* `firebase deploy`
* Note: try to not deploy more than twice a day, as there are bandwidth restrictions on Firebase, and exceeding 1GB in a day will incur charges (a single deploy uses ~450MB bandwidth)

## Stuck?

Fill out our bug fix form if you're ever stuck on fixing your website: https://forms.gle/gz6dxTwCKDDhw5xw6
