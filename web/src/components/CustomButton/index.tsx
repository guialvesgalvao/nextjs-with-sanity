import Link from "next/link";

export const CustomButton = ({ value }: { value: { link: string; text: string } }) => {
  const isInternal = value.link.startsWith('/');
  
  const linkProps = {
    href: value.link,
    className: "inline-block bg-[#e3789a] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 no-underline"
  };

  if (isInternal) {
    return <Link {...linkProps}>{value.text}</Link>;
  }
  return <a {...linkProps} target="_blank" rel="noopener noreferrer">{value.text}</a>;
};
