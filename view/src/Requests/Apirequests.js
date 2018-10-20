import axios from "axios";
export const Newmember = (memberID, history) => {
  axios
    .post(
      "http://localhost:8080/projects/sanctuary/server/public/add",
      memberID
    )
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      console.log(err);
    });
};
