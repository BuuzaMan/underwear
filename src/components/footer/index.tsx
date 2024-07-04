import React from 'react'
import DarkLogo from './details/logotypes/darkLogo';
import FooterItems from './details/items';
import Form from './details/form';
import Contacts from './details/contacts';
import Geoposition from './details/geoposition';



const Footer: React.FC = () => {
  return (
    <div className='flex flex-row w-[1440px] h-[274px] bg-[#626153] bottom-0 left-0 relative'>
        <div className='mt-[40px] ml-[120px]'><DarkLogo /></div>
        <FooterItems />
        <div className='flex flex-col'>
          <Form />
          <Contacts />
          <Geoposition />
        </div>
    </div>
  )
}

export default Footer;