# Image Registry

## Usage

Home: `http://localhost:3000/`

### View Uploaded Files (Server Index)

`http://localhost:3000/uploads`

URL where images can be retrieved with Browser or AJAX HTTP GET:

`http://localhost:3000/uploads/img/<image_name>`

## Development

### Views rendered with PUG

`https://github.com/pugjs/pug`

Convert HTML to Pug and back:
`https://pughtml.com/`

Install packages and run app locally

`npm install`

`npm run start`

Use supervisor to restart app during development

 `npm install supervisor -g`
 
 `suprevisor bin/www`
 

### Libraries Used

1. Express JS
2. https://github.com/richardgirges/express-fileupload
3. https://www.dropzonejs.com/# 

## Docker

Uses Alpine Node image

 `docker-compose build`
 
 `docker-compose up`

### Volume Setup

You need a volume for persistant image storage mapped to the uploads folder (see docker-compose.yml)

 `- img-data:/app/uploads/img/`
