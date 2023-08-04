/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a way to back up your code off your computer.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'gitHub is a platform used to store code files, and share them with others.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

let init = {
    description: 'the command used to create a local repository',
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: 'the command used to make a copy of a forked repository',
    code: 'git clone'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

let status = {
    description: 'the command used to view the status of the files in the repository',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

let add = {
    description: 'the command used to add files to the repository',
    code: 'git add'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: 'the command used to save or commit files to the repository',
    code: 'git commit -m "descriptive commit message"'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description: 'the command used to link your local repository with the repository created on gitHub',
    code: 'git remote add origin'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

let push = {
    description: 'the command used to upload the commits to gitHub',
    code: 'git push'
}
