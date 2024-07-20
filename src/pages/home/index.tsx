import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const HomePage = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div>
            <h1>{siteConfig.title}</h1>
            <p>{siteConfig.tagline}</p>
        </div>
    );
}
