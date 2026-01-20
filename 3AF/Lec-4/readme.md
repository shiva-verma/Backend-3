grep "error" log.txt           # Find lines with "error"
grep -i "error" log.txt        # Case insensitive
grep -r "TODO" .               # Recursive search
grep -n "error" log.txt        # Show line numbers
grep -v "success" log.txt      # Invert match (exclude)

# Output redirection
echo "Hello" > file.txt        # Overwrite file
echo "World" >> file.txt       # Append to file

# Input redirection
sort < unsorted.txt

# Error redirection
command 2> error.log           # Redirect errors only
command > output.txt 2>&1      # Redirect both stdout and stderr
command &> all_output.txt      # Shorter syntax (bash)

# Count lines in output
ls -l | wc -l

# Find specific process
ps aux | grep python

# Sort and display unique values
cat names.txt | sort | uniq

# Display top 10 largest files
du -h | sort -rh | head -10

# Search and count
cat log.txt | grep "ERROR" | wc -l
