# Node JS

Node.js is an open-source, back-end JavaScript runtime environment that enables developers to execute JavaScript code without a browser. Built on Google Chrome's V8 JavaScript engine, Node.js is a popular platform for creating solutions that require speed and scalability.

One of the core features of this runtime environment is that it is cross-platform. Developers can deploy it on Windows, macOS, and Linux. Node.js also supports both 32-bit and 64-bit environments. In addition to supporting the x86 CPU architecture, it can also run on specific ARM platforms. Node.js is also available as a Docker image and can also run on the IBM PowerLinux, System z, and AIX platforms.

- Install **Node js** on local VM.
  - Node.js gives us the option to install it using the package manager of our relevant Linux distribution. Due to its popularity, there is a Node.js install package for every popular Linux platform. 
  - As my Linux Distribution is Ubuntu, I need to access the binaries via NodeSource by specifying the version number we need. The installation requires two commands as below:
    - The first command that downloads the setup file via curl
      - `curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -`<br/>
    ![curl setup](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/curl%20setup%20file.png)
    - And the second command installs Node.js on the system
      - `sudo apt-get install -y nodejs`<br/>
    ![install node.js](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/install%20nodejs.png)
    - Also we can install the development tools such as **gcc-c++** and **make** that you need to have on your system to build native addons from npm.
      - `sudo apt-get install -y build-essential`
    - Now to verify our installation we use following commands:
      - `node --version`
      - `npm version`<br/>
    ![verify installation](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/verifying%20installation.png)
  - Create 2 APIs running on ports 6080 and 7080 with messages "Hello Node JS" and "Node JS installed successfully" respectively.
    - First, we need to create a directory and navigate inside the directory and invoke the npm init command in order to initialize a node.js project. For this we run the following commands serially:
      - `mkdir my-first-node-app`
      - `cd my-first-node-app`
      - `npm init`<br/>
    ![Initializing nodejs](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/initializing%20nodejs%20app.png)
  - After we fill in some information while invoking the npm init command, we have initialized our new node js application. We have named out app “my-first-node-app”.
  - Now we create two apps named ‘index_api1.js’ and ’index_api2.js’ as demanded by the question. And we create a folder named ‘dev-data’ where we store our APIs for both the index files named ‘api1Data.json’ and ’api2Data.json’.<br/>
    ![create required files and folders](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/creating%20required%20files%20and%20folders.png)
  - We need to run our first API on port 6080 and our second API on port 7080 with the print messages "Hello Node JS" and "Node JS installed successfully" respectively.
  - To access the API we need to type “/api” after the port number.
    - For 1st API
      - Our index_api1.js file has been coded as:<br/>
    ![index_api1](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/index_api1.png)
      - And the API as:<br/>
    ![api1Data](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api1Data.png)
    - For 2nd API
      - Our index_api2.js file has been coded as:<br/>
    ![index_api2](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/index_api2.png)
      - And the API as:<br/>
    ![api2Data](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api2Data.png)

After all this, we can check if both the API are running on their own ports and printing
the required messages.
- First API<br/>
  ![api1overview](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api1overview.png)<br/>
  ![api1api](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api1api.png)
- Second API<br/>
  ![api2overview](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api2overview.png)<br/>
  ![api2api](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/api2api.png)

  - Install the pm2 tool and create 4 clusters of both Node's.
    - To install the pm2 tool we invoke the following command in the terminal:
      - `npm install pm2 -g`
      - We can use `pm2 --version` to verify the installation and version<br/>
    ![pm2 install and verify](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/install%20pm2%20and%20verify.png)
    - Create 4 clusters on the first node/ API.
      - Let’s first start the pm2 tool using the following command:
        - `sudo pm2 start index_api1.js`<br/>
    ![pm2_api1-start](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/pm2_api1.png)
      - To start the application in 4 cluster mode let’s use the following command:
        - `sudo pm2 start index_api1.js -i 4`<br/>
    ![pm2_api1-4](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/pm2_api1-4.png)
    
    - Create 4 clusters on the second node/ API.
      - Let’s first start the pm2 tool using the following command:
        - `sudo pm2 start index_api2.js`<br/>
    ![pm2_api2-start](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/pm2_api2.png)
    - To start the application in 4 cluster mode let’s use the following command:
      - `sudo pm2 start index_api2.js -i 4`<br/>
    ![pm2_api2-4](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/pm2_api2-4.png)

  - Delete all 4 clusters one-by-one
    - To delete all 4 clusters one by one of both the APIs/ Node we invoke the following commands serially:
      - sudo pm2 delete 0<br/>
      ![Delete 0](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%200.png)
      - sudo pm2 delete 1<br/>
      ![Delete 1](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%201.png)
      - sudo pm2 delete 2<br/>      
      ![Delete 2](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%202.png)
      - sudo pm2 delete 3<br/>      
      ![Delete 3](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%203.png)
      - sudo pm2 delete 4<br/>     
      ![Delete 4](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%204.png)
      - sudo pm2 delete 5<br/>     
      ![Delete 5](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%205.png)
      - sudo pm2 delete 6<br/>     
      ![Delete 6](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%206.png)
      - sudo pm2 delete 7<br/>     
      ![Delete 7](https://github.com/LF-DevOps-Intern/4_1_react-nodejs-krishna-rikeshkarma/blob/main/Node%20JS/snapshots/delete%207.png)

      Now all the clusters of both the applications have been deleted one by one serially.


