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