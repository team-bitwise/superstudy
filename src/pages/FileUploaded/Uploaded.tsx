import React from 'react'
import { Link, useParams } from 'react-router'
import NavBar from '../../component/NavBar'
import ButtonUI from '../../component/ButtonUI'
import { PiCards } from "react-icons/pi";
import { CiSquareCheck } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineQuiz } from "react-icons/md";


const Uploaded = () => {
    const param = useParams()
    return (
        <main>
            <NavBar />

            <section className="uploadedHeroBg w-full min-h-[80vh] flex flex-col items-center">
                <div>
                    <span className="mt-16 bg-white flex flex-col py-10 px-4 min-w-72 rounded-xl">
                        <h1 className='text-2xl '>{param.filename && (param.filename?.slice(0,1).toUpperCase() + param.filename?.slice(1,))}</h1>
                        <div className='mt-6'>
                            <Link to={`/flashcard/${param.filename}`}>
                                <ButtonUI icon={<PiCards />} btnName="Generate FlashCards" />
                            </Link>
                            <Link to={`/summary/${param.filename}`}>
                                <ButtonUI icon={<CiSquareCheck />} btnName="Generate Generate Summary" />
                            </Link>
                            <Link to={`/chat-with-danny/${param.filename}`}>
                                <ButtonUI icon={<IoChatboxEllipsesOutline />} btnName="Chat with your note" />
                            </Link>
                            <Link to={`/quizmode/${param.filename}`}>
                                <ButtonUI icon={<MdOutlineQuiz />} btnName="Quiz Mode" />
                            </Link>
                        </div>
                    </span>
                </div>
                <div>
                    <h1 className="mt-18 text-2xl text-white font-semibold">Your smarter way to study starts here...</h1>
                </div>

            </section>
        </main>
    )
}

export default Uploaded