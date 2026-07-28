import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Feed
        </h1>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4">
                  <p className="text-gray-700 text-lg break-words">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-500">No posts available.</p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg transition"
      >
        post
      </button>
    </div>
  );
};

export default Feed;
