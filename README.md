<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center" style="font-size: 25px">E-Shomaj</h3>

  <p align="center">
    A social media platform!
    <br />
    <a href="https://shomaj.xyz"><strong>See it live »</strong></a>
    <br />
    <br />
    <a href="https://shomaj.xyz">View Demo</a>
    ·
    <a href="https://github.com/heronet/reddot/issues">Report Bug</a>
    ·
    <a href="https://github.com/heronet/reddot/issues">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

`E-Shomaj` is a social media platform which lets users post photos and texts. It also supports `real-time` chat. It is a two parts project. This is the `Frontend`. The `Backend` can be found [here](https://github.com/heronet/reedit).

- `E-Shomaj` uses `Express.js` in the `Backend` and `Angular` in the `Frontend`.- It uses `MongoDB` to persist data.
- The UI uses `REST API` calls to fetch all the data.
- The `Backend` uses `Docker` which is hosted on `Google Cloud Run`.

<!-- SCREENSHOT -->

[![reddot Screen Shot][screenshot]](https://shomaj.xyz)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Angular][angular.io]][angular-url]
- [![Express.js][expressjs.com]][expressjs-url]
- [![MongoDB][mongodb.com]][mongodb-url]
- [![Docker][docker.io]][docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install -g npm@latest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/heronet/reddot.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   ng serve -o
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add photo upload
- [x] Implement authentication
- [x] Add real-time chat
- [ ] Add video streaming

See the [open issues](https://github.com/heronet/reddot/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sirat - sirat4757@gmail.com

Project Link: [https://github.com/heronet/reddot](https://github.com/heronet/reddot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com)
- [Othneildrew](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/heronet/reddot.svg?style=for-the-badge
[contributors-url]: https://github.com/heronet/reddot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/heronet/reddot.svg?style=for-the-badge
[forks-url]: https://github.com/heronet/reddot/network/members
[stars-shield]: https://img.shields.io/github/stars/heronet/reddot.svg?style=for-the-badge
[stars-url]: https://github.com/heronet/reddot/stargazers
[issues-shield]: https://img.shields.io/github/issues/heronet/reddot.svg?style=for-the-badge
[issues-url]: https://github.com/heronet/reddot/issues
[license-shield]: https://img.shields.io/github/license/heronet/reddot.svg?style=for-the-badge
[license-url]: https://github.com/heronet/reddot/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/siratul-islam
[screenshot]: images/scr.png
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[mongodb.com]: https://img.shields.io/badge/Mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com/
[expressjs.com]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[expressjs-url]: https://expressjs.com/
[docker.io]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docker.io/
