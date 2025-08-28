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