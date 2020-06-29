# CAT-MEME-CONSTRUCTOR

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
_Everyone loves a cat meme! **Cat Meme Constructor** allows users to choose a random image or categorized cat image and customize it with a caption, filters, and styled borders. Save the meme (or multiple memes) to your meme library, or save them to your desktop._

<br>

### Wireframes


[Web and Mobile Wireframes](https://wireframe.cc/LKoNws)


<br>

### MVP


#### MVP Goals

- _A)Make an API Call to receive a random cat image._
- _B)Make an API Call to choose a specific cat category (i.e. cats wearing hats) to receive  3 random images.User Chooses one._
- _C)Make an API Call to choose a specific breed of cats to receive 3 random images. User Chooses one._
- _Whether the user chooses A,B, or C, one image will appear in the customization station._
- _User can add a caption._
- _User can add add an image filter._
- _User can add a colorful border or a styled border._
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

[API TEST](https://res.cloudinary.com/alienora/image/upload/v1593430102/Screen_Shot_2020-06-28_at_3.55.39_PM_emcg1i.png)

<br>



|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Breaks down all functionality into conponents_ |
| React Router | _Allows for easy navigation via the URL_ |

<br>

#### MVP Components


```
src
|__ components/
      |__ App.js
      |__ RandomButton.js
      |__ CategoryButton.js
      |__ BreedButton.js
      |__ NextButton.js
      |__ AddCaption.js
      |__ AddFilter.js
      |__ AddBorder.js
      |__ Reset.js
      |__ GoBacktoChoose.js
      |__ SaveOption.js
   
```

<br>

#### MVP Breakdown


|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
| App.js        | class    |   y   |   y   |   n   | _Hub for routers and API_ |
| RandomButton  | functional |   n   |   n   |   n   | _Random function_ |
| CategoryButton| class      |   y   |   y   |   y   | _limit 3 random images per category_ |
| Breed Button  | class      |   y   |   y   |   y   | _limit 3 random images per breed_ |
| NextButton    | functional |   y   |   y   |   y   | _carries chosen image to new page_ |
| AddCaption    | class      |   y   |   y   |   y   | _add text directly onto image_ |
| AddFilter     | class      |   y   |   y   |   y   | _add filter to image_ |
| AddBorder     | class      |   y   |   y   |   y   | _add styled border to image_ |
| Reset         | functional |   y   |   y   |   y   | _resets the image back to original state_ |
| GoBackToChoose| functional |   n   |   n   |   n   | _returns to image selector page_ |
| SaveOption    | functional |   n   |   n   |   n   | _saves the image to the image library_ |

<br>

#### MVP Timeframes



| Task                                            | Priority | Estimated Time | Time Invested |
| ---------------------------------------------   | :------: | :------------: | :-----------: | 
| Create components and psuedocode                |    H     |     5 hrs      |      hrs     |   
| set up the API calls, render images on pages    |    H     |     5 hrs      |      hrs     |  
| Creat customizing options                       |    H     |     10 hrs      |      hrs     |     
| Button functionality                            |    H     |     10 hrs      |      hrs     |     
| CSS                                             |    H     |     10 hrs      |      hrs     |  
| TOTAL                                           |          |     40 hrs      |      hrs     |    

<br>

### Post-MVP

- Image library, add several images to the page
- Save to your desktop
- LASERS

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
