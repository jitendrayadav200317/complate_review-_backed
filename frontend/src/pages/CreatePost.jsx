import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post("http://localhost:1000/create", formData);
      console.log(res.data.message);
      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Create Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="w-full text-sm border border-gray-300 rounded-lg p-2 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer cursor-pointer"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Caption
            </label>
            <input
              type="text"
              name="caption"
              placeholder="Write a caption..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Create Post
          </button>
          <button
            type="button"
            onClick={() => navigate("/feed")}
            className="w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg transition"
          >
            feed
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
