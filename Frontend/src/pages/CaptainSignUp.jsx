import CustomDropdown from "@/components/items/CustomDropdown";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        vehicleColor: "",
        plate: "",
        capacity: "",
        vehicleType: "",
    });

    const colors = [
        "white",
        "black",
        "gray",
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
    ];

    const vehicleTypes = ["car", "bike", "van", "truck"];

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((preValue) => ({ ...preValue, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            vehicleColor: "",
            plate: "",
            capacity: "",
            vehicleType: "",
        })
    };

    const [userSignUpData, setUserSignUpData] = useState({});

    return (
        <div className="p-6 h-full flex flex-col justify-between mb-2 ">
            <div className="flex flex-col ">
                <img
                    className="w-14 mb-2"
                    src="https://helios-i.mashable.com/imagery/articles/03y6VwlrZqnsuvnwR8CtGAL/hero-image.fill.size_1200x675.v1623372852.jpg"
                    alt="uber logo"
                />

                {/* <h1 className='flex justify-center font-bold text-2xl mt-2 '>Sign Up</h1> */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-2 w-full drop-shadow-sm px-2 py-3"
                >
                    {/* <h1 className="text-center">Sign Up as Captain</h1> */}

                    {/* full name div */}
                    <div className="p-1">
                        {/* first name input box */}
                        <label className="text-md font-medium">
                            What's full Name
                            <span className="text-red-600">*</span>
                        </label>
                        <div className="flex flex-row justify-between space-x-1">
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-1/2 text-md placeholder:text-sm"
                                placeholder="first name"
                                required
                            />

                            {/* last name input box */}
                            {/* <h3 className='text-md font-medium'>What's your last name <span className='text-red-600'></span></h3> */}
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                className="bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-1/2 text-md placeholder:text-sm"
                                placeholder="last name"
                                required
                            />
                        </div>
                    </div>

                    {/* Email input box */}
                    <h3 className="text-md font-medium">
                        What's your Email{" "}
                        <span className="text-red-600">*</span>
                    </h3>
                    <input
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        className="bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm"
                        placeholder="Example@gmail.com"
                        required
                    />

                    {/* Password input box */}
                    <h3 className="text-md font-medium">
                        Password <span className="text-red-600">*</span>
                    </h3>
                    <input
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        className="bg-[#eee] text-primary-content border rounded-sm focus:bg-red-100 focus:outline-none focus:border-red-200 px-4 py-2 w-full text-md placeholder:text-sm"
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <h3 className="text-md text-center font-medium">
                        Vehicles' details{" "}
                        <span className="text-red-600">*</span>
                    </h3>
                    {/* colors */}
                    <div className="space-x-1 space-y-1">
                        <label className="text-md font-medium">
                            Vehicle Color
                        </label>
                        <select
                            value={formData.vehicleColor}
                            name="vehicleColor"
                            onChange={handleChange}
                            className="bg-[#eee] text-primary-content w-full py-2 px-3 bg-slate-100 rounded-md focus:bg-slate-100 focus:outline-none focus:border-blue-200"
                        >
                            <option value="">Select colors</option>
                            {colors.map((option) => (
                                <option key={option} value={option}>
                                    {option.charAt(0).toUpperCase() +
                                        option.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-x-1 space-y-1">
                        <label className="text-md font-medium">
                            Vehicle number plate
                            <span className="text-red-600">*</span>
                        </label>
                        <div>
                            <input
                                type="text"
                                name="plate"
                                value={formData.plate}
                                onChange={handleChange}
                                className="bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm"
                                placeholder="number plate"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-x-1 space-y-1">
                        <label className="text-md font-medium">
                            Vehicle Type
                        </label>
                        <select
                            value={formData.vehicleType}
                            name="vehicleType"
                            onChange={handleChange}
                            className="bg-[#eee] text-primary-content w-full py-2 px-3 bg-slate-100 rounded-md focus:bg-slate-100 focus:outline-none focus:border-blue-200"
                        >
                            <option value="">Select Vehicle Type</option>
                            {vehicleTypes.map((option) => (
                                <option key={option} value={option} className="w-full">
                                    {option.charAt(0).toUpperCase() +
                                        option.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-x-1 space-y-1">
                        <label className="text-md font-medium">
                            Vehicle passenger captacity
                            <span className="text-red-600">*</span>
                        </label>
                        <div>
                            <input
                                type="text"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                className="bg-[#eee] text-primary-content border rounded-sm focus:bg-slate-100 focus:outline-none focus:border-blue-200 px-4 py-2 w-full text-md placeholder:text-sm"
                                placeholder="Vehicle capacity"
                                required
                            />
                        </div>
                    </div>

                    <button className="py-2 w-full rounded-md bg-orange-500 text-gray-800 text-lg font-semibold">
                        Sign Up
                    </button>
                </form>

                <p className="flex justify-center mb-2">
                    Already have account?
                    <Link to="/signin" className="text-blue-600">
                        Sign in{" "}
                    </Link>{" "}
                </p>
            </div>

            {/* <div className='flex  justify-center space-x-1 items-center h-10'>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
        <h1 className='text-nowrap text-sm text-gray-300'>OR</h1>
        <hr className='h-0.2 w-1/2  bg-gray-400' />
      </div> */}
            <div className="mb-5">
                <p className="text-xs leading-4 mb-5">
                    By signing up, you agree to our{" "}
                    <span className="text-blue-700">Terms of Service</span> and{" "}
                    <span className="text-blue-700">Privacy Policy</span>.{" "}
                    <br /> Your information will be securely stored and used as
                    outlined in our policies. You confirm that you are at least
                    18 years old and the details provided are accurate.
                </p>
            </div>
        </div>
    );
};

export default CaptainSignUp;
