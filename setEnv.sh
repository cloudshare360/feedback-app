# node version 16.13.1 LTS
#$NVM_DIR/nvm install 16.13.1
#$NVM_DIR/nvm use 16.13.1
nvm install 16.13.1 && nvm use 16.13.1
rm -rf node_modules
npm install 
npm start
