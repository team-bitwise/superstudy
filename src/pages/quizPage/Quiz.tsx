
import { useParams } from 'react-router'

const Quiz = () => {
    const param = useParams()
    return (
        <main>
            <nav className="min-h-18 w-full px-16 py-3 gap-4 bg-[#03305D]">
                <h1 className="text-4xl leading-none text-white text-center mx-auto">
                    Quiz Mode
                </h1>
                <p className='text-center mt-2 text-xl text-gray-300'>AI-generated Quiz from '{param.filename}'</p>
            </nav>
        </main>
    )
}

export default Quiz