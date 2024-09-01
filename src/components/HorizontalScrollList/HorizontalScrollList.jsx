import React from 'react';
import './HorizontalScrollList.css';
import PublicationItem from '../PublicationItem/PublicationItem';

const HorizontalScrollList = ({ title, items }) => {
    return (
        <div className="horizontal-scroll-list">
            <h2>{title}</h2>
            <div className="scroll-container">
                {items.map((item, index) => (
                    <PublicationItem key={index} publication={item} />
                ))}
            </div>
        </div>
    );
};

export default HorizontalScrollList;
