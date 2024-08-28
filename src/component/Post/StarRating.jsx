import React from 'react';

const StarRating = ({ rating, setRating }) => {
    const [hover, setHover] = React.useState(0);

    return (
        <div>
            {[...Array(5)].map((emoji, index) => {
                index += 1; 
                return (
                    <button type="button" key={index} className={index <= (hover || rating) ? "on" : "off"} onClick={() => setRating(index)} 
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "40px",
                            color: index <= (hover || rating) ? "#FFD700" : "#D3D3D3"
                        }}
                    >
                        <span>
                            {index <= (hover || rating) ? "⭐" : "✩"}
                        </span> 
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
