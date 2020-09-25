Here I have constructed a random password generator that prompts the user to 
select what is included in the password that is generated.

The generator starts once the button on the page is clicked, which is beneficial because then it lets the HTML load in first and is not loading any javascript until it is prompted to do so essentially.

next is I ran the function to generate a password, which is essentially all this is.
The user is prompted to select how long they would like their password to be, as long it is longer than 8 characters and below 128 characters.
If the user selects an amount any higher or any less than the set values listed as available, a prompt will tell them that they made an error and will have to retry with a different selection.

the function then goes through all of the variables listed and confirms what they would like used in their password.

the function then goes through multipl "IF" statements to confirm that they meet all of the requirements for their password. This is stating that their selections are true and allows the function to continue.

Then all of the password characters that the user agreed to use gets put into a for loop to log the variables used into an array.

then we run another for loop that randomly selects variables from the password array and console logs it to be the password in the password id in the HTML.

