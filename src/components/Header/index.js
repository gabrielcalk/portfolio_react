import './style.css';

export default function RenderHeader(props){
    return(
        <>
            <header>
            <h1>Gabriel Cavalcante Causin</h1>
            <nav>
                <a onClick={() => props.setPage('About')} href="#">About me</a>
                <a onClick={() => props.setPage('Portfolio')} href="#">Work</a>
                <a onClick={() => props.setPage('Contact')} href="#">Contact</a>
                <a onClick={() => props.setPage('Resume')} href='#'>Resume</a>
            </nav>
            </header>
            <section>
                <div className="banner_top">
                    <h2 className="subtitle_banner">Portfolio</h2>
                </div>
            </section>
        </>
    )
}