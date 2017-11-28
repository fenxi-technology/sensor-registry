# ETCD Store and browser

This Repo also contains the ETCD-Browser and Store container where you can visualize your etcd store at http://localhost:8080

## How to Use:
1. Start Containers:

		- docker-compose build
		- docker-compose up

2. Check ETCD/Application

		- Visit http://localhost:8080
		(You should see an entry called "Example1" with Name, Icon and Desc Values)
		- Visit http://localhost:3000
		(You should see a simple webpage from the example application)

3. Verify (Optional)
	
		Kill the Example Application and Check ETCD again to verify that the Example Application is not registrated anymore
		- docker ps  (get container_ID of Example application)
		- docker stop "container_ID"
		- Visit http://localhost:8080

## Explanation

- docker-compose.yml 

		Contains ETCD, ETCD-Browser and Example Application docker containers
- etcd-browser/
		
		This directory contains the ETCD-Browser Container where you can visualize your etcd store

- example/Dockerfile

		Describes a simple Node:boron Docker Container which executes the sidecar script at startup
