import Modal from 'react-modal';
import React from 'react'
import './Home.css'
import HomeLoginCart from './HomeLoginCart'
// import GroupsIcon from '@mui/icons-material/Groups';
// import SchoolIcon from '@mui/icons-material/School';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
const dep = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/></svg>
const group = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/></g></svg>
const school = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
const write = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="15,16 11,20 21,20 21,16"/><path d="M12.06,7.19L3,16.25V20h3.75l9.06-9.06L12.06,7.19z M5.92,18H5v-0.92l7.06-7.06l0.92,0.92L5.92,18z"/><path d="M18.71,8.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C16.17,4.09,15.92,4,15.66,4c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75L18.71,8.04z"/></g></g></svg>
const login = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g></svg>


// call kru ky
// ni ab khana kha ke bnate hai👍😅😅🙆‍♀️👌👍🙆‍♂️🙆‍♀️🙆‍♀️👌👍byyy Bye😁🙋‍♂️🙋‍♀️abhi our ayega ki ni aa jayenge call krna ok to bnd kr du colahbnr ation ok bro 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width : '400px',
  },
};


Modal.setAppElement(document.getElementsByClassName('homebottom'));

export default function Home() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = ()=> {
    setIsOpen(true);
  }
  const afterOpenModal = ()=> {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const closeModal = ()=> {
    setIsOpen(false);
  }
  return (
    <>
    <div className='home_login'>
        <div className="homeTop">
          {login}
          <h3>SELECT LOGIN TYPE</h3>
        </div>
        <div className="homeBottom">
          <HomeLoginCart openModal={openModal} icon={group} text='Student Login'/>
          <HomeLoginCart  icon={dep} text='Teacher Login'/>
          <HomeLoginCart  icon={school} text='School Login'/>
          <HomeLoginCart icon={write} text='Unregistered Student'/>
          {/* <HomeLoginCart Icon = {GroupsIcon} text=/>
          <HomeLoginCart Icon = {AccountBalanceIcon} text=/>
          <HomeLoginCart Icon = {SchoolIcon} text=/>
          <HomeLoginCart Icon = {DriveFileRenameOutlineOutlinedIcon} text=/> */}
        </div>
     
    </div>
    <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          hii
        </form>
      </Modal>
    </div>
    </>
  )
}
