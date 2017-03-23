#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

git diff HEAD --stat
printf "\n"
git status

bold=$(tput bold)
boldred=${bold}$(tput setaf 1)
green=$(tput setaf 2)
normal=$(tput sgr0)

printf "\n${boldred}Have you prefixed your commit message with JIRA / Trello ticket reference?${normal}\n"
printf "\nDo you wish to commit on branch ${green}${branch_name}${normal}?\nThe commit message is: ${green}${1}${normal}\n\n"

select yn in "Yes" "No"; do
	case $yn in
		Yes )
				find . -name ".DS_Store" -print0 | xargs -0 rm -rf
				find . -name "._*" -print0 | xargs -0 rm -rf

				# Runs all the git commands

				git add -A
				git commit -m "${1}"

				break;;
		No )
				echo "Ok, maybe next time :-)"
				exit;;
	esac
done
