import { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase.js";

import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dbInstance = collection(db, "posts");
    const q = query(dbInstance, orderBy("timestamp", "desc"));

    const getDocument = async () => {
      const datas = await getDocs(q);
      setPosts(
        datas.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
      console.log(posts[0]);
    };
    getDocument();
  }, [input]);

  const sendPost = async (e) => {
    e.preventDefault();

    const data = {
      name: "Ojash Gurung",
      description: "This is test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    };
    try {
      await addDoc(collection(db, "posts"), data);
      console.log("Data Sent");
    } catch (error) {
      console.log(error);
    }

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, name, description, message, photoUrl }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
