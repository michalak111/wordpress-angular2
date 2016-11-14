# WPNG2

A WordPress theme that runs off of an Angular 2 app. Built for the tutorial http://doppiaeast.com/article/angular-2-wordpress-theme-setup/.

To use this as a theme, you must have the WP REST API version 2 plugin installed.

First, run `npm install`.

Inside of src/index.html, you'll need to change the base tag. `<base href="/wp-content/themes/{YOUR_DIRECTORY}/dist/">`. Change it to whatever you've named your theme directory on the server.

Inside of src/app/posts, open posts.service.ts. On the line where it says `private postsUrl = "http://{YOUR_SITE_HERE}.com/wp-json/wp/v2/";`, just place in your site name.

After you've done that, run `ng build` from your command line. This will output a `dist` folder. Upload index.php, styles.css, functions.php, and the dist folder to your theme directory on your server. You should be good to go!

This project will play nice with the Angular CLI.

# Improvements

- added menu component

You must have instaled https://pl.wordpress.org/plugins/wp-rest-api-v2-menus/

Inside app/menu/menu.service.ts set your wordpress adress inside varible - private _wpBase = "http://{YOUR_SITE_HERE}/wp-json/wp-api-menus/v2/menus/";