# Sensi
> An interactive journal experience that provides insight to and engages human emotions

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Sensi is a single page application that allows users to create a profile and track their emotional patterns. The user creates a descriptive entry of their mood or day's events, which is processed by sentiment analysis technology and rendered on the user's profile as a color indicative of mood polarity. A chart is included to count and compare mood polarities. Further, a user can balance their current emotional state in a View room of relaxing VR videos, but to access it the user must pass a Smile test! A snapshot is taken of the user every six seconds until their smile is scored at 95% or above.

## Intro Video
[Sensi on YouTube](https://www.youtube.com/watch?v=V5oDAX56trY)

## Technologies
* Vue.js
* Node with Express
* PostgreSQL
* AYLIEN Sentiment Analysis
* Microsoft Cognitive Services - Face API
* Firebase
* Heroku

## Setup
To run this project, install it locally by cloning the GitHub repository.

API key for Microsoft Cognitive Services - Face API will need to be switched out in the Smile.vue file.
API key for AYLIEN will also need to be switched out after 11/16/19. This key is held in the backend.
You may sign up for a free trial for both of these and replace the keys.
The backend repo can be found at https://github.com/catherine-o/sensi-backend. 
However, you will need to set up your own local database connection as it is currently connected to Postgres via Heroku.

From inside the project directory:
```
npm install

npm run serve
```
Open your browser (preferably Chrome) and go to http://localhost:8080 or where otherwise directed.

## Code Examples
```javascript
.then(response => {
  this.smile = (response.data[0].faceAttributes.emotion.happiness) * 100
  if (this.smile > 95){ 
    setTimeout(() => {
    router.push({ path: '/views'})
    }, 3000)
  }
})
```

```javascript
<li v-for='post in posts' 
  :key='post.id'
  @click='showModal(post)'
  :style='determineColor(post)'>
  <span class='polarity'>{{ post.polarity }}</span>
  <span class='content'>{{ post.content }}</span>
</li>
```

```javascript
beforeDestroy(){
  camera
    .getTracks()
    .forEach(function(track) {
      track.stop();
    })
  camera = null
  clearInterval(this.testTimer)
}
```


## Features
* Create user account
* Submit new journal entry for sentiment analysis
* Review previous entries and track emotional patterns over time
* View total counts of each mood polarity in Chart view
* Access VR View room via camera snapshots and smile analysis
* Balance current emotional state by viewing relaxing VR videos


To-do list:
* Build another chart type in Chart view
* Implement a filter function so users may choose VR mood
* Allow users to delete entries
* Complete responsive design functionality


## Status
Project is: deployed for desktop browsers at [https://sensi-journ.firebaseapp.com](https://sensi-journ.firebaseapp.com). However, will need new API keys for AYLIEN & Microsoft Cognitive Services (Limited Trials)

## Inspiration
The inspiration for Sensi came from an interest in AI and Machine Learning technologies. I wanted to build a product that would increase user engagement, such as camera hardware or possibly a VR headset. I was also inspired by futuristic and clean design concepts, such as seen in some episodes of a popular Netflix technology TV series :)

## Contact
Created by [Catherine O'Hara](https://www.linkedin.com/in/catherine-o)

Feel free to contact me!

## License
[GPL v3.0](https://github.com/catherine-o/sensi-frontend/blob/master/LICENSE)
