import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ pathnames }) {
  const pathname = usePathname();
  return (
    <div className="flex list-none relative">
      {pathnames.map(({ path, name }, i) => (
        <div key={i} className="group transition duration-300 ml-4">
          <Link href={path}>{name}</Link>
          <span
            className={`block max-w-0 ${
              pathname === path && `max-w-full `
            } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
          ></span>
        </div>
      ))}
      {/* <div className="group transition duration-300 ml-4">
        <Link href={Routes.BANCOS}>Bancos</Link>
        <span
          className={`block max-w-0 ${
            pathname === Routes.BANCOS && `max-w-full `
          } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
        ></span>
      </div>
      <div className="group transition duration-300 ml-4">
        <Link href={Routes.CALCULADORA}>Calculadora</Link>
        <span
          className={`block max-w-0 ${
            pathname === Routes.CALCULADORA && `max-w-full `
          } group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600`}
        ></span>
      </div> */}
    </div>
  );
}