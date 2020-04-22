import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id:1, post:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ex dignissimos labore reprehenderit nihil in porro. Laborum dolore est cumque inventore odit ad, quis consequuntur, adipisci, libero repellat veritatis illum.', count: 5, comment: 1},
  {id:2, post:'noting', count: 1, comment: 0},
  {id:3, post:'Hi, hello', count: 2, comment: 1},
  {id:4, post:'new', count: 10, comment: 2}
]

let dialogsData=[
    {id: 1, name: 'Arina Chubyr', shortMes: 'smotri eto ti', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png' },
    {id: 2, name: 'Polina Demina', shortMes: 'hello', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img1.png'},
    {id: 3, name: 'Kirill Stepka', shortMes: 'how do  you sho', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png'},
    {id: 4, name: 'Nikita Taraban', shortMes: 'create react app', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 5, name: 'Karina Berry', shortMes: 'illya pribsdfj', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 6, name: 'Illya Sirnik', shortMes: 'letoeo sgjjwd', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 7, name: 'Mash Noyu', shortMes: ' good lack', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 8, name: 'Arina Chubyr', shortMes: 'smotri eto ti', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png' },
    {id: 9, name: 'Polina Demina', shortMes: 'hello', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img1.png'},
    {id: 10, name: 'Kirill Stepka', shortMes: 'how do  you sho', avatar: 'http://gambolthemes.net/workwise-new/images/resources/m-img4.png'},
    {id: 11, name: 'Nikita Taraban', shortMes: 'create react app', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 12, name: 'Karina Berry', shortMes: 'illya pribsdfj', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 13, name: 'Illya Sirnik', shortMes: 'letoeo sgjjwd', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'},
    {id: 14, name: 'Mash Noyu', shortMes: ' good lack', avatar:'http://gambolthemes.net/workwise-new/images/resources/m-img3.png'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData= {dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
