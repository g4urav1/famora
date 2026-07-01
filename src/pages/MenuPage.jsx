import { useEffect, useState } from "react"

export default function Menu() {
    const [date,setDate] = useState("")

    useEffect(() => {
    const currentYear = new Date().getFullYear();
    setDate(currentYear);
  }, []);
  

    return (
        <div className="bg-[#0C1014]  w-full overflow-x-hidden">
            <div className="flex min-h-screen border-b border-[#494D53]">
                <div className="bg-[#0C1014] w-1/2 border-r-2 border-[#494D53]"></div>
                <div className="bg-[#1F1F22] w-1/2"></div>
            </div>
            <footer className="px-4 py-10">
                <div className="text-[#A8A8A8] text-xs w-full space-y-4">
                    <div className=" flex justify-center">
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
                    <div className="flex justify-center">
                        <a href="#">English</a>
                        <a href="#">© 2026 Instagram from Meta</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
