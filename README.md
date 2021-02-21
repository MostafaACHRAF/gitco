# gitco

> A git command to "automate commit messages according to a given pattern"

# Demo

![gitco-demo](./gitco-demo.png)

# Installation

## Step 1

Run the folowing command to:<br/>
- Clone the project into a the desired directory '{DIR}'
- Give 'gitco' the required permissions
- Install related dependencies

```
sudo git clone https://github.com/MostafaACHRAF/gitco.git {DIR}/gitco \
&& sudo chmod +x {DIR}/gitco/git-co \
&& sudo chmod +x {DIR}/gitco/types_menu.js \
&& sudo chmod 777 {DIR}/gitco/*.log \
&& cd {DIR}/gitco && sudo npm i
```

## Step 2

Add {DIR}/gitco to your shell configuration file like this:<br/>

### ~/.zshrc or ~/.bashrc
```
export gitco_cnf_dir="{DIR}/gitco"
PATH=$PATH:${gitco_cnf_dir}
```

> Note: Replace {DIR} with the absolute path of a directory of your choice.

# Dependencies

- node
- inquirer
- fs
- bash
