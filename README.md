# web-simple-microservices

URL: web-thuyldx.com
PORT: 8000

```sh
sudo apt update && sudo apt upgrade -y
```

```sh
sudo apt install docker.io docker-compose
```

```sh
sudo docker login
```

```sh
nano ~/.bashrc 
```

```sh
alias docker='sudo docker'
alias docker-compose='sudo docker-compose'
alias build-fe='docker run -d -it --name fe -p 9001:80 whiteb3ar99/fe:latest'
alias update-fe=' docker build -t whiteb3ar99/fe:latest . && docker rm -f fe && docker run -d -it --name fe -p 9000:80 whiteb3ar99/fe:latest'
alias push-fe='docker push whiteb3ar99/fe:latest'
alias pull-fe='docker pull whiteb3ar99/fe:latest'
```

```sh
source ~/.bashrc 
```

```sh
git clone https://github.com/mercy-thuyle/web-simple-microservices.git
```

```sh
cd web-simple-microservices/fe/web
```

```sh
build-fe
```