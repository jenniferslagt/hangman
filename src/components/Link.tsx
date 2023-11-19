import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from '../shared/types'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage 
}: Props) => {
    // The as keyword is forcing to change the type of the variable
    const linkToPage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
    return (
        <AnchorLink
            className={`${selectedPage === linkToPage} ? 'text-primary-500' : ''
            transition duration-500 hover:text-primary-300
            `}
            href={`#${linkToPage}`}
            onClick={() => setSelectedPage(linkToPage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link