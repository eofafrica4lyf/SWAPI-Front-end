import axios from 'axios';

// const url = 'api/posts/';

class DataService {
	//Get All Characters
	static getPosts(url) {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(data);
			} catch (err) {
				reject(err);
			}
		});
	}
}

export default DataService;
