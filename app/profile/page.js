"use client";
import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    // Fetch post from the server or API
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };
    if (session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to My Profile."
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
