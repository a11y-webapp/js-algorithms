## NPM

1. Update *npm* to the latest version
```javascript
npm install npm@latest -g
```

## GitHub

1. Generate and add SSH keys
    1.1 Generate
    ```javascript
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```
    1.2 Start the ssh-agent in the background
    ```javascript
    eval "$(ssh-agent -s)"
    ```
    1.3 Add your SSH private key to the ssh-agent and store your passphrase in the keychain.
    ```javascript
    ssh-add -K ~/.ssh/id_rsa
    ```
    1.4 Copy the SSH key to your clipboard.
    ```javascript
    $ pbcopy < ~/.ssh/id_rsa.pub
    ```
    1.5 Add SSH key to the GitHub -> Settings


