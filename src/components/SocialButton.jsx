import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ iconClass }) => {
  return (
    <div className="btn btn-lg btn-outline-dark rounded-circle">
      <FontAwesomeIcon icon={iconClass} />
    </div>
  );
};

export default SocialButton;
