import Content from "./Content"
import Navbar from "./Navbar"
import Speaker from "./Speaker"
import Usecases from "./Usecases"
import Video from "./youtube/Video"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Speaker />
            <Video />
            <Content />
            <Usecases />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default App
