const API_key = import.meta.env.VITE_API_KEY;

export const YT_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+API_key;


