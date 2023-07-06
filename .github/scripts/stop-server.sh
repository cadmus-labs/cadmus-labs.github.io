#!/usr/bin/env bash

echo "Shutting down website server"
sleep 5s
sudo kill -9 "${SERVE_PID}"
