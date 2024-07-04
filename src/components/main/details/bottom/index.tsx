import React from 'react'

const Bottom: React.FC = () => {
  return (
    <div className='flex relative w-[1440px] h-[682px]'>
        <img src='/images/bottom.png' alt='bottomPicture' className='flex w-[1440px] h-[682px] z-0'/>
        <div className='flex flex-col w-[530px] h-[273px] absolute bg-white rounded-[8px] z-10 top-[215px] left-[122px] '>
            <div className='ml-[50px] mt-[40px]'>
                <p className='font-noto font-light text-[18px] text-[#2E2E2E] leading-[1.575rem] tracking-[.023em]'>ПОДПИШИТЕСЬ НА СЕКРЕТНУЮ РАССЫЛКУ</p>
                <p className='font-noto font-light text-[13px] w-[340px] h-[36px] leading-[1.138rem] mt-[29px] w-[328px] h-[36px] tracking-[.016em]'>После подписки вы получите эксклюзивный доступ к распродажам, предложениям и новым коллекциям</p>
                <form className='flex flex-row mt-[18px] gap-x-[16px]'>
                    <input  className='font-noto w-[220px] h-[43px] border-[1.5px] border-[#B0A38A] rounded-[5px] pl-[10px] placeholder:text-[13px] placeholder:text-[#B0A38A] items-center'  placeholder="E-mail"/>
                    <button className='w-[128px] h-[43px] bg-[#515040] text-[white] font-noto font-semibold text-[12px] rounded-[8px] leading-[1.05rem] tracking-[.03em]'>ПОДПИСАТЬСЯ</button>
                </form>
                <p className='font-noto font-light text-[11px] w-[263px] h-[30px] leading-[0.963rem] tracking-[.02em] mt-[11px] w-[280px] h-[30px]'>Нажимая кнопку “Подписаться” вы даете согласие на обработку персональных данных.</p>
            </div>
        </div>
    </div>
  )
}

export default Bottom;