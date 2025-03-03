import headerImg from "../../public/header.webp"
import Button from "../components/shared/Button"

const Home = () => {
  return (
    <div className="flex w-full min-h-screen items-center gap-5">
      <div className="flex flex-col justify-center pl-30">
        <h1 className="text-5xl font-bold">Explore Countries with<span className="text-blue-800">Real-Time Data</span></h1>
        <p className="py-5 text-xl pl-10">Discover details about every country around the world – from capitals to regions!</p>
        <div className="flex gap-5">
          <Button styleLink="btn bg-blue-800 text-white btn-lg" pathLink="/countries" text="Explore Now" />
          <Button styleLink="btn btn-lg border-none text-gray-500" pathLink="/about" text="Learn More" />
        </div>
      </div>
      <div className="w-full">
        <img src={headerImg} alt="Explore Countries" />
      </div>
    </div>
  )
}

export default Home