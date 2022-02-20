import React, { useState } from 'react';
import Fb from './Fb';

const Facebook = () => {
    const [fbpost, setFacebook] = useState(
        [
            {
                id: 1,
                username: "ABC IAK",
                fbid: "abc@fb.com",
                post: "Today is Thursday.Thursday was the Fish Day",
                likes: 0
            }, {
                id: 2,
                username: "DEF ODX",
                fbid: "def@fb.com",
                post: "Thursday is the day of the week between Wednesday and Friday. ",
                likes: 0
            },
            {
                id: 3,
                username: "GHI WJU",
                fbid: "ghi@fb.com",
                post: " In countries which adopt the Sunday-first convention, it is the fifth day of the week.",
                likes: 0
            },
            {
                id: 4,
                username: "JKL FUL ",
                fbid: "jkl@fb.com",
                post: "According to the ISO 8601 international standard, it is the fourth day of the week.",
                likes: 0
            },
            {
                id: 5,
                username: "MNO CPN ",
                fbid: "mno@fb.com",
                post: "Thursday is aligned by the planet Jupiter.",
                likes: 0
            }

        ]
    );
    /*Like handle fx */
    const handleLike = (id) => {
        const latestState = [...fbpost];
        const index = fbpost.findIndex(el => el.id === id);
        latestState[index].likes += 1;
        setFacebook(latestState);
    }
    /*Dislike handle fx */
    const handleDislike = (id) => {
        const latestState = [...fbpost];
        const index = fbpost.findIndex(el => el.id === id);
        if (latestState[index].likes > 0) {
            latestState[index].likes -= 1;
        }

        setFacebook(latestState);
    }

    const renderFacebook = () => {
        return fbpost.map(item => {
            return <Fb fb={item} handleLike={handleLike} handleDislike={handleDislike} />
        })
    }
    return (
        <>
            {renderFacebook()}
        </>
    )
}


export default Facebook