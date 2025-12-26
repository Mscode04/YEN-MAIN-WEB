import yenLogo from "../../assests/yen-logo.png";
import yenWordMark from "../../assests/yen-word-mark.png";

interface YENLogoProps {
  className?: string;
  size?: number;
  variant?: "logo" | "wordmark";
}

const YENLogo = ({ className = "", size = 48, variant = "logo" }: YENLogoProps) => {
  const logoSrc = variant === "wordmark" ? yenWordMark : yenLogo;

  return (
    <img
      src={logoSrc}
      alt="YEN Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
};

export default YENLogo;
