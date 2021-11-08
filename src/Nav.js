import React from 'react';


export default function Nav({location, setLocation}){


    const handleLocation = (event) => {
      setLocation(event.target.value);
    };
  
    const submitValue = (event) => {
      event.preventDefault();
      console.log(location);
      setLocation("");
    };

    return (
        <div className="nav">
        <form onSubmit={submitValue}>
          <label htmlFor="location">
            Location :
            <input
              className="text"
              type="text"
              name="location"
              placeholder="Enter your Location"
              onChange={handleLocation}
              value={location}
            />
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
}