

const ButtonUI = (props:any) => {
  return (
    <button className="flex space-x-2 items-center bg-[#082F5A] shadow-xl text-white py-1 px-3 rounded-lg mt-3 cursor-pointer hover:opacity-70 duration-200 hover:transition-all" {...props}>
        <i className='text-xl'>{props.icon}</i>
        <h1>{props.btnName}</h1>
    </button>
  )
}

export default ButtonUI