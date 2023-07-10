import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navuser from "./NavUser";
import axios from "axios";

function UserList() {
  let navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  let [myJson, setMyJson] = useState([]);
  useEffect(() => {
    getAllUserAction();
  }, []);

  const getAllUserAction = async () => {
    let url = `http://localhost:9595/all-customer`;
     try {
       const response = await axios.get(url);
       console.log(response.data);
       setMyJson(response.data);
     } catch (error) {
       console.error("Error retrieving user list:", error);
     }
  };

  const deleteUserAction = async (item) => {
    // backend call delete this user.
    let url = `http://localhost:9595/delete-customer-email?email=${item.email}`;

    try {
      let res = await axios.get(url);
      console.log(res.data);
      setMyJson(res.data);

      alert("success");

      // refresh the page on success
      getAllUserAction();
    } catch (err) {
      alert(err.message);
    }
  };

  const editUserAction = (item) => {
    navigate("/registration");
  };

  return (
    <>
      <Navuser />
      <br />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-11">
          <h3>User List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="#">Sr No.</th>
                <th scope="col">customerId</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myJson.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{ item.customerId}</td>
                  <td className="text-capitalize">{item.name}</td>
                  <td>*******</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td className="fs-5">
                    <input
                      type="button"
                      value="&#x270E;"
                      onClick={() => editUserAction(item)}
                    />{" "}
                    /
                    <input
                      type="button"
                      value="&#128686;"
                      // onClick={deleteUserAction}
                      onClick={() => deleteUserAction(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserList;
