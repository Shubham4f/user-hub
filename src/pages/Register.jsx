import { useState } from "react";

function Register() {
   // State to manage error, success, and form data
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // Handle input changes in the form
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Send a POST request to create a new user
      const res = await fetch("http://localhost:3000/users", {
        Method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        Body: JSON.stringify({
          ...formData,
          creation_date: new Date().toJSON(),
        }),
      });
      // Check the response status and update state accordingly
      if (res.status === 200) {
        setError(null);
        setSuccess("Acount Created!!!");
        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
      } else {
        setError("An error occurred!!!");
        setSuccess(null);
      }
    } catch (error) {
      setError(error);
      setSuccess(null);
    }
  };

  return (
    <section className="mx-auto w-fit">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center py-10 px-3 sm:px-24 mt-20 w-fit shadow-md bg-white font-poppins text-jacarta text-center dark:bg-sky-900 dark:text-white rounded-lg"
      >
        <h1 className="my-4 font-semibold text-2xl">Create Account</h1>
        {/* Input fields for username, password, email, and phone */}
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleInput}
          className="my-4 p-2 w-64 rounded-md bg-slate-100 outline-jacarta dark:bg-sky-800"
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInput}
          className="my-4 p-2 w-64 rounded-md bg-slate-100 outline-jacarta dark:bg-sky-800"
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInput}
          className="my-4 p-2 w-64 rounded-md bg-slate-100 outline-jacarta dark:bg-sky-800"
          required
        />
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleInput}
          className="my-4 p-2 w-64 rounded-md bg-slate-100 outline-jacarta dark:bg-sky-800"
          required
        />
        {/* Submit button */}
        <button
          type="submit"
          className="px-2 py-3 my-4 rounded transition-transform duration-200 ease-in-out hover:scale-[1.02] bg-jacarta text-white dark:bg-sky-950"
        >
          Register
        </button>
      </form>
      {/* Display success message if registration is successful */}
      {success && (
        <div className="bg-green-200 rounded-lg p-3 text-center mt-5">
          {success}
        </div>
      )}
      {/* Display error message if there's an error */}
      {error && (
        <div className="bg-red-200 rounded-lg p-3 text-center mt-5">
          {error}
        </div>
      )}
    </section>
  );
}

export default Register;
