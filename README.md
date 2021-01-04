NBA Fantasy Basketball Calculator

I made this web application because I was starting an NBA fantasy league, and although Yahoo sports did provide player statistics and custom fantasy points, it only showed
data for 2019-2020 season and project stats. My strategy in fantasy is to choose players that consistently put up good stats and also play lots of games, so the per game stats that Yahoo sports shows was not good enough information, I needed to see a player's history in previous seasons and also see their total fantasy points for the season, not just per game. 

Therefore I made this web application using React, Node, Express, and MySQL.

Because this is the frontend, I will document the web application's functionality.

Much of the components I used React Bootstrap, including the navbar and buttons.

For the textfield, I used material-ui React library, this textfield form was perfect for my web application because I needed a textfield that excluded string and only allowed float input values.

This web application uses MuiDataTables as the data table, I found this React library by google searching and found that this table format was the best. It was easy to input the season data, it has sorting functionality for each column, search engine, and can filter rows based on player information. The download and print functionality is also a plus. 

I really enjoyed making this simple React web application and found it really useful when drafting my fantasy team. I will defintely come back to this application and add more functionality, particularly a ML stat projector for upcoming seasons.


                              _______
 ____________________        /       \
|____________________|      |         |
 \/\/\/\/\/\/\/\/\/\/        >     >  |
  \/\/\/\/\/\/\/\/\/        <         |
   \/\/\/\/\/\/\/\/          _\      |
    \/\/\/\/\/\/\/          <_/__    |
     |/\/\/\/\/\|             ___=   |___
     |\/\/\/\/\/|          _=| | |   | | |=_
     |/\/\/\/\/\|         /  |  |     |  |   =
                         |   |   \___/    |    |
                         |   |            |    |
                         |    |            |   |
                         |    |            |   |
                         |     |           |   |
                          |    |          |   |
                          |     |        |   |
                            |   |______ |   |
                             ||  |_____|   |
                            |   | |/ \|  |\_
                            |  | __/  \_  \  \_
                           |  | /        \  |   \_
                          |   | \         | |     \_
                         |     \_|       |_/        \_
                        |         \_____/  \_         |
                        |         |           \______/\_
                         \_______/                \_    \_
                        |     |                      \_    \_
                       |     |                          \    \
                       |    |                             \    \
                       |   |                                 \   \
                        |  |                                    \  \
                       |   |                                      \/ ==
                       |   |                                       |    \
                        |   |                                       \     =
                         |  |                                        |____/
                          |_|
                         /   \
                         |    |
                        /    |
                       |    |
                        \__/
