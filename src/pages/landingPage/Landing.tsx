import { useState } from "react";
import NavBar from "../../component/NavBar"
import { IoCloudUploadOutline } from "react-icons/io5";
import useNotification from "antd/es/notification/useNotification";
import { useNavigate } from "react-router";


const Landing = () => {
  const [fileUpload, setFileUpload] = useState<File | null>(null)

  const [message, contextHolder] = useNotification()
  const navigate = useNavigate()

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0]
    console.log(selectedFile)
    if (!selectedFile) return;

    // Allow pdf
    if (selectedFile.type !== "application/pdf") {
      message.error({
        message: "File type must be PDF type!"
      })
      return;
    }

    // Max size = 100mb
    if (selectedFile.size > 100 * 1024 * 1024) {
      message.error({
        message: "File must be less than 100mb!"
      })
    }

    // everything is alright. type shii
    setFileUpload(selectedFile)


  }

  const handleFileUpload = async () => {
    if (!fileUpload) {
      message.error({
        message: "Please select one file!"
      })
      return;
    };

    const formData = new FormData();
    formData.append("pdf", fileUpload)

    try {
      // const res = await fetch("http://localhost:5000/upload", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!res.ok) {
      //   message.error({
      //     message: "Something went wrong, Please try again."
      //   })
      // }

      message.success({
        message: "File Uploaded successfully"
      })

      setTimeout(() => {
        navigate(`uploaded/${fileUpload.name}`)
      }, 1000);
    } catch (err) {
      console.error(err);
      message.error({
        message: "Error Uploading file, Please try again."
      })
    }

  }

  return (
    <main>
      {contextHolder}
      <NavBar bgColor="white" textColor="black"/>
      <section className="heroBg w-full min-h-[80vh] flex flex-col items-center">
        <div className=" mt-8">
          <h1 className="text-3xl text-center text-white font-semibold">Because you've got better things to do than read 200 pages.</h1>
          <p className="text-center mt-4 text-2xl text-gray-400">We got you!</p>
        </div>
        <div>
          <span className="mt-16 bg-white flex flex-col items-center py-10 px-4 rounded-xl">
            <div className="flex items-center justify-center mx-auto">
              👉<input type="file" accept="application/pdf" className="cursor-pointer underline text-purple-800 font-semibold" onChange={handleFileChange} />
            </div>
            <aside className="flex items-center space-x-2 bg-[#082F5A] shadow-xl text-white py-1 px-3 rounded-lg mt-6 cursor-pointer hover:opacity-70 duration-200 hover:transition-all">
              <IoCloudUploadOutline />
              <button onClick={handleFileUpload} className="cursor-pointer">Upload PDF</button>
            </aside>
          </span>

        </div>
        <div>
          <h1 className="mt-18 text-2xl text-white font-semibold">Your smarter way to study starts here...</h1>
        </div>
      </section>
    </main>
  )
}

export default Landing