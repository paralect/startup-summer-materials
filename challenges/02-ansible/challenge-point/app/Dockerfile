FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app.js /usr/src/app/

EXPOSE 3000

CMD node /usr/src/app/app.js