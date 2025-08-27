

import './Footer.css';
import Icons from '../Icons'

export default function Footer() {
    return (
        <footer id="footer" className='section'>
            <div className="container text-center py-5">
                <Icons/>
                <small className="text-white-50 mt-4">© 2025 Carina Huang. All rights reserved.</small>
            </div>
        </footer>
    )
}