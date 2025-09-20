import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { IoSend } from "react-icons/io5";
import useNotification from 'antd/es/notification/useNotification';
import type { ReactFormState } from 'react-dom/client';


type MessageInitialState = {
    sender: string;
    text: string;
}

const AiChat = () => {
    const param = useParams()
    const [message, contextHolder] = useNotification()
    const [input, setInput] = useState<string>("")
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const [userMessage, setUserMessage] = useState<MessageInitialState[]>([{
        sender: "ai",
        text: "Hello, How can i help you today...."
    },])

    useEffect(()=>{
       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [userMessage])

    const handleSendMessage = () => {
        if (input.trim() === '') {
            message.error({
                message: "Please enter a message!"
            })
            return
        }
        setInput("")
        setUserMessage([...userMessage, {
            sender: "user", text: input
        }])


        setTimeout(() => {
            setUserMessage((prev) => [
                ...prev,
                { sender: "ai", text: "This is a dummy response from AI" },
            ]);
        }, 1000);
    }


    return (
        <main className='min-h-[100vh] bg-[#E7E7E7]'>
            {contextHolder}
            <nav className="min-h-18 w-full px-16 py-5 gap-4 bg-[#03305D]">
                <h1 className="text-4xl leading-none text-white text-center mx-auto">
                    {param.filename}
                </h1>
                <p className='text-center mt-4 text-xl text-gray-300'>Ask anything, get answers with citation</p>
            </nav>

            {/* Message section */}
            <section className='mt-12 h-[50vh] overflow-y-auto px-24 '>
                {userMessage.map((msg, index) => (
                    <div
                        key={index}
                        className={`max-w-[40%] px-4 py-4 mb-8 rounded-2xl ${msg.sender === "user"
                            ? "bg-[#1D2679] text-white self-end ml-auto"
                            : "bg-[#7680DC] text-gray-900 self-start mr-auto"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
                 <div ref={messagesEndRef} />
            </section>

            {/* Input Area */}
            <section className='mt-6 mx-auto flex items-center w-[50%] bg-white rounded-xl px-4'>
                <input type='text' placeholder={`Ask Danny anything about ${param.filename}`} className='w-full px-4 py-8 outline-none' onChange={(e) => setInput(e.target.value)} value={input}/>
                <span onClick={handleSendMessage}>
                    <IoSend className='text-xl cursor-pointer' />
                </span>
            </section>
        </main>
    )
}

export default AiChat