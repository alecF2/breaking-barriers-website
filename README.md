# Making changes to your website

## How to make changes

### Where to find the files for each page

`src -> components` if you are searching for particular components such as the navigation bar, the footer, the content in between.
`src -> pages` if you are searching for the entire page.

### How to create new page/component

Format for creating new page/component.js. All you have to do is change `FunctionName`. **Make sure that the FunctionNames are ALWAYS capital. Do not change anything else unless absolutely required. Directories of the files you are calling may defer.**
````

import './FunctionName.css'; # for both component and page creation

import React, { useEffect } from 'react';
import YourComponent from '../../components/YourComponent'; for page creation
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const FunctionName = () =>{
	return(
		<React.Fragment>
			<div className=""></div> for component creation
			<Navbar /> # for page creation
			<YourComponent /> # for page creation
			<Footer /> # for page creation
		</React.Fragment>
	);
}

export default FunctionName;

````
#### Creating new page

To create new page, add a new file with a `.css` and `.js` extension to the pages folder. You may create a new folder and add the new files into that folder or add the new files to an existing folder or just add them to the pages folder. **As long as they are in `src -> pages`.** Refer to the above format to create the new page. 

Once you create the page, you can add a link to it in the `src->navbar->navbar.js`, and add the routing extension to the `App.js`.

##### How to add routing extension to App.js

For eg.

```
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {

	useEffect(() => {
		Aos.init({ duration: 1200 });
	});

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/joinus">
						<GoogleReCaptchaProvider reCaptchaKey="6LcdNwUbAAAAACp-eJx6PrXTshtyfexJWE9yP4rG">
							<Join />
						</GoogleReCaptchaProvider>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
```

#### Creating new component

To create new component, add a new file with a `.css` and `.js` extension to the component folder. You may create a new folder and add the new files into that folder or add the new files to an existing folder or just add them to the component folder. **As long as they are in `src -> component`.** Refer to the above format to create the new component. 

### How to change images

Upload the image in this folder

`public -> images`

Go to the folder for the page you want to modify (Step 1) and open the file with suffix .js

Scroll to wherever you see the image that you want to change

Example:

Uploaded a new image called UpdatedLogo.png

Before: `<img src="images/OneLoopLogo.png"/>`

After: `<img src="images/UpdatedLogo.png"/>`

### How to add button links

To add a link within the button, 
Add a `<a></a>` within the `<button>` tag like so:

`<button>Learn More</button>` => `<button><a href="add_link_here">Learn More</a></button>`

To add a seperate route to the button,
Add a `<a></a>` within the `<button>` tag like so:

`<button>Learn More</button>` => `<button><a href="/website_extension">Learn More</a></button>`

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
