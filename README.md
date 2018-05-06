<img src="https://raw.githubusercontent.com/ScaleIT-Org/media-ressources/master/logo/scaleit-logo.png" width="20%"/>

# ETCD Store and browser ![License](https://img.shields.io/github/license/ScaleIT-Org/spe-app-registry-etcd.svg?link=https://github.com/ScaleIT-Org/spe-app-registry-etcd/blob/master/LICENSE)

This Repo contains the ETCD Key/Value store and the corresponding ETCD-Browser where you can visualize your etcd store at http://localhost:49502

ETCD Port: 49501

ETCD-BROWSER Port: 49502

## How to Use:
1. Start Containers:

		- (Optional)docker-compose build
		- docker-compose up

2. Check ETCD/Application

		- Visit http://localhost:49502
		- Enter correct ETCD Host (e.g. http://localhost:49501)


## Explanation

- docker-compose.yml 

		Contains ETCD, ETCD-Browser
- Platform Sidecars/etcd-browser/
		
		This directory contains the ETCD-Browser container where you can visualize your etcd store
		
## Environment Variables

- ETCD_CORS=*

	Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use
