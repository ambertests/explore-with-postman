wget https://raw.githubusercontent.com/minimaxir/big-list-of-naughty-strings/master/blns.txt -O blns.txt
echo encoded > naughty_strings.csv
commentChar="#"
while read p; do 
        firstChar=${p:0:1}
        if [[ "$firstChar" != "$commentChar" && "$firstChar" != "" ]] ; then
		echo -n $p | base64 >> naughty_strings.csv;
	fi
done <blns.txt
