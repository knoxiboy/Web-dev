import Reactl, { useState, useEffect, use } from 'react';

const Navbar = ({color}) => {
    useEffect(() => {
        console.log("Color has been updated to " + color);
    }, [color]); // This effect runs whenever 'color' changes

    return (
        <div>
            I am a Navbar component with color: {color}
        </div>
    );
}

export default Navbar;