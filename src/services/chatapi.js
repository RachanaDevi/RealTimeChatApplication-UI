import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8081/",
});

const chatAPI = {
  getMessages: (groupId) => {
    console.log("Calling get messages from API");
    return api.get(`messages/${groupId}`);
  },

  sendMessage: (username, text) => {
    let message = {
      sender: username,
      content: text,
    };
    return api.post(`send`, message);
  },
};

export default chatAPI;
