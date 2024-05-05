import React from 'react';
import { FaDownload, FaRegCopy } from 'react-icons/fa';
import { FaMicrophoneLines } from 'react-icons/fa6';

function Content() {
    return (
        <div>
            <hr />
            <h1 className='fw-bold my-3'>Easy way to convert text to speech ( TTS )</h1>
            <h5>Just 3 steps below, fast and simple to convert text to speech ( TTS )</h5>
            <div className="row mt-5">
                <div className="col-md-4 text-center">
                    <FaRegCopy size={100}/>
                    <p className='text-uppercase my-3 fw-bold'>Input Text-to-Speech</p>
                    <p className='my-3'>Customize your speech with pitch and voice speed controls. Make your speech faster or slower, take control of voice volume. </p>
                </div>
                <div className="col-md-4 text-center">
                    <FaMicrophoneLines size={100}/>
                    <p className='text-uppercase my-3 fw-bold'>Select LANGUAGE & Voice</p>
                    <p className='my-3'>Select the language and the reader you need to convert text to mp3. Adjust volume, voice speed, your way.</p>
                </div>
                <div className="col-md-4 text-center">
                    <FaDownload size={100}/>
                    <p className='text-uppercase my-3 fw-bold'>Convert & Download MP3</p>
                    <p className='my-3'>The text-to-speech conversion process is very quick, the result will be mp3 format. You can start downloading for your work. </p>
                </div>
            </div>
        </div>
    )
}

export default Content;