import React from 'react';

const About = () => {
    return (
        <div class="about">
            <h1>Overview</h1>
            <p>Smartfolio is a web-based stock portfolio manager application, built with React. Functionalities include searching and displaying 
                stock price trends using time-series data fetched from the Alpha Vantage API, as well as building a stock portfolio and analysing 
                its performance. The application is a personal project with the intent to develop my skills using React and other technologies. 
                The end goal of this project is to turn Smartfolio into a full-stack application.</p>
            <a class="source-code" href="https://github.com/benjshao/react-stock-tracker">Source Code</a>
            <h1>Architecture &amp; Technologies</h1>
            <ul>
                <li><b>React</b>, a front-end JavaScript library for building user interfaces or UI components</li>
                <li><b>JavaScript</b>, the project's main programming language</li>
                <li><b>HTML &amp; CSS</b>,  used to style the application</li>
                <li><b>Alpha Vantage</b>,  a third-party stock market API used to query and receive real-time stock data</li>
            </ul>
            <h1>Future Steps</h1>
            <p>Smartfolio is still in development; I am always looking to expand and improve the project. The roadmap for the future of 
                this application is as follows,</p>
            <ul>
                <li><b>Implement Node.js and Express.js</b> for server-side scripting</li>
                <li><b>Implement a database</b> for storage and management of portfolio information</li>
                <li><b>Implement user authentication</b> for identication of the user</li>
                <li><b>Implement graphical representation of portfolio performance</b> to expand the application's portfolio manager functionality</li>
            </ul>
        </div>
        
    )
}

export default About;
