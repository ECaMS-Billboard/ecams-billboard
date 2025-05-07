# ECaMS Billboard
ECaMS Billboard is a full-stack web application based on MERN (MongoDB, Express, React, Node.js) and Tailwind CSS. It is under very active development by Lewis University students in the Software Systems Capstone (CPSC-49200) course.

It serves as a general informational platform for students, with the central feature of enabling campus organizations to advertise about upcoming events.

Presently, the project maintains one kiosk in the AS building (S hallway), but will tentatively be expanded to include multiple devices across different locations.

<br/>

## Getting Started

### Windows Installation 

#### Clone the Repository
```bash
git clone https://github.com/ECaMS-Billboard/ecams-billboard.git

cd ecams-billboard
```
</br>

#### Install project dependencies
```bash
npm i -D react react-scripts react-router-dom tailwindcss express
```

</br>

#### Run the app in development mode
```bash
npm run start
```

The default port is 3000.
The page will update automatically when you make changes.

</br>

#### Compile and run production build
```bash
npm run build
cd build/
node server.js
```

The default port is 5000.

</br>

### Linux Installation 

#### Clone the Repository
```bash
git clone https://github.com/ECaMS-Billboard/ecams-billboard.git

cd ecams-billboard
```

#### Install Node.js and NPM

##### Debian/Ubuntu
```bash
sudo apt update

sudo apt install nodejs npm
```

</br>

##### Fedora/Ubuntu
```bash
sudo dnf update

sudo dnf install nodejs npm
```

</br>

##### Arch 
```bash
sudo pacman update -S

sudo pacman -S nodejs npm
```

</br>

#### Install project dependencies
```bash
npm install 
```

</br>

#### Run the app in development mode
```bash
npm run start
```

The default port is 3000.
The page will update automatically when you make changes.

</br>

#### Compile and run production build
```bash
npm run build
cd build/
node ../server.js
```

The default port is 5000.

</br>


## Active Deployments
As of 11/16/24, the below Microsoft Azure instances are available:

| Service                | URL                                                 | Maintainer                                           |
| ---------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| Production environment | https://salmon-dune-0ef6bb910.4.azurestaticapps.net/ | [Samuel Swedo](mailto:samueljswedo@lewisu.edu) |
| Testing environment    | https://ambitious-stone-0a96c9010.4.azurestaticapps.net/ | [Samuel Swedo](mailto:samueljswedo@lewisu.edu) |
| API endpoint           | https://ecams-billboard-api-fkcbd4atbhdwhmat.centralus-01.azurewebsites.net/ | [Samuel Swedo](mailto:samueljswedo@lewisu.edu)  |

<br/>

## Credits
A list of past and present developers can be found in [wiki/credits.md](wiki/credits.md)

### Documentation
For the Team document, go to /wiki/TEAM.md

For the PROCESS document, go to /wiki/PROCESS.md
