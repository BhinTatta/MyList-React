import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Profile from "./Profile";

function Home({ isAuth }) {
  const [pListLists, setpListList] = useState([]);
  const pListsCollectionRef = collection(db, "pLists");
  const [randstate, setRandstate] = useState(0);

  const deletepList = async (id) => {
    setRandstate(randstate + 1);
    const pListDoc = doc(db, "pLists", id);
    await deleteDoc(pListDoc);
  };

  useEffect(() => {
    const getpLists = async () => {
      const data = await getDocs(pListsCollectionRef);
      console.log(data);
      setpListList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getpLists();
  }, [randstate]); // [deletepList]np

  return (
    <>
      <div className="homePage-About">
        <h1>
          JUST CLICK AND EXPLORE THIS{" "}
          <span style={{ color: "#1db954" }}>AMZING</span> WORLD OF MUSIC!
        </h1>
        <h3>What's stopping you?</h3>
      </div>
      <div className="homePage">
        {pListLists.map((pList) => {
          function SetCSS() {
            const cssType = pList.pListType;
            // const [pListCSS, setpListCSS] = useState("pList");
            // setpListCSS(pListCSS + " " + cssType);
            // console.log(pListCSS);
            return cssType + " " + "pList";
          }

          return (
            <div className={SetCSS()}>
              <div className="creatorName">
                <h2>{pList.author.name}</h2>
              </div>
              <div className="pListHeader">
                <div className="title">
                  <h1>{pList.title}</h1>
                </div>

                <div className="deletepList">
                  {isAuth && pList.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletepList(pList.id);
                      }}
                    >
                      {" "}
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="pListTextContainer pListText">
                {pList.pListText}
              </div>
              <a href={pList.pListLink} target="_blank">
                <div className="pListTextContainer pListLink">Listen Now</div>
              </a>
              <h3>@{pList.author.name}</h3>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
