# MANAGINGBOOKS

This is the readme file for Ubuntu and Linux Mint based systems.
### Install necessary packages

```
sudo apt-get update
sudo apt-get install git -y
sudo apt-get install wget -y
```

### Install NVM and node version 20.9.0
```
touch ~/.bash_profile
wget -q0- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bash_profile
nvm install 20.9.0
nvm use 20.9.0
nvm alias default 20.9.0
npm config set registery http://registery.npmjs.org/
```

### Install local dependencies from project directory
```npm install```

### Creating a local mongodb Database
Install mongodb community server edition (version 7.0.2)
```
wget https://repo.mongodb.org/apt/ubuntu/dists/focal/mongodb-org/7.0/multiverse/binary-amd64/mongodb-org-server_7.0.2_amd64.deb
sudo dpkg -i mongodb-org-server_7.0.2_amd64.deb
sudo systemctl start mongod
```

### Starting server on your machine
You can access the application at `localhost:3000` and the swagger ui explorer at `localhost:3000/explorer`
- Starting Node server
`node .` or `nodemon .`
