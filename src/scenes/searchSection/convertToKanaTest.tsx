import { useState } from 'react'
import convertToKana from '@/utils/convertToKana';

const convertToKanaTest = () => {

    const [convertedHiraganaText, setConvertedHiraganaText] = useState("");
    const [convertedKatakanaText, setConvertedKatakanaText] = useState("");


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        let conversions = convertToKana(e.target.value);
        setConvertedHiraganaText(conversions.hiragana);
        setConvertedKatakanaText(conversions.katakana);
    }


    return (
        <section className='flex justify-center w-full'>
            <div className='flex flex-col justify-center basis-1/3 m-2'>
                <h1 className='flex justify-center text-lg w-full text-white'>This is the input section:</h1>
                <div className='flex justify-center'>
                    <input type="text" placeholder='Input latin characters' className='px-1 border-2 border-black' onChange={(e) => { handleInput(e) }} />
                </div>
            </div>
            <div className='flex flex-col justify-center basis-1/3 m-2'>
                <h1 className='flex justify-center text-lg w-full text-white'>Hiragana result section:</h1>
                <div className='flex justify-center'>
                    <div className='px-1 border-2 border-black bg-white w-60 h-8'>{convertedHiraganaText}</div>
                </div>
            </div>
            <div className='flex flex-col justify-center basis-1/3 m-2'>
                <h1 className='flex justify-center text-lg w-full text-white'>Katakana result section:</h1>
                <div className='flex justify-center'>
                    <div className='px-1 border-2 border-black bg-white w-60 h-8'>{convertedKatakanaText}</div>
                </div>
            </div>
        </section>
    )
}

export default convertToKanaTest