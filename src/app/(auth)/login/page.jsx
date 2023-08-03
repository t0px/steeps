const LoginPage = () => {
  return (
    <form className="w-full flex items-center gap-4 flex-col">
      <div className="flex flex-col gap-2">
        <label className="text-sm">Email</label>
        <input
          type="text"
          placeholder="Email"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 border rounded-lg"
        />
      </div>
      <input
        type="submit"
        value="Login"
        className="py-2 px-4 border cursor-pointer bg-blue-600 text-white rounded-lg"
      />
      <span className="hidden text-green-500 text-red-500 text-purple-500 text-yellow-500"></span>
    </form>
  );
}
 
export default LoginPage;