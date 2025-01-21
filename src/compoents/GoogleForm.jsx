import React from 'react'

function GoogleForm() {
  return (
    <div className="container  py-8 ">
      <div className="w-full flex flex-col items-center ">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdY3eevTp_x5cZxtgNRObNi4MO5ykhU7m-LZL2_cEYvL6D6QQ/viewform?embedded=true"
          className="w-full h-[2000px] sm:w-[375px] sm:h-[2000px] md:w-[640px] md:h-[1700px]"

        >
          Loading…
        </iframe>
      </div>
    </div>
  )
}

export default GoogleForm
