import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const styles = {
        color: match ? 'orange' : '',
        fontWeight: match ? 'bold' : '',
    }

    return (
        <div style={styles} className='border-2 border-slate-800 hover:border-red-400 ml-5 px-3 rounded-lg'>
            <Link
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;