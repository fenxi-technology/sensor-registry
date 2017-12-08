# ETCD Store and browser

This Repo also contains the ETCD-Browser and Store container where you can visualize your etcd store at http://localhost:49502
ETCD Port: 49501
ETCD-BROWSER Port: 49502

## How to Use:
1. Start Containers:

		- docker-compose build
		- docker-compose up

2. Check ETCD/Application

		- Visit http://localhost:49502
		- Enter correct ETCD Host (e.g. http://localhost:49501)


## Explanation

- docker-compose.yml 

		Contains ETCD, ETCD-Browser
- Platform Sidecars/etcd-browser/
		
		This directory contains the ETCD-Browser container where you can visualize your etcd store
