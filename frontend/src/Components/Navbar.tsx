
interface INavbar {
    brand: { name: string; to: string };
    links:  Array<{ name: string; to: string }>
}

export const Navbar = (props: INavbar ) => {
    const {brand, links} = props;
    const{to,name} = brand;


    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <li key={link.name}><a
        href={link.to}>{link.name}</a></li>);

    return (<div>
        <a href={to}>{name}</a>
        <NavLinks/>
    </div>)
}

