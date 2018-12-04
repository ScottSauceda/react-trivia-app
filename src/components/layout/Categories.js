import React, { Component } from 'react';

import { Nav } from '../views'


class Categories extends Component {

    render() {
        return(
            <div className="wrapper">
            <Nav />
                <div className="categoriesDiv">
                <h1>Pick a Category</h1>
                        <ul>
                            <li><a href="/">Movies</a></li>
                            <li><a href="/">Music</a></li>
                            <li><a href="/">Television</a></li>
                        </ul>

                        <hr />

                        <div className="moviesDiv">
                            <h1>Movie Questions</h1>
                            <ul>
                                <li>
                                    Q1. What is the highest grossing movie of all time?
                                    {/* Avatar(2009) $2,787,965,087 
                                    "answer1: Avatar (2009)",
                                    "answer2": "Titanic (1997)",
                                    "answer3": "The Matrix (1999)",
                                    "answer4": "The Avengers 4 (2018 */}
                                </li>
                                <li>
                                    Q2. How old was Mark Hamil when first cast as Luke Skywalker?
                                    {/* 25 Years Old
                                        21
                                        18
                                        31
                                    */}
                                </li>
                                <li>
                                    Q3 What movie holds the record for most F bombs in a movie?
                                    {/* Wolf of Wall Street - 506 time */}
                                </li>
                                <li>
                                    Q4 What actor was paid the most for a role?
                                    {/* $250 million - Keanu Reeves as Neo */}
                                </li>
                                <li>
                                    Q5. What year was the first movie ever made?
                                    {/* The Horse In Motion - (1878) */}
                                </li>
                                <li>
                                    Q6. What movie has been remade the most times?
                                    {/* Romeo & Juliet - 48 times */}
                                </li>
                            </ul>
                            <hr />

                            <h1>Music Questions</h1>
                            <ul>
                                <li>
                                    Q1. What is the best selling album of  all time?
                                    {/* Eagles - Their Greatest Hits 1971 - 1975 // 38 million copies, Michael Jackson's thriller was a close second with 33 million */}
                                </li>
                                <li>
                                    Q2. Top selling artist of all time?
                                    {/* The Beatles 178 million Units */}
                                </li>
                                <li>
                                    Q3. Most played song on youtube?
                                    {/* Despacito - 4 Billion */}
                                </li>
                                <li>
                                    Q4 Who is songwriter with the most number 1 hits?
                                    {/* Paul McCartney - 32 */}
                                </li>
                                <li>
                                    Q5. Who is the Richest Musician in the world?
                                    {/* Andrew Lloyd Webber - 1.28 Billion, he wrote songs for many successful broadway plays */}
                                </li>
                                <li>
                                    Q6. Highest paid rapper of all time?
                                    {/* Jay-Z - $900 million */}
                                </li>
                            </ul>

                            <hr />

                            <h1>Television Questions</h1>
                            <ul>
                                <li>
                                    Q1. What Tv Show has the most awaryarn ds of all time?
                                    {/* ‘Game of Thrones’ — 291 Wins */}
                                </li>
                                <li>
                                    Q2. Who is the Highest paid Tv actor?
                                    {/* Charlie Sheen $2m an episode for 100 episodes on Anger Management */}
                                </li>
                                <li>
                                    Q3. Longest running sitcom on Tv Today
                                    {/* The Simpsons, 30 Seasons , 644 episodes */}
                                </li>
                                <li>
                                    Q4 How many episodes did the TV Show Breaking Bad Have?
                                    {/* 62 episodes */}
                                </li>
                                <li>
                                    Q5. Name of the fictional paper company in the American version of the show The Office?
                                    {/* The Horse In Motion - (1878) */}
                                </li>
                                <li>
                                    Q6. First Reality show on television ?
                                    {/* An American family which aired on PBS in 1973 */}
                                </li>
                            </ul>

                            <hr />

                        </div>
                    </div>
            </div>

        )
    }

}

export default Categories