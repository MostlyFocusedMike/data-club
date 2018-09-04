import CONSTANTS from './constants'

const topics = [
    {
        id: 1,
        meeting_id: 1,
        display_name: 'Introduction to R: The Basics',
        source: CONSTANTS.DATA_CAMP,
        link: 'https://campus.datacamp.com/courses/free-introduction-to-r/chapter-1-intro-to-basics-1?ex=1',
        description: 'An intro to the foundations of the R language',
        duration: 60,
        type: CONSTANTS.INTERACTIVE,
    },
    {
        id: 2,
        meeting_id: 1,
        display_name: 'Vectors',
        source: CONSTANTS.DATA_CAMP,
        link: 'https://campus.datacamp.com/courses/free-introduction-to-r/chapter-2-vectors-2?ex=1',
        description: 'Learn how to use Vectors to quickly manipulate data',
        duration: 60,
        type: CONSTANTS.INTERACTIVE,
    },
    {
        id: 3,
        meeting_id: 1,
        display_name: 'What Is Statistics?',
        source: CONSTANTS.CC_STATISTICS,
        link: 'https://www.youtube.com/watch?v=sxQaBpKfDRk&list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr&index=2',
        description: 'Intro to the Crash Course Statistics channel',
        duration: 13,
        type: CONSTANTS.VIDEO,
    },
    {
        id: 4,
        meeting_id: 1,
        display_name: 'Mathematical Thinking',
        source: CONSTANTS.CC_STATISTICS,
        link: 'https://www.youtube.com/watch?v=tN9Xl1AcSv8&list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr&index=3',
        description: 'How to think about statistics using math',
        duration: 11,
        type: CONSTANTS.VIDEO,
    },
    {
        id: 5,
        meeting_id: 2,
        display_name: 'Matrices',
        source: CONSTANTS.DATA_CAMP,
        link: 'https://campus.datacamp.com/courses/free-introduction-to-r/chapter-3-matrices-3?ex=1',
        description: 'Understand how to manipulate matrices with R',
        duration: 60,
        type: CONSTANTS.INTERACTIVE,
    },
    {
        id: 6,
        meeting_id: 2,
        display_name: 'Factors',
        source: CONSTANTS.DATA_CAMP,
        link: 'https://campus.datacamp.com/courses/free-introduction-to-r/chapter-4-factors-4?ex=1',
        description: 'In R, categorical data is stored in factors, here\'s how they work',
        duration: 60,
        type: CONSTANTS.INTERACTIVE,
    },
    {
        id: 7,
        meeting_id: 2,
        display_name: 'Measures of Central Tendency',
        source: CONSTANTS.CC_STATISTICS,
        link: 'https://www.youtube.com/watch?v=kn83BA7cRNM&list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr&index=4',
        description: 'What the mean, the median, and mode actually mean',
        duration: 12,
        type: CONSTANTS.VIDEO,
    },
    {
        id: 8,
        meeting_id: 2,
        display_name: 'Measures of Spread',
        source: CONSTANTS.CC_STATISTICS,
        link: 'https://www.youtube.com/watch?v=R4yfNi_8Kqw&index=5&list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr',
        description: 'learn to spot how well medians and means represent the data',
        duration: 12,
        type: CONSTANTS.VIDEO,
    },
]

export default topics;

// {
//     id: 1,
//     meeting_id: 1,
//     display_name: '',
//     site: '',
//     link: '',
//     duration: '',
//     description: '',
//     type: '',
// },