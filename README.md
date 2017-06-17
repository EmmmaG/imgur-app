
![](https://github.com/EmmmaG/readme-pics/blob/master/1.jpg)
<hr />

# ImgurApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

The purpse of creating this app is to display photos from imgur gallery by using imgur api.

## Run
* npm install 
* ng serve --open

## Issues have been faced

* ~~not familar with imgur api and has spent a lot of time to find a nice gallery,  can only using the default one at this moment to try if angular functioned well.~~

* ~~have a thought of creating my own nice album and display it, will do more research on it.~~
<br />
<br />
Have been solved with displaying one of my own nice album, access token has been created by following the instruction on Imgur website with postman.
<br />
<br />
Header has been used in Angular service document to provide the authorization client id, api has been successfully accessed to get JSON doc.
<br />

* Trying to use the Imgur image upload api in Angular2
* Haven't create any service with a POST method by using api, a bit confused
* Have no idea how to convert a image file to 'Binary file' or 'base64 data'
* Downloaded a converted 'base64 data', tried to post with Postman to see which kind of data will be responsed, but failed...
* Tried without adding any parameters with the upload api in Postman, received data error: 'no image data was sent...',which means the client id works...
* So how to set the parameter if I have the base64 data will be another issue...


