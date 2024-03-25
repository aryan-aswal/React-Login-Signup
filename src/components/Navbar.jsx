import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <div>
                <Link to='/'><img src={props.assests.logo} width={160} height={32} loading="lazy"/></Link>
            </div>
            <div className='text-white  flex gap-x-6 '>
                <Link to='/'><p>Home</p></Link>
                <Link to='/'><p>About</p></Link>
                <Link to='/'><p>Contact</p></Link>
            </div>
            <div>
                { !isLoggedIn &&
                    <div className='flex item-center gap-x-4'>
                        <Link to='/login'><button className='bg-[#161d29] text-[#afb2bf] rounded-[8px] px-[12px] py-[8px] border border-[#afb2bf]'>Log in</button></Link>
                        <Link to='/signup'><button className='bg-[#161d29] text-[#afb2bf] rounded-[8px] px-[12px] py-[8px] border border-[#afb2bf]'>Sign up</button></Link>
                    </div>
                }
                { isLoggedIn &&
                    <div className='flex item-center gap-x-4'>
                        <Link to='/login'>
                        <button onClick={()=>{
                            setIsLoggedIn(false)
                            toast.success("Logged Out")}} className='bg-[#161d29] text-[#afb2bf] rounded-[8px] px-[12px] py-[8px] border border-[#afb2bf]'>Log out</button>
                        </Link>
                        <Link to='/dashboard' className='bg-[#161d29] text-[#afb2bf] rounded-[8px] px-[12px] py-[8px] border border-[#afb2bf]'><button>Dashboard</button></Link>
                    </div>
                }
            </div>
        </div>
    )
}
export default Navbar;