import React, { useState } from 'react';
import PreviousData from './PreviousData';
import Predict from './Predict';
import MoreInfo from './MoreInfo';
import SearchBar from './SearchBar'

const Information = ({ markers, selectedMarker, onSelectMarker }) => {
    const [selectedOption, setSelectedOption] = useState('previousData'); // Initialize with 'previousData'

  if (!selectedMarker) {
    return (
        
      <div className=" overflow-y-scroll scrollbar-hide absolute z-44 w-[35vw] h-[80vh] bg-accent top-[50px] right-[50px] rounded-[20px] border-[1px] border-[#979696] px-[2%] py-[30px]">
        <div className='flex justify-between'>
        <p className='font-[500]] text-[24px]'>Suggested Locations:</p>
        </div>
        {markers.map((marker, index) => (
          <div key={index} onClick={() => onSelectMarker(marker)} className='cursor-pointer flex justify-between mt-[20px] text-[20px] bg-white px-[30px] py-[30px] border-[1px] border-[#979696] rounded-[20px]'>
            <div className=''>
                <p className='text-[18px]'>{marker.name} </p>
                <p className='text-[14px] text-[#848383]'>Site type: {marker.siteType}</p>
            </div>
            <div className=''>
                <p className='text-[30px] font-bold text-secondary'>{marker.methane} <span className='text-[14px] text-black font-normal'>ppb</span></p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" overflow-y-scroll scrollbar-hide absolute z-44 w-[35vw] h-[80vh] bg-accent top-[50px] right-[50px] rounded-[20px] border-[1px] border-[#979696] ">
      <div className='flex justify-between px-[2.5em] py-[30px]'>
      <div className=''>
                <p className='text-[30px] font-semibold'>{selectedMarker.name} </p>
                <p className='text-[14px] text-[#848383]'>Site type: {selectedMarker.siteType}</p>
            </div>
            <div className=''>
                <p className='text-[30px] font-bold text-secondary'>{selectedMarker.methane} <span className='text-[14px] text-black font-normal'>ppb</span></p>
                <a href={selectedMarker.gmapsLink} className='px-[1em] py-[5px] bg-secondary text-white text-[16px] mt-[1em] block mx-auto rounded-[10px]'>Google maps</a>
            </div>
      </div>
      <div className='grid grid-cols-3 w-full mt-[1em] px-[2.5em] py-[5px] border-b-[3px] border-[#cfcfcf]' id='options'>
  <div
    className={`cursor-pointer font-[500] text-[14px] text-center ${selectedOption === 'previousData' ? 'activeOption' : ''}`}
    onClick={() => setSelectedOption('previousData')}
  >
    Previous Data
  </div>
  <div
    className={`cursor-pointer font-[500] text-[14px] text-center ${selectedOption === 'moreInfo' ? 'activeOption' : ''}`}
    onClick={() => setSelectedOption('moreInfo')}
  >
    More Info
  </div>
  <div
    className={`cursor-pointer font-[500] text-[14px] text-center ${selectedOption === 'predict' ? 'activeOption' : ''}`}
    onClick={() => setSelectedOption('predict')}
  >
    Predict
  </div>
</div>

      {selectedOption === 'previousData' && <PreviousData selectedMarker={selectedMarker} />}
      {selectedOption === 'moreInfo' && <MoreInfo selectedMarker={selectedMarker} />}
      {selectedOption === 'predict' && <Predict selectedMarker={selectedMarker} />}
    </div>
  );
};


  


export default Information;