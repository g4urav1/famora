import { useEffect, useState } from "react"
import loginhook from "../assets/loginhook.webp"
import icon from "../assets/icon.svg"

export default function Menu() {
    const [date, setDate] = useState("")

    useEffect(() => {
        const currentYear = new Date().getFullYear()
        setDate(currentYear)
    }, [])

    return (
        <div className="bg-bg w-full min-h-screen overflow-x-hidden">
            <div className="flex min-h-screen border-b border-[#494D53]">
                
                <div className="hidden md:block bg-bg md:w-1/2 border-r-2 border-[#494D53]">
                    <div className="flex flex-col justify-end items-center h-full w-full px-6">
                        <div className=" text-2xl lg:text-3xl mx-auto w-full lg:w-2/3 text-center leading-relaxed">
                            See everyday moments from your{" "}
                            <span className="bg-fm-gradient bg-clip-text text-transparent inline-block">
                                close friends
                            </span>
                            .
                        </div>

                        <div>
                            <img
                                className="w-3/5 min-w-[400px] mx-auto"
                                src={loginhook}
                                alt="Login preview"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-surface w-full md:w-1/2 flex flex-col justify-center md:justify-end items-center px-6 py-10 gap-10">
                    <div className="flex flex-col justify-center items-center w-full max-w-md">
                        <img
                            className="w-[70px] sm:w-[80px]"
                            src={icon}
                            alt="Famora icon"
                        />

                        <p className=" text-2xl sm:text-3xl mx-auto w-full text-center leading-relaxed mt-4">
                            Get the full experience with the tablet app
                        </p>

                        <button className="my-4 bg-primary rounded-xl py-2 text-base sm:text-lg font-semibold w-full sm:w-2/3">
                            Open Famora
                        </button>
                    </div>

                    <p className="flex gap-3 mb-10 md:mb-20">
                        <a className="text-secondary" href="#">
                            Login
                        </a>
                        or
                        <a className="text-secondary" href="#">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>

            <footer className="px-4 py-8 mb-5">
                <div className="text-[#A8A8A8] text-xs w-full space-y-4">
                    <div className="flex justify-center flex-wrap gap-y-3">
                        <a className="px-2" href="#">Meta</a>
                        <a className="px-2" href="#">About</a>
                        <a className="px-2" href="#">Blog</a>
                        <a className="px-2" href="#">Jobs</a>
                        <a className="px-2" href="#">Help</a>
                        <a className="px-2" href="#">API</a>
                        <a className="px-2" href="#">Privacy</a>
                        <a className="px-2" href="#">Terms</a>
                        <a className="px-2" href="#">Location</a>
                        <a className="px-2" href="#">Popular</a>
                        <a className="px-2" href="#">Instagram Lite</a>
                        <a className="px-2" href="#">Meta AI</a>
                        <a className="px-2" href="#">Threads</a>
                        <a className="px-2" href="#">Contact Uploading & Non-Users</a>
                        <a className="px-2" href="#">Meta Verified</a>
                    </div>

                    <div className="flex justify-center flex-wrap gap-3">
                        <a href="#">English</a>
                        <a href="#">© {date} Instagram from Meta</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}