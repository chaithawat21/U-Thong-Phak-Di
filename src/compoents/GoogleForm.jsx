import React from 'react'

function GoogleForm() {
  return (
    <div className="container mx-auto p-8 ">
      <div className="w-full flex flex-col items-center ">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdY3eevTp_x5cZxtgNRObNi4MO5ykhU7m-LZL2_cEYvL6D6QQ/viewform?embedded=true"
          className="w-full h-[1900px] sm:w-[320px] sm:h-[1900px] md:w-[640px] md:h-[1700px] overflow-visble"

        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}

export default GoogleForm
