#!/bin/bash

cd jetpack-sdk
source bin/activate
cd ../unisubs-package
cfx xpi
scp unisubs-package.xpi ubuntu@8planes.com:/var/www/unisubs