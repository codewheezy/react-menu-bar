type HeaderProps = {
    imgUrl: string,
    imgAlt: string,
    title: string,
    subTitle: string | null , // optional prop
}


const Header = ({ imgUrl, imgAlt, title, subTitle }: HeaderProps) => {
    return (
        <header>
        <img src={imgUrl} alt={imgAlt} />
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      </header>
    )
}

export default Header

