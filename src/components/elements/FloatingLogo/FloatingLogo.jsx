import { useState } from 'react';
import styles from './floatingLogoStyles.module.css';

const FloatingLogo = ({ name, table, src, logLogo}) => {
    const [hidden, setHidden] = useState(false);
    const handleClick = () => {
        setHidden(true);
        logLogo(name, table);
    }

    return (
        <div className={`${styles.logo} ${styles[table]}`} onClick={handleClick}>
            {!hidden ?
                <img data-table={table} src={src} alt={name} /> : <></>}
        </div>
            )
};
export default FloatingLogo;
