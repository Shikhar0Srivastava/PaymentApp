import PropTypes from "prop-types"

export function Profile() {

  return (
    <>
      <Card><CardContents/></Card>
    </>
  )
}

function Card({children}) {
  return <div className='h-screen flex items-center justify-center font-parkinsans'>
    {children}
  </div>
}

function CardContents() {
  return <div className='shadow-md h-[250px] w-[300px] rounded-md'>
      <div className='h-[125px] bg-blue-400 rounded-t-md flex items-center justify-center'>
        <img src="./src/assets/react.svg" alt="" className='rounded-full w-[75px] h-[75px]'/>
      </div>
      <div className='h-[70px] border-b-2 p-2'>
        <div className='text-lg font-semibold'>Shikhar Srivastava</div>
        <div className='text-gray-400 text-xs'>22</div>
      </div>
      <div className='h-[55px] flex justify-around text-xs text-gray-400 p-1'>
        <div>
          <div className='text-lg font-semibold text-black flex items-center justify-center'>80k</div>
          <div className='flex items-center justify-center'>followers</div>
        </div>
        <div>
          <div className='text-lg font-semibold text-black flex items-center justify-center'>803k</div>
          <div className='flex items-center justify-center'>likes</div>
        </div>
        <div>
          <div className='text-lg font-semibold text-black flex items-center justify-center'>3k</div>
          <div className='flex items-center justify-center'>photos</div>
        </div>
      </div>
    </div>
}

Card.propTypes= {
  children: PropTypes.any
}