import React from 'react';
import { FaPodcast, FaFileAudio, FaGraduationCap } from 'react-icons/fa';
import { IoLogoYoutube, IoShareSocialSharp } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';

function Usecases() {
    return (
        <>
            <hr />
            <h1 className='text-center fw-bold my-3'>Usecases</h1>
            <p className="text-center my-3 fs-5">TextSpeaker allows you to redistribute your created audio files for free or commercially, even after your subscription expires.</p>
            <p className="text-center my-3 fs-5">All intellectual rights belong to you.</p>
            <div className="row">
                <div className="col-md-4 text-center p-5">
                    <IoLogoYoutube size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">Youtube videos</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <FaPodcast size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">Podcast - Broadcasting</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <FaFileAudio size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">Audiobooks</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <FaGraduationCap size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">E-learning material</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <IoShareSocialSharp size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">Social media content</p>
                </div>
                <div className="col-md-4 text-center p-5">
                    <LuPhoneCall size={100} />
                    <p className="text-center fs-3 fw-bold mt-3">IVR - Call Center</p>
                </div>
            </div>
        </>
    )
}

export default Usecases;