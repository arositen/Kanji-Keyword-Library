import { useState } from 'react'

const convertToKanaTest = () => {

    const [currentText, setCurrentText] = useState("");
    const [convertedText, setConvertedText] = useState("");

    const parseIntoKana = (romaji: string): string => {

        let FinalString = '';

        for (let i = 0; i < romaji.length; i++) {
            let chunk = romaji.slice(i, i + 3); //sliding window
            let addToFinalString = ''

            for (let j = 0; j < chunk.length; j++) {
                if (chunk.slice(0, j + 1) in letterToKana) {
                    addToFinalString = addToFinalString.slice(j) + letterToKana[chunk.slice(0, j + 1)];
                    i = i + chunk.slice(0, j + 1).length - 1;

                } else {
                    addToFinalString = addToFinalString.slice(0, j) + chunk.slice(j, 1)
                }
            }

            FinalString = FinalString + addToFinalString;
            console.log(FinalString)
        }

        return FinalString

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
        <section className='flex justify-center w-full'>
            <div className='flex flex-col justify-center basis-1/2 m-2'>
                <h1 className='flex justify-center text-lg w-full text-white'>This is the input section:</h1>
                <div className='flex justify-center'>
                    <input type="text" placeholder='Input latin characters' className='px-1 border-2 border-black' onChange={(e) => { handleInput(e) }} />
                </div>
            </div>
            <div className='flex flex-col justify-center basis-1/2 m-2'>
                <h1 className='flex justify-center text-lg w-full text-white'>This is the result section:</h1>
                <div className='flex justify-center'>
                    <div className='px-1 border-2 border-black bg-white w-60 h-8'>{convertedText}</div>
                </div>
            </div>
        </section>
    )
}

export default convertToKanaTest