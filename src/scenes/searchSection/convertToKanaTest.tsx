import e from 'express';
import { useState } from 'react'

const convertToKanaTest = () => {

    const [currentText, setCurrentText] = useState("");
    const [convertedText, setConvertedText] = useState("");

    const parseIntoKana = (romaji: string): string => {

        let characterArray = romaji.split('')
        let parsedString = ''
        let letterCache = '';
        let left = 0;

        for (let i = 0; i < characterArray.length; i++) {

            let currentChunkToEval = letterCache + characterArray[i];

            if ((i > 0) && (currentChunkToEval in letterToKana)) {

                parsedString = parsedString.slice(0, left) + letterToKana[currentChunkToEval];
                letterCache = '';
                currentChunkToEval = ''
                left = left + 1;

            } else if (characterArray[i] in letterToKana) {

                parsedString = parsedString + letterToKana[characterArray[i]];
                letterCache = '';
                left = left + 1;
            } else {

                letterCache = letterCache + characterArray[i];
                console.log('letterCache is currently: ', letterCache)
                parsedString = parsedString + letterCache

            }
        }
        return parsedString

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
        'sa': 'さ',
        'shi': 'し',
        'su': 'す',
        'se': 'せ',
        'so': 'そ',
        'ta': 'た',
        'chi': 'ち',
        'tsu': 'つ',
        'te': 'て',
        'to': 'と',
        'na': 'な',
        'ni': 'に',
        'nu': 'ぬ',
        'ne': 'ね',
        'no': 'の',
        'ha': 'は',
        'hi': 'ひ',
        'fu': 'ふ',
        'he': 'へ',
        'ho': 'ほ',
        'ma': 'ま',
        'mi': 'み',
        'mu': 'む',
        'me': 'め',
        'mo': 'も',
        'ya': 'や',
        'yu': 'ゆ',
        'yo': 'よ',
        'ra': 'ら',
        'ri': 'り',
        'ru': 'る',
        're': 'れ',
        'ro': 'ろ',
        'wa': 'わ',
        'wo': 'を',
        'kya': 'きゃ',
        'kyu': 'きゅ',
        'kyo': 'きょ',
        'sha': 'しょ',
        'shu': 'しゅ',
        'sho': 'しょ',
        'cha': 'ちゃ',
        'chu': 'ちゅ',
        'cho': 'ちょ',
        'nya': 'にゃ',
        'nyu': 'にゅ',
        'nyo': 'にょ',
        'hya': 'ひゃ',
        'hyu': 'ひゅ',
        'hyo': 'ひょ',
        'mya': 'みゃ',
        'myu': 'みゅ',
        'myo': 'みょ',
        'rya': 'りゃ',
        'ryu': 'りゅ',
        'ryo': 'りょ',
        'ga': 'が',
        'gi': 'ぎ',
        'gu': 'ぐ',
        'ge': 'げ',
        'go': 'ご',
        'za': 'ざ',
        'ji': 'じ',
        'zu': 'ず',
        'ze': 'ぜ',
        'zo': 'ぞ',
        'da': 'だ',
        'di': 'ぢ',
        'du': 'づ',
        'de': 'で',
        'do': 'ど',
        'ba': 'ば',
        'bi': 'び',
        'bu': 'ぶ',
        'be': 'べ',
        'bo': 'ぼ',
        'pa': 'ぱ',
        'pi': 'ぴ',
        'pu': 'ぷ',
        'pe': 'ぺ',
        'po': 'ぽ',
        'nn': 'ん',
        'gya': 'ぎゃ',
        'gyu': 'ぎゅ',
        'gyo': 'ぎょ',
        'ja': 'じゃ',
        'ju': 'じゅ',
        'jo': 'じょ',
        'dya': 'ぢゃ',
        'dyu': 'ぢゅ',
        'dyo': 'ぢょ',
        'bya': 'びゃ',
        'byu': 'びゅ',
        'byo': 'びょ',
        'pya': 'ぴゃ',
        'pyu': 'ぴゅ',
        'pyo': 'ぴょ',

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