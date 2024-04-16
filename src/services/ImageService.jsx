import axios from 'axios'
class ImageService {

    helloMessage() {
        return axios.get("http://127.0.0.1:5000/hello");
    }

    sendImages(files) {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append(`file`, file, file.path);
        });
        return axios.post(
            'http://127.0.0.1:5000/image/send',
            formData)
    }
}

export default new ImageService();