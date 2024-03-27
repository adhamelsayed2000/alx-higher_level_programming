#!/bin/bash
# Script that takes in a URL and displays
curl -sI "$1" | grep -i "Allow" | awk -F ": " '{ print $2 }'
