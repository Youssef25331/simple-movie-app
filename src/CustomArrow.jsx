import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function CustomArrow({variant , onClick}) {
  return (

    <div onClick={onClick} className={`position-absolute ${variant == "right" ? "end-0 custom-arrow-right" : "start-0 custom-arrow"}  `}>
      <FontAwesomeIcon size="2x" className="position-absolute translate-middle-y top-50 fa-icon" icon={variant == "right" ? faChevronRight : faChevronLeft} />
    </div>
  )
}
