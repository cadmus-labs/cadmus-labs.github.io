#!/usr/bin/env bash

echo
echo "Generating certs for the website server"
openssl req -newkey rsa:4096 \
    -x509 \
    -sha256 \
    -days 3650 \
    -nodes \
    -out "${PWD}/server.crt" \
    -subj "/C=AU/ST=NSW/L=Sydney/O=cadmus-labs/OU=cadmus-labs/CN=cadmus-labs.github.io/emailAddress=cadmus-labs@gmail.com" \
    -keyout "${PWD}/server.key"
export NODE_EXTRA_CA_CERTS="${PWD}/server.crt"

echo
echo "Starting website server"
sudo echo "127.0.0.1 cadmus-labs.github.io" | sudo tee -a /etc/hosts
echo
echo
cat /etc/hosts
echo
echo
npx serve "${WEBSITE_BUILD_DIR}" \
    --no-port-switching \
    --debug \
    --single \
    --ssl-cert "${PWD}/server.crt" \
    --ssl-key "${PWD}/server.key" \
    --listen tcp://cadmus-labs.github.io:8080 </dev/null &
echo "SERVE_PID=${!}" >> "${GITHUB_ENV}"
sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport 443 -j REDIRECT --to-port 8080
npx wait-on -t 10000 -i 1000 --verbose https://cadmus-labs.github.io

sudo apt install -y ca-certificates
sudo cp "${NODE_EXTRA_CA_CERTS}" /usr/local/share/ca-certificates
sudo update-ca-certificates
