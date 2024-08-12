import { useState } from 'react'

const convertToKanaTest = () => {

    const [currentText, setCurrentText] = useState("");
    const [convertedText, setConvertedText] = useState("");

    const parseIntoKana = (romaji: string): string => {

        if (romaji === '') {
            return '';
        } else {
            let characterArray = romaji.split('')
            let parsedString = ''
            let index = 0;
            for (let i = 0; i < characterArray.length; i++) {

                if (characterArray[i] in letterToKana) {
                    parsedString = parsedString + letterToKana[characterArray[i]];
                }
            }
            return parsedString
        }

    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentText(e.target.value);
        setConvertedText(parseIntoKana(e.target.value));
    }

    const letterToKana = {
        'a': 'あ',
        'i': 'い',
        'u': 'う',
        'e': 'え',
        'o': 'お',
        'ka': 'か',
        'ki': 'き',
        'ku': 'く',
        'ke': 'け',
        'ko': 'こ',
        'sa': '',
        'shi': '',
        'su': '',
        'se': '',
        'so': '',
        'ta': '',
        'chi': '',
        'tsu': '',
        'te': '',
        'to': '',
        'na': '',
        'ni': '',
        'nu': '',
        'ne': '',
        'no': '',
        'ha': '',
        'hi': '',
        'fu': '',
        'he': '',
        'ho': '',
        'ma': '',
        'mi': '',
        'mu': '',
        'me': '',
        'mo': '',
        'ya': '',
        'yu': '',
        'yo': '',
        'ra': '',
        'ri': '',
        'ru': '',
        're': '',
        'ro': '',
        'wa': '',
        'wo': '',
        'kya': '',
        'kyu': '',
        'kyo': '',
        'sha': '',
        'shu': '',
        'sho': '',
        'cha': '',
        'chu': '',
        'cho': '',
        'nya': '',
        'nyu': '',
        'nyo': '',
        'hya': '',
        'hyu': '',
        'hyo': '',
        'mya': '',
        'myu': '',
        'myo': '',
        'rya': '',
        'ryu': '',
        'ryo': '',
        'ga': '',
        'gi': '',
        'gu': '',
        'ge': '',
        'go': '',
        'za': '',
        'ji': '',
        'zu': '',
        'ze': '',
        'zo': '',
        'da': '',
        'dji': '',
        'dzu': '',
        'de': '',
        'do': '',
        'ba': '',
        'bi': '',
        'bu': '',
        'be': '',
        'bo': '',
        'pa': '',
        'pi': '',
        'pu': '',
        'pe': '',
        'po': '',
        'n': '',
        'gya': '',
        'gyu': '',
        'gyo': '',
        'ja': '',
        'ju': '',
        'jo': '',
        'dja': '',
        'dju': '',
        'djo': '',
        'bya': '',
        'byu': '',
        'byo': '',
        'pya': '',
        'pyu': '',
        'pyo': '',

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
                    <div className='px-1 border-2 border-black w-60 h-8'>{convertedText}</div>
                </div>
            </div>
        </section>
    )
}

export default convertToKanaTest