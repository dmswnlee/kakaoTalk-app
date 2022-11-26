import React from 'react';

export default function PlusFriends({icon, text}) {
    return (
        <li>
            <a href='#'>
                <i className={icon}></i>{text}
            </a>
        </li>
    );
}

