#!/bin/bash
# send a request to an URL with curl
curl -sI "$1" | grep 'Content-Length:' | cut -d' ' -f2