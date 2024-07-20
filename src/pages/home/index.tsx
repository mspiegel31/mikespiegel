import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";

const HomePage = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <HomepageFeatures></HomepageFeatures>
        </Layout>
    );
}

export default HomePage;