import clsx from "clsx";

const Button = ({ children, href, onClick, className, ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-1 rounded-full bg-blue-600 text-white px-2 py-0.5 font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95 hover:text-[gold]";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(baseStyles, className)}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={clsx(baseStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;