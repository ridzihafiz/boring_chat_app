import React, { useContext, useEffect } from "react";
import { AvatarContext } from "../context/AvatarContextProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { avatar, setAvatar } = useContext(AvatarContext);
  const navigate = useNavigate();

  // component lifecycle
  useEffect(() => {
    let user = localStorage.getItem("boring_chat_user");
    if (user) {
      return navigate("/chat");
    }
  }, []);

  // change avatar based on date
  const handleAvatar = () => {
    setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
  };

  // handle form
  const handleLogin = (e) => {
    e.preventDefault();

    let username = e.target.username.value;

    localStorage.setItem(
      "boring_chat_user",
      JSON.stringify({
        id: Date.now(),
        username: username,
        avatar: avatar,
      })
    );

    e.target.username.value = "";

    window.location.href = "/chat";
  };

  return (
    <main className=" w-screen h-screen p-8 bg-gradient-to-t from-green-700 to-green-500 flex flex-col ">
      <form
        className=" w-full flex flex-col bg-white shadow-lg rounded-lg p-6 z-[100] gap-4 "
        onSubmit={handleLogin}
        autoComplete="off"
      >
        <div className=" relative w-28 mx-auto ">
          <img
            src={avatar}
            alt="avatar"
            className=" w-28 h-28 flex flex-col mx-auto "
          />
          <button
            className=" w-8 h-8 bg-blue-600 text-white rounded-full absolute -right-4 top-16 "
            type="button"
            onClick={handleAvatar}
          >
            ?
          </button>
        </div>

        <div className=" flex flex-col gap-2 ">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            className=" w-full h-12 px-3 border-[1px] border-gray-400 rounded-lg "
          />
        </div>

        <button
          className=" w-full h-12 bg-black text-white rounded-lg "
          type="submit"
        >
          Login
        </button>
      </form>

      <img
        src="https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=500"
        alt=""
        className=" w-screen h-screen object-cover absolute opacity-25 top-0 left-0 "
      />
    </main>
  );
}
