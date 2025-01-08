import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: '', username: '', password: '' })
  const [passwordArray, setpasswordArray] = useState([])

  // const getPasswords = async () => {
  //   let req = await fetch('http://localhost:3000/')
  //   let passwords = await req.json()
  //   let passwordArray;
  //   console.log(passwords)
  //   setpasswordArray(passwords)
  // }

  // useEffect(() => {
  //   getPasswords()


  // }, [])

  // NORMAL COdE DURING WEB DEVELOPMENT above is modified for backend merge with frontend
  useEffect(() => {
    let passwords = localStorage.getItem('passwords');
    let passwordArray;
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text)
  }


  const showPassword = () => {
    passwordRef.current.type = 'text'
    if (ref.current.src.includes('icons/eyecross.png')) {
      ref.current.src = 'icons/eye.png'
      passwordRef.current.type = 'password'
    }
    else {
      ref.current.src = 'icons/eyecross.png'
      passwordRef.current.type = 'text'
    }
  }

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, form]);
      setform({ site: '', username: '', password: '' })
    }
    else {
      toast('Error: Password not saved');
    }
  }

  const deletePassword = (id) => {
    console.log('Deleting Password with id', id)
    let c = confirm('Do you really want to delete this password?')
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify((passwordArray.filter(item => item.id !== id))))
      toast('Password deleted successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const editPassword = (id) => {
    console.log('Editing Password with id', id)
    setform(passwordArray.filter(i => i.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id !== id))

  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute top-0 -z-10 h-full w-full bg-green-50"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
      <div className="p-2 md:p-0 md:mycontainer min-h-[83.7vh]">
        <h1 className='text-3xl text font-bold text-center'> <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Pasword Manager</p>
        <div className='flex flex-col p-4 text-black gap-6 items-center'>
          <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-full border border-green-800 w-full p-3 py-0' type="text" name="site" id="site" />
          <div className="flex flex-colmd:flex-row w-full justify-between gap-6">
            <input value={form.username} onChange={handlechange} placeholder='Enter Username' className='rounded-full border border-green-800 w-full p-3 py-0' type="text" name="username" id="username" />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter Password' className='rounded-full border border-green-800 w-full p-3 py-0' type="password" name="password" id="password" />
              <span className='absolute right-[5px] top-[0px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" /></span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center gap-3 bg-green-500 hover:bg-green-300 rounded-full px-6 py-1 w-fit border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover">
            </lord-icon>
            Save</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-xl py-1'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden mb-10">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-1'>Site</th>
                <th className='py-1'>Username</th>
                <th className='py-1'>Password</th>
                <th className='py-1'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-1 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <a href={item.site} target='blank'>{item.site}</a>
                      <div className='lordiconcopy size-5 cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <lord-icon
                          style={{ 'width': '15px', 'height': '15px', 'paddingTop': '0px' }}
                          src="https://cdn.lordicon.com/wzwygmng.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-1 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='lordiconcopy size-5 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{ 'width': '15px', 'height': '15px', 'paddingTop': '0px' }}
                          src="https://cdn.lordicon.com/wzwygmng.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-1 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{'*'.repeat(item.password.length)}</span>
                      <div className='lordiconcopy size-5 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{ 'width': '15px', 'height': '15px', 'paddingTop': '0px' }}
                          src="https://cdn.lordicon.com/wzwygmng.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='justify-center
                  py-1 border border-white text-center'>
                    <span className='cursor-pointer' onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/wkvacbiw.json"
                        trigger="hover"
                        style={{ "width": "20px", "height": "20px" }}>
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer px-1' onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ "width": "20px", "height": "20px" }}>
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager