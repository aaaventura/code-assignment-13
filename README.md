This project sets up a development environment for a React app using Docker.

## Prerequisite
- git is required to clone the repository from github: https://github.com/git-guides/install-git
- Docker is required to build and run the application: https://docs.docker.com/engine/

## How to Run the App

1. You can clone the Repository through git with: 
        `bash git clone https://github.com/aaaventura/code-assignment-12`

2. Change to the directory with: 
        `cd code-assignment-12`

3. Build the docker application into a container image:
        `docker build -t ventura_ahleeryan-joe_assignment12 .`

4. Run the application on localhost:8083:
        `docker run -p 8083:8083 ventura_ahleeryan-joe_assignment12`

5. To verify your build, open your browser and visit: 
    `http://localhost:8083`

    If you are successful in your build, you will see the spinning React App logo and the header "Edit src/App.tsx and save to reload."

6. To verify your storybook, run it using `npm run storybook`, open your browser and visit: 
    `http://localhost:6006`

    This should present the storybook UI with all the components according to the assignment's requirements.
   

## troubleshooting

- Double check the version of Node.js with: ```node -v```
    The application uses the Node.js version 20.19.2. 
    
    To switch versions, use: `nvm use 20`

- If Docker says the port is in use, use `bash docker ps` to display all currently running containers. 
Then use `docker stop <container_using_8083>`

        Note: root Access may be required to terminate other containers.
  
- A reoccuring error is Docker not installing the correct npm version. To fix this error, manual install will be required.
        Use `npm install` and then try step 4 again.

- A reoccuring error is Docker not installing storybook. To fix this error, manual install will be required.
        Use `npm create storybook@latest`, follow the recommended installation, and then try step 6 again.
  
