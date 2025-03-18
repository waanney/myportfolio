import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="bg-stone-300 dark:bg-neutral-800 ">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <div className="mt-4">
          <Link to="/portfolio" className="px-4 py-2 bg-blue-500 text-white rounded-md">Go to Portfolio</Link>
          <Link to="/web3d" className="px-4 py-2 bg-blue-500 text-white rounded-md">Go to Portfolio 3D</Link>
        </div>
      </div>
    </div>
  );

}
