# 08c-Auth-Integration
This guide explains how to set up Auth0 for authentication in My React application.
To set up the Auth-Integration app. you will need:
## Set up Auth0 for authentication
To set up the Auth0 Application you will need:
### Sign up for Auth0
If you don't have an Auth0 account, follow these steps to sign up and create an Auth0 application:

1. Visit the [Auth0 website](https://auth0.com/).
2. Sign up for a free account, or log in if you already have one.

### Create an Auth0 Application
Once you have an Auth0 account, create a new application:

1. From the Auth0 dashboard, go to **Applications**.
2. Click **Create Application**.
3. Give your application a name (e.g., "React Auth App").
4. Select **Single Page Web Applications**.
5. Click **Create** to create your application.

### Configure Auth0 Settings
After creating your application, configure the required settings:

1. In the Auth0 dashboard, go to the **Settings** tab for your application.
2. Set the **Allowed Callback URLs** to the URL where Auth0 should redirect users after authentication:
   - For local development, use `http://localhost:3000`.
3. Set the **Allowed Logout URLs** to where users should be redirected after logging out:
   - For local development, you can use `http://localhost:3000`.
4. Set the **Allowed Web Origins** to the URLs that should be allowed to interact with Auth0:
   - For local development, set it to `http://localhost:3000`.

## Set up ReactJs application
To set up the ReactJs Application you will need:

1. Clone this repository.
2. Run **nmp i** in your terminal.
3. Create an **.env** file from my **.env-example** file.
4. set up the environment variables, you can get the **AUTH0_DOMAIN** and **CLIENT_ID** from your **Auth0 Application**.

![image](https://github.com/RenasAli/08c-Auth-Integration/assets/91476600/43874ba2-cf0b-4af4-8bee-875b18f4da52)




#### Now you are done whith setting up the ReactJs Application.
To run the application run **npm start** in your terminal and the application will run on port **3000**.


## Use the Application.
To use the application make sure that the app is running
1. vist http://localhost:3000/
2. click **Log In** button.
    - when you click the button you will land at this page:
      <img width="572" alt="image" src="https://github.com/RenasAli/08c-Auth-Integration/assets/91476600/82b92f36-c74a-48d3-b326-e28e8298c392">
    - Sign up for the ferst time and then you will be able to log in.
3. when you are logged in you can se your acount details like:
      - <img width="1183" alt="image" src="https://github.com/RenasAli/08c-Auth-Integration/assets/91476600/a6cde3b0-2b2d-480a-8aa3-905a4a87c30a">
4. click **Log out** button to log out.





