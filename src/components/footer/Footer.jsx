import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"
import { ApiUrl } from "../../constant"
import { useState, useEffect } from "react"
import Container from "../../container/Container"
import { images } from "../../constants"
import { useForm } from "react-hook-form"
import axios from "axios"

const Footer = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log("form data ", data)
    try {
      console.log(`${ApiUrl}/contact/createContact`);

      const response = await axios.post(`${ApiUrl}/contact/createContact`, data)
      if (response?.data?.data) {
        reset();
      }
    } catch (error) {
      console.log("error into create contact", error)
    }
  }
  useEffect(()=>{
    axios.get(`${ApiUrl}/contact/fetchContact`)
  },[])

  return (
    <div className="max-w-4xl mx-auto">
      <Container>
        <h2 className="text-center font-semibold text-2xl">Take a coffee & chat with me </h2>
        <div className="w-full mt-8">
          <div className="grid grid-cols-2 space-x-8">
            <div className="bg-primaryColor flex flex-row justify-center space-x-2 items-center rounded-md px-4 py-2">
              <img src={images.email} className="size-10" />
              <a href="mailto:mughaljawad12@gmail.com" >Mughaljawad12@gmail.com</a>
            </div>
            <div className="bg-primaryColor flex flex-row justify-center space-x-2 items-center rounded-md px-4 py-2">
              <img src={images.mobile} className="size-10" />
              <a href="tel:+923170337097" >03170337097</a>
            </div>

          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  space-y-4">
              <input className="outline-none border-none px-2 py-4 bg-primaryColor rounded" placeholder="Enter Your Name" {...register("contactName")} />
              {errors.contactName && <span>This field is required</span>}
              <input className="outline-none border-none px-2 py-4 bg-primaryColor rounded" placeholder="Enter Your Email" type="email"  {...register("contactEmail")} />
              {errors.contactEmail && <span>This field is required</span>}
              <textarea  {...register("contactMessage")} className="outline-none border-none px-2 py-4 bg-primaryColor rounded" placeholder="Enter Your Message" rows="5"></textarea>
              <input type="submit" className="px-12 py-4 mx-auto w-1/3 hover:bg-whiteColor hover:shadow-2xl hover:border hover:text-indigo-600 bg-indigo-600 text-white shadow  rounded cursor-pointer" />
            </form>


          </div>
        </div>
      </Container>
    </div>
  )
}

export default AppWrap(MotionWrap(Footer), "contact", "bg-whiteColor")