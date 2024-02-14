import React from "react";

const FavoriteButton = ({city, country}) => {
    const handleFavorite = async () => {
        const apiUrl = "http://localhost:3001/favourites";
        try{
            await fetch(apiUrl, {
                method:"POST",  
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({city,country})  
            }); 
            
            alert("City added to favorites");
        } catch (err) {
            console.log(err);
        };
        
    };
    return <button onClick={handleFavorite} className="btn btn-primary">Favorite Cities</button> 
};

export default FavoriteButton;