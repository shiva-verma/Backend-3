#!/bin/bash

if [-d "test"]; then
   touch test/file.txt

   echo "This file is inside test folder" >test/file.txt

   cat test/file.txt
else
    mkdir test

    touch test/file.txt

    echo "This file is inside test folder" >test/file.txt

    cat test/file.txt
fi
