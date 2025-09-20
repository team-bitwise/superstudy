import type { ReactElement } from "react";
import Landing from "../pages/landingPage/Landing";
import WrongPathPage from "../pages/ErrorBoundary/WrongPathPage";
import Uploaded from "../pages/FileUploaded/Uploaded";
import SummaryPdf from "../pages/summaryPage/SummaryPdf";
import Flashcards from "../pages/FlashCards/Flashcards";
import AiChat from "../pages/ChatWithDanny/AiChat";
import Quiz from "../pages/quizPage/Quiz";


type Routes = {
    id:number;
    path:string;
    element:ReactElement;
}


export const routes:Routes[] = [
    {
        id:1,
        path: '/',
        element: <Landing/>
    },
    {
        id:2,
        path: '/uploaded/:filename',
        element: <Uploaded/>
    },
    {
        id:3,
        path: '/summary/:filename',
        element: <SummaryPdf/>
    },
    {
        id:4,
        path: '/flashcard/:filename',
        element: <Flashcards/>
    },
    {
        id:4,
        path: '/chat-with-danny/:filename',
        element: <AiChat/>
    },
    {
        id:4,
        path: '/quizmode/:filename',
        element: <Quiz/>
    },
    {
        id:5,
        path: '*',
        element: <WrongPathPage/>
    },
]