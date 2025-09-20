import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
import ButtonUI from "../../component/ButtonUI";
import { MdSlideshow } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 👈 add this

const dummyQA = [
  {
    id: 1,
    question: "How has Artificial Intelligence changed the technological world?",
    answer: "Artificial Intelligence has fundamentally changed the technological world, reshaping industries from finance to healthcare. Its ability to process massive amounts of data and generate insights in seconds makes it one of the most revolutionary forces of our time.",
  },
  {
    id: 2,
    question: "What is Machine Learning and how does it work?",
    answer: "Machine learning is a branch of AI that enables systems to improve automatically with experience. By analyzing patterns in data, it allows applications to make predictions, optimize processes, and adapt to new scenarios without being explicitly programmed.",
  },
  {
    id: 3,
    question: "What is Natural Language Processing (NLP) used for?",
    answer: "Natural Language Processing (NLP) allows computers to understand, interpret, and generate human language. From chatbots and translation tools to sentiment analysis, NLP bridges the gap between human communication and machine intelligence.",
  },
  {
    id: 4,
    question: "What is Computer Vision and where is it applied?",
    answer: "Computer vision is a field of AI that enables machines to interpret and understand visual information from the world. It powers technologies like facial recognition, autonomous vehicles, and medical imaging, making complex image analysis faster and more accurate.",
  },
  {
    id: 5,
    question: "How is AI transforming healthcare?",
    answer: "AI in healthcare has opened doors to early diagnosis, personalized treatments, and drug discovery. By analyzing patient histories and medical images, AI-driven tools assist doctors in providing faster, more accurate, and life-saving healthcare solutions.",
  },
];

const Flashcards = () => {
  const [toggleAnswer, setToggleAnswer] = useState<boolean>(false);

  const handleToggleAnswer = () => {
    setToggleAnswer((prev) => !prev);
  };

  return (
    <main>
      <nav className="max-h-20 w-full px-16 py-5 flex items-center gap-4 bg-[#03305D]">
        <h1 className="text-4xl leading-none text-white text-center mx-auto">
          FlashCards
        </h1>
      </nav>

      <section className="flex items-center justify-center mx-auto mt-24 max-w-[60%]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          onSlideChange={()=>setToggleAnswer(false)}
        >
          {dummyQA.map((eachQ) => (
            <SwiperSlide key={eachQ.id} >
              <div className={`my-auto py-12 ${toggleAnswer ? "bg-white text-black" : "bg-[#1D2679] text-white"} shadow-lg border rounded-xl border-gray-500 min-h-[20vh] text-center`}>
                
                {/* AnimatePresence + motion */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={toggleAnswer ? "answer" : "question"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl text-center max-w-[80%] mx-auto"
                  >
                    {toggleAnswer ? eachQ.answer : eachQ.question}
                  </motion.p>
                </AnimatePresence>

                <span
                  className="mx-auto flex items-center justify-center mt-8"
                  onClick={handleToggleAnswer}
                >
                  <ButtonUI
                    btnName={`Reveal ${toggleAnswer ? "Question" : "Answer"}`}
                    icon={<MdSlideshow />}
                  />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Flashcards;
