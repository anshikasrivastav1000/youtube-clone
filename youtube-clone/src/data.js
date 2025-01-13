export const API_KEY = 'AIzaSyDhISjY1aQPjibJkp6KUKP_RlrXny0kKWI'

export const value_converter = (value) =>{
    if(value >= 1000000){
        return      Math.floor(value/1000000)+ "M";
    }else if(value >=1000){
        return  Math.floor(value/1000000)+ "K";
    }else{
        return value;
    }
}
export const commentData = [
    { id: 1, userName: "John", likes: 33, dislikes: 2 },
    { id: 2, userName: "Jane", likes: 21, dislikes: 1 },
]