import React from 'react';

export const FileLoader = ({ setSelectedFile }) => {

    function changeHandler(event) {
        setSelectedFile(event.target.files[0]);
    }

    return (
        <input type="file" name="file" onChange={changeHandler} />
    )
}
