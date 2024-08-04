import React from 'react'

const CopyrightFooter = () => {
  return (
    <div>
    <footer className=' w-full text-center p-4'>
      <p>© {new Date().getFullYear()} CandleHut. All rights reserved.</p>
    </footer>
  </div>  )
}

export default CopyrightFooter