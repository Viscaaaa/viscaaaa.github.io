import {
  FaRobot,
  FaMicrochip,
  FaTrophy,
  FaMedal,
  FaCertificate,
  FaWifi,
  FaBolt,
  FaMobileScreenButton,
} from 'react-icons/fa6'
import { GiMechanicalArm } from 'react-icons/gi'

/** Maps string keys used in data/portfolio.js to icon components */
export const iconMap = {
  robot: FaRobot,
  chip: FaMicrochip,
  trophy: FaTrophy,
  medal: FaMedal,
  cert: FaCertificate,
  wifi: FaWifi,
  bolt: FaBolt,
  mobile: FaMobileScreenButton,
  arm: GiMechanicalArm,
}

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] || FaMicrochip
  return <Cmp {...props} />
}
