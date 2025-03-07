import About from "../About";
import Experience from "../experience";
const RightSections = () => {
    return (
    <div className="grid gap-40 px-5">
        <About />
        <Experience />
        <div className='text-left mb-96'>Projects</div>
    </div>
    )
}

export default RightSections;