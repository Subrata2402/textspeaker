import React, { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { ColorRing } from 'react-loader-spinner';
import Loader from './utils/Loader';

function Speaker() {
    const [text, setText] = useState('');
    const audioRef = useRef(null);
    const downlaodRef = useRef(null);
    const [loader, setLoader] = useState(false);
    const [vcLoader, setVcLoader] = useState(true);
    const textRef = useRef(null);
    const [voiceData, setVoiceData] = useState([]);
    const bgmRef = useRef(null);
    const audioFileRef = useRef(null);

    const handleClick = async () => {
        setLoader(true);
        textRef.current.scrollIntoView({ behavior: 'smooth' });
        textRef.current.children[1].className = 'col-md-6';
        textRef.current.children[0].hidden = false;
        const language = sessionStorage.getItem('language') || 'en-in';
        const voice = sessionStorage.getItem('voice') || 'Linda';
        console.log(language, voice);
        const encodedParams = new URLSearchParams();
        encodedParams.set('src', text);
        encodedParams.set('hl', language);
        encodedParams.set('r', '0');
        encodedParams.set('c', 'mp3');
        encodedParams.set('f', 'ulaw_44khz_stereo');
        encodedParams.set('v', voice);

        const url = 'https://voicerss-text-to-speech.p.rapidapi.com/?key=87ac34d0966a4d1395d7c067a4956e9c';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'd143f3b26cmsh7a8e363c0e7d171p128d89jsn2ed9ae9a35b2',
                'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
            },
            body: encodedParams
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                const audio = audioRef.current;
                const blob = await response.blob();
                audio.src = URL.createObjectURL(blob);
                audio.playbackRate = 1.25;
                audio.controller = true;
                downlaodRef.current.href = audio.src;
                audio.play();
            }
        } catch (error) {
            console.error(error);
        }
        setLoader(false);
    }

    useEffect(() => {
        fetch('https://api.elevenlabs.io/v1/voices').then(res => res.json()).then(data => {
            setVoiceData(data.voices);
            setVcLoader(false);
        }
        ).catch(err => console.error(err));
    }, []);

    const handlePlayPause = (e) => {
        bgmRef.current.src = URL.createObjectURL(audioFileRef.current.files[0]);
        if (e.target.play) {
            bgmRef.current.pause();
            e.target.play = false;
            e.target.innerText = 'Play';
        } else {
            bgmRef.current.play();
            e.target.play = true;
            e.target.innerText = 'Pause';
        }
    }

    return (
        <div className="text-container mt-3">
            <div className="row" ref={textRef}>
                {/* <div className="col-md-6 text-center mt-3" hidden>
                    <img src="/bang.png" alt="bang" className='img-fluid' />
                    <h4 className='mt-3 fw-bold'>Convert text-to-speech success!</h4>
                </div> */}
                <div className="col-md-6">
                    <textarea
                        name="text"
                        id="text"
                        rows="20"
                        className="form-control fs-5 fw-bold"
                        placeholder="Enter text here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={{ background: 'transparent' }}
                    >
                    </textarea>
                </div>
                <div className="col-md-6 border">
                    <div className='border mt-2 px-2' style={{ height: "500px", overflow: "auto" }}>
                        {vcLoader ? <Loader /> :
                            <>
                                {voiceData.map((voice) => (
                                    <label className='border px-3 py-2 mt-2 w-100'>
                                        <div className='d-flex mb-2'>
                                            <input type="radio" name='voice' className='me-3' />
                                            <p className='p-0 m-0'>{voice.name}</p>
                                        </div>
                                        <audio controls id='audio' src={voice.preview_url} className='w-100'></audio>
                                    </label>
                                ))}
                            </>
                        }
                    </div>
                    <div className='border mt-3 px-3'>
                        <div class="input-group py-3 ">
                            <label htmlFor="audio-file" className='fw-bold text-center fs-5 me-3'>Add BGM</label>
                            <input
                                type="file"
                                class="form-control"
                                id="audio-file"
                                aria-label="Text input with segmented dropdown button"
                                placeholder='Enter video url here...'
                                ref={audioFileRef}
                            />
                            <button
                                className="btn btn-primary fw-bold"
                                play={false}
                                onClick={handlePlayPause}
                            >
                                Play
                            </button>
                            <audio ref={bgmRef} src="" hidden></audio>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row mt-3 align-items-center">
                <div className="col-md-3 mb-3">
                    <button className="btn btn-primary d-flex align-items-center justify-content-center fw-bold w-100" onClick={handleClick}>
                        {loader ?
                            <ColorRing className="fw-bold fs-5 me-2" height="30" width='30' colors={['#fff', '#fff', '#fff', '#fff', '#fff']} />
                            : <HiOutlineSpeakerWave className='fw-bold fs-5 me-2' />
                        }
                        Convert Text to Speech
                    </button>
                </div>
                <div className="audio-container col-md-7 mb-3">
                    <audio controls id="audio" ref={audioRef} className='w-100' style={{ height: "40px" }}></audio>
                </div>
                <div className="col-md-2 mb-3">
                    <a className="btn btn-primary fw-bold d-flex align-items-center justify-content-center" download ref={downlaodRef}>
                        <FaDownload className='fw-bold fs-5 me-2' />
                        Download
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Speaker;