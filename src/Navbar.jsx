import React, { useState } from 'react';
import { languages } from './utils/languages';
import { enVoices } from './utils/voices';
import { hiVoices } from './utils/voices';

function Navbar() {
    const [language, setLanguage] = useState(sessionStorage.getItem('language') || 'en-in');
    const [voice, setVoice] = useState(sessionStorage.getItem('voice') || 'Linda');

    const handleChange = (e) => {
        setLanguage(e.target.value);
        sessionStorage.setItem('language', e.target.value);
    }

    return (
        <div className="navbar px-3">
            <h4 className="fw-bold text-white">Text to Speech</h4>
            <div className="select-language d-flex flex-row-reverse">
                <select
                    name="language"
                    id="language"
                    className="form-select"
                    value={language}
                    onChange={handleChange}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
                <select
                    name="voice"
                    id="voice"
                    className="form-select me-3"
                    value={voice}
                    onChange={(e) => {
                        setVoice(e.target.value);
                        sessionStorage.setItem('voice', e.target.value);
                    }}
                    hidden
                >
                    {language === 'en-in' ?
                        enVoices.map((voice) => (
                            <option key={voice.voice} value={voice.voice}>{`${voice.voice} (${voice.gender[0]})`}</option>
                        ))

                        : hiVoices.india.map((voice) => (
                            <option key={voice.voice} value={voice.voice}>{`${voice.voice} (${voice.gender[0]})`}</option>
                        ))}
                </select>
            </div>
        </div>
    )
}

export default Navbar;