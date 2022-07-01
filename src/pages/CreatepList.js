import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function CreatepList({ isAuth }) {
  const [title, setTitle] = useState("");
  const [pListText, setpListText] = useState("");
  const [pListLink, setpListLink] = useState("");
  const [pListType, setpListType] = useState("");

  const pListsCollectionRef = collection(db, "pLists");
  let navigate = useNavigate();

  const createpList = async () => {
    await addDoc(pListsCollectionRef, {
      title,
      pListText,
      pListLink,
      pListType,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="createpListPage">
        <div className="cpContainer">
          <h1>Create PlayList</h1>
          <div className="inputGp">
            <label> Name</label>
            <input
              placeholder="Name..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Description</label>
            <textarea
              placeholder="About..."
              onChange={(event) => {
                setpListText(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> PlayList Link :</label>
            <input
              placeholder="Link..."
              onChange={(event) => {
                setpListLink(event.target.value);
              }}
            />
          </div>
          <div className="inputRadio">
            <input
              type="radio"
              value="pListYT"
              onChange={(event) => {
                if (pListType === "") {
                  setpListType(event.target.value);
                }
              }}
            />
            YouTube {"   "}
            <input
              type="radio"
              value="pListSP"
              onChange={(event) => {
                if (pListType === "") {
                  setpListType(event.target.value);
                }
              }}
            />
            Spotify {"      "}
          </div>
          <button onClick={createpList}> Submit pList</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatepList;
