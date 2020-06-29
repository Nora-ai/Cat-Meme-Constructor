# CAT-MEME-CONSTRUCTOR
_working title_

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

<br>

### Description
_Everyone loves a cat meme! **Cat Meme Constructor** allows users to choose a random image or categorized cat image and customize it with a caption, filters, and colorful borders. Save the meme (or multiple memes) to your meme library, or save them to your desktop._

<br>

### Wireframes


![Web and Mobile Wireframes](https://wireframe.cc/LKoNws)


<br>

### MVP

_The **Cat Meme Constructor** allows a user to choose an image and customize it. fjsfsjfjkfndkndkfdjkjgkd_

<br>

#### MVP Goals

- _A)Make an API Call to recieve a random cat image_
- _B)Make an API Call to choose a specific cat category (i.e. cats wearing hats) to receive a random image_
- _C)Make an API Call to choose a specific breed of cats to recieve a library of images_
- _Whether the user chooses A,B, or C, one image will appear in the customization station_
- _User can add a caption_
- _User can add add an image filter_
- _User can add a colorful border or a styled border_
- _Image can be saved to computer_

<br>

#### MVP API


|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| The Cat API |      yes      | _https://docs.thecatapi.com/_ | _https://api.thecatapi.com/v1/images/search_ |

Sample Query Results for Random Image:

```
[
    {
        "breeds": [],
        "id": "5cs",
        "url": "https://cdn2.thecatapi.com/images/5cs.jpg",
        "width": 640,
        "height": 425
    }
]

```

<br>



|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Lorem ipsum dolor sit amet, consectetur._ |
| React Router | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Header    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Navigation  | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Home     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Index     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Detail    | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Gallery    |   class    |   y   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
| Gallery Card | functional |   n   |   y   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Footer    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL            |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Post-MVP



<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
