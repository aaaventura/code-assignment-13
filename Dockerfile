# Use Node.ja base image
FROM node:20

# Set working directory inside the container
WORKDIR	/usr/src/app/ventura_ahleeryan-joe_coding_assignment12/ventura_ahleeryan-joe_ui_garden

# copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of app files
COPY . . 

# Set port
ENV PORT=8083

# exposedthe port 
EXPOSE 8083

# build storybook
RUN npm run build-storybook

# start the react development server
CMD ["npm", "start"]
