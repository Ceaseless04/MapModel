## Inspiration
 Before this hackathon, we collaborated in Shellhacks, hosted by Florida International University. During the hackathon, we noticed people from all over the world coding in one room: South America, Asia, and Africa. Our team represents five countries: Spain, Colombia, Venezuela, Dominican Republic, and Kenya. And we were all computer science majors.
The field of study people pursue and the country they are from play a significant role in how people connect.
We decided to make a map of the different countries represented at Florida International University because Miami's global culture pot inspires us. 
We wanted to show the world that our school, FIU represents so many different countries. We also wanted to give students a way to find other students with similar backgrounds and majors.
We want other schools to use this as well. 
 With this, we created a data map of the different countries students at an institution represent with photo markers so you can see people's faces (which makes it more personal).

## What it does
Map me is a web application that shows a map full of photo markers of students from different countries. You can filter the map by country and major.

You can add yourself to the map by clicking on "Add yourself to map," which takes you to a user form. On this form, you must enter your student email address, verify it, and enter information about yourself (name, major, city, and country). After filling out all this information, you can upload a photo of yourself and add it to the map.

Map me stores all Firebase data so that users can easily access it later. In addition to viewing markers on the map, you can click on one of them and see more information about that person in a sidebar beside their marker.
You can also filter the map by major or country.


## How we built it 

>>This project was developed using the following
 technologies: Typescript, JavaScript, SCSS,
Apis:  javascript api, geocodeing API, and places API
Frameworks: React.js

>>The website was created using the framework React to make the user interface. Then, it was styled using SCSS.


>>We also used Firebase, a server to store user information (why we used Firebase) 
we created the map with Google Maps API. 
The autocomplete feature for location response was done with Google Places Autocomplete. It makes it easier for users to pick a country without filling it out. 
The dropdown list in pick your major is filled using FIU's API of majors available so that students can quickly look up there and click on it without having to type it out manually in the form fields. 

## Challenges we ran into

1. Placing custom markers on the maps component proved to be quite a challenge. Initially, we used the [google maps package](https://www.npmjs.com/package/google-maps) which was straightforward. After trying to host the website, we got an error that the package was using an older version of ReactJS. That error lasted for quite some time as we had not anticipated that. In light of this, we decided to use the more community-supported [google maps/api](https://www.npmjs.com/package/@react-google-maps/api) whereby the documentation wasn't clear on having custom markers.

2. NextJS proved a bit of a challenge to host. So many articles were out there, but still, we imagined it should have been easier to host. Thanks to the experimental firebase features, we were able to deploy it, though that was another hassle as once a function is deployed with an error, you have to go to the cloud console and manually delete it. The error you get in the console is not clear as well.

3. Knowledge gap - this is a whole pandora's box on its own. From GitHub(branching, templating, and project tracking) to NextJs to FrontEnd (using SCSS, and mixins) and backend engineering. Not to mention the google maps platform SDK and APIs; we had a lot to learn. Thanks to the team, information was disseminated accordingly. Teamwork makes the dream work!

## Accomplishments that we're proud of

We are proud to have completed the following for our web app:
- Having a shot at the concept of mixins and variables in scss
- Completing a WebApp with crud operations using a fairly unfamiliar framework
- Collaborating on a team to complete the MVP and being able to track tasks, assign tasks, and have standups from time to time.


## What we learned
>Always have a deploy link from the very beginning of the project if you're going to host your work. This will make sure you have the right working dependencies from the very beginning of the project.
>After completing Mapme, we learned how to collaborate using git/GitHub, thanks to Leon and Camila.
>How to prioritize a Minimum Viable Product (MVP) to get your product out there and the importance of communicating ideas efficiently.
>We used Typescript for the first time. We learned how to store data on a server using Typescript, a programming language for type-safe languages like JavaScript. It's easy to read and write, you can use it in web apps, and it's even easier to scale up to large projects due to its built-in support for async/await functions. We also learned how to work with APIs (application programming interfaces). 
>We also earned how to connect and store data on a firebase server. 

## What's next for MapMe

In the future, we plan on adding a social feature where people can connect on the map and have map friends. The first iteration will be an easy way to add friends and make new connections, but there are several other possibilities for where we could take this. For example, we're looking into adding more filters so people can narrow down their search for friends based on age range, interests, and year in school (first-year, second-year students, ect).

In addition, we're also planning some cool new ways to take selfies in our image upload feature—we'll be adding a button to take selfies that users can upload directly to your account! We're also considering adding some styling to our side nav (which is the area where you see your name, country, profile pic, and major).
