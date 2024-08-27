import { FloatingLogo } from '../../../elements';
import { logos } from '../../../../assets/game/logos';

const FloatingLogoList = ({ logLogo }) => logos.map((logo) => <FloatingLogo name={logo.name} table={logo.table} src={logo.src} logLogo={logLogo} key={logo.name}/>)

export default FloatingLogoList;
