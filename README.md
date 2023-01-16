# bitirmeProjesi


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cinoxil/bitirmeProjesi">
    <img src="images/projeLogo.png" alt="Logo" width="160" height="80">
  </a>

  <h3 align="center">bitirmeProjesi</h3>

  <p align="center">
    Vehicle Tracking Application
    <br />
    <a href="https://github.com/cinoxil/bitirmeProjesi">View Demo</a>
    ·
    <a href="https://github.com/cinoxil/bitirmeProjesi/issues">Report Bug</a>
    ·
    <a href="https://github.com/cinoxil/bitirmeProjesi/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

Within the scope of this project, a system has been developed to track current and historical locations using a GPS module. The system has the features of displaying the instant location of a vehicle on the map and recording its historical locations. These recorded data can be displayed by drawing the roads passed on the map.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_In order to use the Google maps API, you need to get an API key._

1. Get a free API Key at [https://developers.google.com/maps](https://developers.google.com/maps)
2. Clone the repo
   ```sh
   git clone https://github.com/cinoxil/bitirmeProjesi.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API key in `Current Map.jsx`, `HistoryMap.js` and `Map.jsx`.
   ```js
   apiKey = 'ENTER YOUR API';
   ```
4. For tasks such as database connections, and token operations, create a .env file in userBackend and enter the necessary information from .env.example.

5. Create a .env file in the location-tracking folder and fill it in the format in .env.example.

6. Create a .env file in the frontend folder and fill it in .env.example format.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<a href="mailto:okanerciyas8+github@gmail.com"><img img src="https://img.shields.io/badge/Okan Erciyas Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/okan-erciyas-006959192/"><img src="https://img.shields.io/badge/Okan Erciyas LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

<a href="mailto:c.ugurongun@gmail.com"><img img src="https://img.shields.io/badge/Cüneyt Uğur Öngün Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail"/></a>
<a href="https://www.linkedin.com/in/c%C3%BCneyt-u%C4%9Fur-%C3%B6ng%C3%BCn-650162131/"><img src="https://img.shields.io/badge/Cüneyt Uğur Öngün LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/product-screenshot.png
[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
