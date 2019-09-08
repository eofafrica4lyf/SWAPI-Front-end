import axios from 'axios';

// const url = 'api/posts/';

class DataService {
	//Get All Characters
	static getPosts(url) {
		return new Promise(async (resolve, reject) => {
			try {
        url = "https://swapi.co"+ url;
        console.log(url);
        const res = await axios.get(url);
        console.log(res,url);
				const data = res.data;
				resolve(data);
			} catch (err) {
				reject(err);
			}
		});
	}
}

export default DataService;
