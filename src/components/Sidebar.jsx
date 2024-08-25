import { useState } from "react";

function Sidebar() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(250);
    const [show, setShow] = useState(false);
    const dash1 = <>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Dashboard a
        </div>
        <div className="text-sm flex">
            <img src="https://static.vecteezy.com/system/resources/previews/030/744/991/original/an-icon-of-employee-feedback-in-modern-style-employee-performance-design-vector.jpg" width={25} />
            Feedbacks a
        </div>
        <div className="text-sm flex">
            <img src="https://www.shutterstock.com/image-vector/fired-people-icon-dismissal-employee-260nw-1266905743.jpg" style={{ color: "gray !important" }} width={25} />
            Leaves a
        </div>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Attendence a
        </div>
        <div className="text-sm flex">
            <img src="https://w1.pngwing.com/pngs/772/140/png-transparent-circle-time-schedule-calendar-date-computer-software-timesheet-timetracking-software-text-black-and-white-thumbnail.png" className="mx-1" width={15} />
            Daily TimeSheet a
        </div>
    </>;
    const dash2 = <>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Dashboard b
        </div>
        <div className="text-sm flex">
            <img src="https://static.vecteezy.com/system/resources/previews/030/744/991/original/an-icon-of-employee-feedback-in-modern-style-employee-performance-design-vector.jpg" width={25} />
            Feedbacks b
        </div>
        <div className="text-sm flex">
            <img src="https://www.shutterstock.com/image-vector/fired-people-icon-dismissal-employee-260nw-1266905743.jpg" style={{ color: "gray !important" }} width={25} />
            Leaves b
        </div>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Attendence b
        </div>
        <div className="text-sm flex">
            <img src="https://w1.pngwing.com/pngs/772/140/png-transparent-circle-time-schedule-calendar-date-computer-software-timesheet-timetracking-software-text-black-and-white-thumbnail.png" className="mx-1" width={15} />
            Daily TimeSheet b
        </div>
    </>;
    const dash3 = <>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Dashboard c
        </div>
        <div className="text-sm flex">
            <img src="https://static.vecteezy.com/system/resources/previews/030/744/991/original/an-icon-of-employee-feedback-in-modern-style-employee-performance-design-vector.jpg" width={25} />
            Feedbacks c
        </div>
        <div className="text-sm flex">
            <img src="https://www.shutterstock.com/image-vector/fired-people-icon-dismissal-employee-260nw-1266905743.jpg" style={{ color: "gray !important" }} width={25} />
            Leaves c
        </div>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Attendence c
        </div>
        <div className="text-sm flex">
            <img src="https://w1.pngwing.com/pngs/772/140/png-transparent-circle-time-schedule-calendar-date-computer-software-timesheet-timetracking-software-text-black-and-white-thumbnail.png" className="mx-1" width={15} />
            Daily TimeSheet c
        </div>
    </>;
    const dash4 = <>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Dashboard d
        </div>
        <div className="text-sm flex">
            <img src="https://static.vecteezy.com/system/resources/previews/030/744/991/original/an-icon-of-employee-feedback-in-modern-style-employee-performance-design-vector.jpg" width={25} />
            Feedbacks d
        </div>
        <div className="text-sm flex">
            <img src="https://www.shutterstock.com/image-vector/fired-people-icon-dismissal-employee-260nw-1266905743.jpg" style={{ color: "gray !important" }} width={25} />
            Leaves d
        </div>
        <div className="text-sm flex">
            <img src="https://media.istockphoto.com/id/1327585822/vector/attendance-presence.jpg?s=612x612&w=0&k=20&c=aDQ60NAjMx3XsqM7hnZpf1RVqxjlmDoT7rT4jvdLsz4=" width={25} />
            Attendence d
        </div>
        <div className="text-sm flex">
            <img src="https://w1.pngwing.com/pngs/772/140/png-transparent-circle-time-schedule-calendar-date-computer-software-timesheet-timetracking-software-text-black-and-white-thumbnail.png" className="mx-1" width={15} />
            Daily TimeSheet d
        </div>
    </>;
    const [opt, setOpt] = useState(dash1);
    return <>
        <div className="w-20 border border-gray-500 flex flex-col place-content-between" style={{ height: height }}>
            <div>
                <div className="grid place-items-center" onClick={() => width ? setWidth(0) : setWidth(250)}>
                    <img src="https://cdn.vectorstock.com/i/500p/38/25/registered-trademark-logo-icon-copyright-mark-vector-36613825.jpg" width={60} />
                </div>
                <hr className="border border-gray-500" />
                <div className="flex flex-col gap-5 pt-4 place-items-center text-gray-500">
                    <img className="cursor-pointer" onClick={() => setOpt(dash1)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k0l_XFSpbb19PJZ4lxrXxZCl0CiFhwApWA&s" width={22} />
                    {/* <i class="fa fa-user-circle-o text-2xl " aria-hidden="true"></i> */}
                    <i class="cursor-pointer fa fa-user-circle-o text-2xl " onClick={() => setOpt(dash2)} aria-hidden="true"></i>
                    <i onClick={() => setOpt(dash3)} class="cursor-pointer fa fa-users text-2xl" aria-hidden="true"></i>
                    <i onClick={() => setOpt(dash4)} class="cursor-pointer fa fa-building-o text-2xl" aria-hidden="true"></i>
                    <i class="cursor-pointer fa fa-pencil-square-o text-2xl" aria-hidden="true"></i>
                </div>
            </div>
            <div className="flex cursor-pointer justify-center ">
                <i class="fa fa-power-off text-red-600 text-2xl" aria-hidden="true"></i>
            </div>
        </div>
        <div className="absolute border top-0 left-20 border-gray-500 overflow-hidden" style={{ height: height, width: `${width}px`, transition: "width ease 0.3s" }}>
            <div className="w-full">
                <div className="grid place-items-center p-2 py-[13.2px]">
                    <div className="flex border border-gray-400 rounded-md w-full place-items-center ps-2 py-1">
                        <i class="fa fa-search me-2 ms-2" aria-hidden="true"></i>
                        <input type="text" placeholder="search" className="w-[80%] focus:outline-none" />
                    </div>
                </div>
                <hr className="border border-gray-500" />
                <div className="grid  place-items-start gap-6 pt-4 ps-3 ">
                    {opt}
                </div>
                <hr className="border border-gray-400 mt-3 w-full p-0 m-0" />
            </div>
        </div>
        <div onClick={() => setShow(!show)} className="w-12 rounded-full p-1 border border-gray-500 h-12 absolute right-8 flex place-items-center gap-2 top-3 cursor-pointer">
            <img className="rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2176" />
            {show ? <i className="fa fa-angle-down ms-1 text-2xl"></i> : <i className="fa fa-angle-up ms-1 text-2xl"></i>}
        </div>
        {show && <>
            <div className="h-auto w-44 border rounded-lg shadow-xl border-gray-500 absolute right-5 top-20">
                <div className="flex place-items-center gap-3 m-2">
                    <div className="p-1">
                        <img className="rounded-full border-2 border-gray-600" width={40} src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2176" />
                    </div>
                    <div>
                        <div className="text-md">John Doe</div>
                        <div className="text-xs">UI/UX Designer</div>
                    </div>
                </div>
                <div className="cursor-pointer hover:bg-gray-400 flex py-1 gap-4 rounded-md mt-3  place-items-center border px-2 text-xs font-semibold text-gray-800 ms-2 w-[90%]">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    Profile
                </div>
                <div className="flex py-1 gap-4 cursor-pointer hover:bg-gray-400  rounded-md mt-3 place-items-center border px-2 text-xs font-semibold text-gray-800 ms-2 w-[90%]">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    Account Setting
                </div>
                <div className="flex mb-4 gap-4 py-1 rounded-md cursor-pointer mt-3 place-items-center border px-2 text-xs font-semibold text-red-600 ms-2 w-[90%]">
                    <i class="fa fa-power-off" aria-hidden="true"></i>
                    Logout
                </div>
            </div>
        </>}
    </>
}

export default Sidebar;