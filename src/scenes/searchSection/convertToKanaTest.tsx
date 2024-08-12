import { useState } from 'react'

const convertToKanaTest = () => {

    const [currentText, setCurrentText] = useState("");
    const [convertedText, setConvertedText] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.target.value);
    }

    return (
        <section className='flex justify-center w-full border-2 border-black'>
            <div className='flex flex-col justify-center basis-1/2 m-2'>
                <h1 className='flex justify-center text-lg w-full'>This is the input section:</h1>
                <div className='flex justify-center'>
                    <input type="text" placeholder='Input latin characters' className='px-1 border-2 border-black' onChange={(e) => { handleInput(e) }} />
                </div>
            </div>
            <div className='flex flex-col justify-center basis-1/2 m-2'>
                <h1 className='flex justify-center text-lg w-full'>This is the result section:</h1>
                <div className='flex justify-center'>
                    <div className='px-1 border-2 border-black w-60 h-8'>{currentText}</div>
                </div>
            </div>
        </section>
    )
}

export default convertToKanaTest