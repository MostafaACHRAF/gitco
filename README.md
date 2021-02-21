# gitco

> A git command to "automate commit messages according to a given pattern"

# Demo

![gitco-demo](./gitco-demo.png)

# Installation

## Step 1

Add {DIR}/gitco to your shell configuration file like this:<br/>

> Note: Replace {DIR} with the absolute path of a directory of your choice.

### ~/.zshrc or ~/.bashrc
```
export gitco_dir="{DIR}/gitco"
PATH=$PATH:${gitco_dir}
```

Open a new terminal and run:<br/>

```
source ~/.zshrc
```

or

```
source ~/.bashrc
```

## Step 2

Run the folowing command to:<br/>
- Clone the project into a the desired directory '{DIR}'
- Give 'gitco' the required permissions
- Install related dependencies

```
sudo git clone https://github.com/MostafaACHRAF/gitco.git ${gitco_dir} \
&& sudo chmod +x ${gitco_dir}/git-co \
&& sudo chmod +x ${gitco_dir}/types_menu.js \
&& sudo chmod 777 ${gitco_dir}/cnf \
&& cd ${gitco_dir} && sudo npm i
```


# Dependencies

- node
- inquirer
- fs
- bash
