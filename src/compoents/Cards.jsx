import React, { useState } from 'react';
import image01 from '../assets/images/bed_01.jpeg';
import image02 from '../assets/images/garden_01_v02.jpeg';
import image03 from '../assets/images/bed_02_v02.jpeg';

function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalImage, setModalImage] = useState(""); // Image source for modal

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* Card 1 */}
      <div
        onClick={() => openModal(image01)} // Open modal with image 1
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:w-80 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transform scale-105 cursor-pointer"
      >
        <img
          className="object-cover w-full rounded-t-lg h-56 md:h-auto"
          src={image01}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ห้องนอนชั้นล่าง</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ห้องมาตรฐานเตียงใหญ่พร้อมวิวสวน</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">ราคา 600บาท/คืน</p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        onClick={() => openModal(image03)} // Open modal with image 2
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:w-80 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transform scale-105 cursor-pointer"
      >
        <img
          className="object-cover w-full rounded-t-lg h-56 md:h-auto"
          src={image03}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ห้องนอนชั้นบน</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ห้องมาตรฐานเตียงใหญ่พร้อมวิวภูเขา</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">ราคา 600บาท/คืน</p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        onClick={() => openModal(image02)} // Open modal with image 3
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:w-80 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transform scale-105 cursor-pointer"
      >
        <img
          className="object-cover w-full rounded-t-lg h-56 md:h-auto"
          src={image02}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ลานกางเต็นท์</h5>
          <p className="mb-3 font-normal text-[1rem] text-gray-700 dark:text-gray-400">ลานกว้างพร้อมวิวภูเขาและสวน</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">ราคา 100บาท/คืน</p>
        </div>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="relative w-full h-full md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <img
              className="object-contain w-full h-full cursor-pointer"
              src={modalImage}
              alt="Popup"
              onClick={closeModal} // Close modal when clicking on the image
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
