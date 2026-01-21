#!/bin/bash

echo "Hello world"

echo "Current date: $(date)"

name="Alice"
age=25
directory=$(pwd)

# Using variables
echo "Name: $name"
echo "Age: $age"
echo "Current directory: $directory"

# Read user input
read -p "Enter your name: " user_name
echo "Hello, $user_name!"

#!/bin/bash

# If-else statement
if [ $age -gt 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi

# File tests
if [ -f "myfile.txt" ]; then
    echo "File exists"
fi

if [ -d "myfolder" ]; then
    echo "Directory exists"
fi

# String comparison
if [ "$name" = "Alice" ]; then
    echo "Name is Alice"
fi
