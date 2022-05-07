# 2022 Internship Menu Exercise

Tackle the following steps to create a menu for a "Fancy Italian Restaurant".

## 1. Sorting

- In `index.js`, loop over `menuItems` and categorize them into sections based on each items assigned `type`
- Sort the items in each category by their `menuOrder`

## 2. Rendering

- Render the sorted results into the appropriate container with `index.html`
- Format any prices. For example, 8.5 becomes \$8.50
- Render the "spicy" icon next to any menu items where `spicy` is `true`

## 3. Styling

- Add some "italian menu" styling to boost your stores sales. Use Google Images if you need inspiration.

## 4. BONUS: Filtering

- Add a checkbox to toggle spicy options. When the checkbox is checked, the spicy options should be visible. It should be checked by default.

## 5. BONUS: What You'd Change

- Create a new file called "TODO.md". Add any additional changes you'd recommend making if this was a project you were working on for a real client.

# Work Projects/Examples

## 1. Work

## 2. Website with Database Integration

For my database class, I was tasked to create a website with database integration as a final project. In a team of 3, my group and I had a connection with a doctor at the Hotchkiss Brain Institution and we proposed an idea to create a website for the Hotchkiss Brain Institution. At the start of the project, I assisted in designing the database schema with my teammates. We created database sketches to visualize how the different tables should be created and what kind of data we needed to store. Some examples of data that we needed to store includes members of the Hotchkiss Brain Institute team, their research papers, and articles in which they were featured in. When we reached the final stages of design, we would meet with Dr. Paul Arnold, a member of the institute, to show him the results.

The website was created with basic HTML, CSS, and Javascript. My main focus when we started development of the project was the frontend development. I worked on creating and displaying the webpage as well as assisting in querying the data from the database and displaying it on the webpage. Another aspect of the webpage that I had to design was a CRUD (create, read, update, and delete) system that would be intuitive for a user who did not have any programming knowledge. To implement this, I created an administrator login system which would allow administrators to login and interact with a simple interface which would let them do a CRUD operation easily. An example of a use of this CRUD system was to upload new team members information to display on the site.

This site was briefly used in 2019 before being shut down as this was supposed to be a temporary solution.

## 3. Calgary Crimes Map Visualizer

For my information visualization class at the University of Calgary my group and I were tasked with creating a visualization using a read data set as a final project. I worked in a team of 3 people, including myself, for this project. This project started with a design phase where we would do rough sketches to show our idea, and to get it approved by our instructor. Each team was required to submit 10 variations of their ideas for their sketches. How we managed the workload was to divide the sketches up evenly and each member would create 3 of their own variations and come together to create the tenth one. Our idea was to implement an interactive map of Calgary to display the amount of crimes in each section of Calgary. When a section is selected we would drill down on the data and show a more detailed view of the crimes in a box on the webpage. My contributions at this stage of the project was providing ideas of how users could interact with the visuals and the web design for things like where the information should be displayed and how it should be displayed. The dataset that was used was publicly available information from the City of Calgary.

After the design phase, we started to iterate and implement prototypes of the site. We divided the work up as such, one team member would handle the data processing of the data set, I was handling the UI and visual aspects of the page, and the last member would do documentation, handle the assignment’s written portion and assist the others. This map was created using javascript, HTML, D3.js which was a javascript library for information visualization. My main contribution to this project was in using javascript and the D3 library to take the processed data and display it on the web page in a visually appealing way. I also worked on other small visual features such as highlighting train stations and having its name displayed.

This project can be viewed [here](https://jasondam07.github.io/final-implementation/index.html).

# Inspiration

## 1. YouTube

Another thing about YouTube that got me thinking was how they solved the issue of generating video IDs for their URLs for each video when thousands, if not millions, of videos are uploaded everyday. I learned that YouTube generated a string of base64 characters, which is composed of the characters 0 through 9, a through z, A through Z, and the underscore and hyphen character. This means that for every character added to the video ID string, there are 64 times more available IDs. For example if there is one character in a video ID, there are 64 possible unique video IDs, if there are two characters there are 64 * 64 possible unique video IDs (also 64<sup>2</sup>), if there are i characters, i being a number, there will be 64<sup>i</sup> possible unique video IDs. I also learned that videos are not incremented which both solves possible server syncing issues and other side effects of an incremental ID system, such as security risks. The way that YouTube generates a unique video ID is that when a video is created, a string of base64 characters are randomly generated, YouTube will then check it against existing video IDs, and if the generated ID is unique, it will be used. With just a maximum of 11 characters in each unique video ID, there are over 7 quintillion possible unique video IDs (that is 70,000,000,000,000,000,000 for visualization), more than enough for a very, very long time. This also means that when a video ID is generated, it is highly unlikely that it will match an existing ID, and if it does, the chances of another video ID matching an existing one is very low. It interests me how much thought is given to the seemingly smallest things and how much thought must be put in other areas of the site if this is only for generating a unique video ID.

## 2. Game Optimization

One of my favorite games is a game by Nintendo, created in the 1990s, called “Super Mario 64” for the Nintendo 64 platform. This was one of the first 3D rendered games Nintendo would go on to create as the Nintendo 64 was the first game console created by Nintendo that could natively support 3D graphics. This would result in the game running fine, but was rough around the corners; there were many bugs discovered by players and the game was not optimized as it was running slower than games (created later with more understanding of the hardware) that were more graphically demanding. Simply put it was running with lower frames per second than future games. 

It has been over 25 years since the game came out and users were able to decompile the code for the game. One user on YouTube documented his process of going over the code of the game (was written in an earlier version of C) and reoptimizing every part of the code to make the game run faster and to get rid of many bugs that were caused by faulty logic. To top it off, what impressed me the most was that he made it so that the code could be recompiled and run on actual Nintendo 64 hardware. The video can be found here: https://www.youtube.com/watch?v=t_rzYnXEQlE.

I found this video very interesting because the creator of the video goes over not only how the code works, but gives an explanation of what the hardware is doing and how the hardware communicates. I was learning not only how he re-coded certain parts of the code so that it would run more efficiently, but also learning how the hardware was affected and why it was more efficient to do the things he was doing. There were parts of him explaining what the hardware was doing that was still confusing to me, but it really made me learn that better coding practices could go a long way and appreciate the tools that we have now which does much of the optimization for us so we do not have to think about the hardware as much as the developers of the past did.

# Focus

One of my goals is to become a proficient fullstack developer because I believe that having a good understanding of all parts of a system will help me with coding more efficiently and avoid problems. In the previous year or two of my life I have become more experienced with frontend development but have not had the chance to do backend development as much as I would like to. If I had the resources and time to learn anything, I would like to learn more about backend development for my first 6 months at Critical Mass. Even though I enjoy frontend development more as I am interested in design (not limited to web design), I believe that gaining more understanding of the backend will improve my frontend development skills and make me a more versatile developer in the future. 