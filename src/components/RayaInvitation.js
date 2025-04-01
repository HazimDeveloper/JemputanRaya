import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Clock, Sun, Moon, Image as ImageIcon, ExternalLink } from 'lucide-react';
import headerImage from '../assets/header-image.png';
import sparkSound from '../assets/spark-sound.mp3';
import rayaImage1 from '../assets/air-karbohidrat.png';
import rayaImage2 from '../assets/air-pisang.png';
import rayaImage3 from '../assets/laksa-kuah-putih.png';
import rayaImage4 from '../assets/nasi-minyak.png';
import rayaImage5 from '../assets/mi-kari.png';
import rayaImage6 from '../assets/sate-dan-nasi-impit.png';
import '../RayaInvitation.css';

const RayaInvitation = () => {
    const [showSparks, setShowSparks] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const audioRef = useRef(null);

    // Pelita Lamp Component
    const PelitaLamp = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 100"
            className="pelita"
        >
            <rect
                x="20"
                y="80"
                width="10"
                height="20"
                fill="#8B4513"
            />
            <rect
                x="10"
                y="40"
                width="30"
                height="40"
                fill="#228B22"
                stroke="#006400"
                strokeWidth="2"
            />
            <path
                d="M25 20 L20 40 L30 40 Z"
                fill="#FFA500"
                className="flame"
            />
        </svg>
    );

    // Spark Effects Component
    const SparkEffects = () => {
        if (!showSparks) return null;

        return (
            <>
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="spark"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </>
        );
    };

    // Placeholder images setup 
    useEffect(() => {
        const placeholderImages = [
            { thumb: rayaImage1, full: rayaImage1, alt: 'Air Karbohidrat' },
            { thumb: rayaImage2, full: rayaImage2, alt: 'Air Pisang' },
            { thumb: rayaImage3, full: rayaImage3, alt: 'Laksa Kuah Putih' },
            { thumb: rayaImage4, full: rayaImage4, alt: 'Mee Kari' },
            { thumb: rayaImage5, full: rayaImage5, alt: 'Nasi Minyak' },
            { thumb: rayaImage6, full: rayaImage6, alt: 'Sate dan Nasi Impit' },
        ];

        setGalleryImages(placeholderImages);
    }, []);

    // Theme toggle
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    // Copy location to clipboard
    const handleCopyLocation = () => {
        const location = '18731, Taman Cederawasih, Tok Jembal, Kuala Terengganu, Terengganu Darul Iman';
        navigator.clipboard.writeText(location);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000);
    };

    // Open Google Maps
    const handleOpenGoogleMaps = () => {
        window.open('https://maps.app.goo.gl/1qfz4zzq14Y88vRs9?g_st=iw', '_blank');
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

            {/* Audio element for spark sound */}
            <audio ref={audioRef} src={sparkSound} />

            {/* Theme Toggle Button */}
            <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
            >
                {isDarkMode ? <Sun /> : <Moon />}
            </button>

            <div className="invitation-container">
                <div className="invitation-card">
                    {/* Pelita Lamp */}
                    <PelitaLamp />

                    {/* Spark Effects */}
                    {showSparks && <SparkEffects />}


                    {/* Header */}
                    <div className="invitation-header">
                        <h1>JEMPUTAN RUMAH TERBUKA AIDILFITRI DI VILLA KHAIRI & SABARIAH
                        </h1>
                    </div>

                    {/* Header Image Section */}
                    <div className="header-image-container">
                        <img
                            src={headerImage}
                            alt="Keluarga Villa Khairi & Sabariah"
                            className="header-image"
                        />
                    </div>


                    {/* Invitation Content */}
                    <div className="invitation-content">
                        {/* Arabic Greeting */}
                        <p className="arabic-greeting">
                            السلام عليكم ورحمة الله وبركاته
                            <br />
                            بسم الله الرحمن الرحيم
                        </p>

                        {/* Invitation Text */}
                        <p className="invitation-text">
                            Kami dengan penuh rasa syukur ke hadrat ilahi dan berbesar hati ingin menjemput tuan/puan seisi keluarga ke rumah kami.
                        </p>

                        {/* Event Details */}
                        <div className="event-details">
                            <div className="event-detail">
                                <Calendar />
                                <div>
                                    <h3>Tarikh</h3>
                                    <p>3 Syawal 1446H / 2 April 2025 (Rabu)</p>
                                </div>
                            </div>
                            <div className="event-detail">
                                <Clock />
                                <div>
                                    <h3>Masa</h3>
                                    <p>9:30 Pagi - 5:00 Petang</p>
                                </div>
                            </div>
                            <div className="event-detail">
                                <MapPin />
                                <div>
                                    <h3>Lokasi</h3>
                                    <p>18731, Taman Cederawasih, Tok Jembal, Kuala Terengganu</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Google Maps */}
                        <div className="map-section" style={{ marginBottom : '20px' }}>
                            <iframe
                                title="Rumah Terbuka Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.1826282229203!2d103.1356764!3d5.2441448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c7f519e09a7f0d%3A0x89f29eacad1c9c62!2s18731%20Taman%20Cenderawasih%2C%20Tok%20Jembal%2C%2021300%20Kuala%20Terengganu%2C%20Terengganu%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1714600000000!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="map-overlay">
                                <MapPin /> Lokasi Rumah Terbuka
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            <button
                                onClick={handleOpenGoogleMaps}
                                className="action-btn maps-btn"
                            >
                                <ExternalLink /> Buka Google Maps
                            </button>
                            <button
                                onClick={handleCopyLocation}
                                className="action-btn copy-btn"
                            >
                                <MapPin /> Salin Lokasi
                            </button>
                        </div>

                        {/* Gallery Section */}
                        <button
                            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                            className="gallery-toggle-btn"
                        >
                            <ImageIcon /> {isGalleryOpen ? 'Tutup Galeri' : 'Tekan Untuk Lihat Menu'}
                        </button>

                        {isGalleryOpen && (
                            <div className="gallery">
                                {galleryImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(img)}
                                        className="gallery-item"
                                    >
                                        <img
                                            src={img.thumb}
                                            alt={img.alt}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Closing Message */}
                        <p className="closing-message">
                            Moga kehadiran semua dapat memeriahkan suasana.. Terima kasih! 😊
                        </p>
                    </div>
                </div>
            </div>

            {/* Copy Confirmation Modal */}
            {showModal && (
                <div className="copy-modal">
                    Lokasi berjaya disalin!
                </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="image-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage.full}
                        alt={selectedImage.alt}
                    />
                    <p>{selectedImage.alt}</p>
                </div>
            )}
        </div>
    );
};

export default RayaInvitation;