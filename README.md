<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# spe-app-registry-etcd [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This Repo contains the ETCD Key/Value store and the corresponding ETCD-Browser where you can visualize your etcd store

## How to Use

### Standalone
Not supported
### Docker
Build and run docker image with `docker-compose up -d`

## Screenshots

| Mobile        | Desktop       |
| ------------- | ------------- |
| <img width="50%" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_960_720.png"/> | <img width="50%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Desktop_font_awesome.svg/512px-Desktop_font_awesome.svg.png"/> |

|More Screenshots|
| ------------- |
| <img width="20%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2000px-Hamburger_icon.svg.png"/> |

## Requirements
- 

## Features
- 

## Known Issues
-

## Troubleshooting

Current browsers complain about cross-origin policy. By this restriction the etcd browser can not communicate with the main etcd application.
This problem can be solved by adding the `ETCD_CORS` environment variable with value `*`.

- ETCD_CORS=*
Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use

## How to build

1. Start Containers:

		- (Optional)docker-compose build
		- docker-compose up

2. Check ETCD/Application

		- Visit http://localhost:49502
		- Enter correct ETCD Host (e.g. http://localhost:49501)

## Configuration
-

## Tests
-

## Notes

- ETCD Port: 49501

- ETCD-BROWSER Port: 49502
