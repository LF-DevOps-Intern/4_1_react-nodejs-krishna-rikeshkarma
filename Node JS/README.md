# Node JS

Node.js is an open-source, back-end JavaScript runtime environment that enables developers to execute JavaScript code without a browser. Built on Google Chrome's V8 JavaScript engine, Node.js is a popular platform for creating solutions that require speed and scalability.

One of the core features of this runtime environment is that it is cross-platform. Developers can deploy it on Windows, macOS, and Linux. Node.js also supports both 32-bit and 64-bit environments. In addition to supporting the x86 CPU architecture, it can also run on specific ARM platforms. Node.js is also available as a Docker image and can also run on the IBM PowerLinux, System z, and AIX platforms.

- Install **Node js** on local VM.
  - Node.js gives us the option to install it using the package manager of our relevant Linux distribution. Due to its popularity, there is a Node.js install package for every popular Linux platform. 
  - As my Linux Distribution is Ubuntu, I need to access the binaries via NodeSource by specifying the version number we need. The installation requires two commands as below:
    - The first command that downloads the setup file via curl
      - `curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -`<br/>
    ![curl setup]()
    - And the second command installs Node.js on the system
      - `sudo apt-get install -y nodejs`<br/>
    ![install node.js]()
    - Also we can install the development tools such as **gcc-c++** and **make** that you need to have on your system to build native addons from npm.
      - `sudo apt-get install -y build-essential`
    - Now to verify our installation we use following commands:
      - `node --version`
      - `npm version`<br/>
    ![verify installation]()
  - Create 2 APIs running on ports 6080 and 7080 with messages "Hello Node JS" and "Node JS installed successfully" respectively.
    - First, we need to create a directory and navigate inside the directory and invoke the npm init command in order to initialize a node.js project. For this we run the following commands serially:
      - `mkdir my-first-node-app`
      - `cd my-first-node-app`
      - `npm init`
    ![Initializing nodejs]()
  - After we fill in some information while invoking the npm init command, we have initialized our new node js application. We have named out app “my-first-node-app”.
  - Now we create two apps named ‘index_api1.js’ and ’index_api2.js’ as demanded by the question. And we create a folder named ‘dev-data’ where we store our APIs for both the index files named ‘api1Data.json’ and ’api2Data.json’.
    ![create required files and folders]()
  - We need to run our first API on port 6080 and our second API on port 7080 with the print messages "Hello Node JS" and "Node JS installed successfully" respectively.
  - To access the API we need to type “/api” after the port number.
    - For 1st API
      - Our index_api1.js file has been coded as:
    ![index_api1]()
      - And the API as:
    ![api1Data]()
    - For 2nd API
      - Our index_api2.js file has been coded as:
    ![index_api2]()
      - And the API as:
    ![api2Data]()

After all this, we can check if both the API are running on their own ports and printing
the required messages.
- First API
  ![api1overview]()
  ![api1api]()
- Second API
  ![api2overview]()
  ![api2api]()

  - Install the pm2 tool and create 4 clusters of both Node's.
    - To install the pm2 tool we invoke the following command in the terminal:
      - `npm install pm2 -g`
      - We can use `pm2 --version` to verify the installation and version
    ![pm2 install and verify]()
    - Create 4 clusters on the first node/ API.
      - Let’s first start the pm2 tool using the following command:
        - `sudo pm2 start index_api1.js`
    ![pm2_api1-start]()
      - To start the application in 4 cluster mode let’s use the following command:
        - `sudo pm2 start index_api1.js -i 4`
    ![pm2_api1-4]()
    
    - Create 4 clusters on the second node/ API.
      - Let’s first start the pm2 tool using the following command:
        - `sudo pm2 start index_api2.js`
    ![pm2_api2-start]()
    - To start the application in 4 cluster mode let’s use the following command:
      - `sudo pm2 start index_api2.js -i 4`
    ![pm2_api2-4]()

  - Delete all 4 clusters one-by-one
    - To delete all 4 clusters one by one of both the APIs/ Node we invoke the following commands serially:
      - sudo pm2 delete 0     
      ![Delete 0]()
      - sudo pm2 delete 1
      ![Delete 1]()
      - sudo pm2 delete 2      
      ![Delete 2]()
      - sudo pm2 delete 3      
      ![Delete 3]()
      - sudo pm2 delete 4     
      ![Delete 4]()
      - sudo pm2 delete 5     
      ![Delete 5]()
      - sudo pm2 delete 6     
      ![Delete 6]()
      - sudo pm2 delete 7      
      ![Delete 7]()

      Now all the clusters of both the applications have been deleted one by one serially.


