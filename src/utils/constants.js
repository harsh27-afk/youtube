const API_key = import.meta.env.VITE_API_KEY;

const SEARCH_KEY=import.meta.env.VITE_SEARCH_KEY;

export const YT_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+API_key;

export const YT_SEARCH_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=`+SEARCH_KEY+`&q=`;

