import React from "react";
import Layout from "components/Layout";
import SiteHelmet from "components/SiteHelmet";

const NotFoundPage = () => (
    <>
        {/* <SiteHelmet title={"Error 404"} meta={meta} /> */}
        <Layout>
            <h1>
                NOT FOUND
            </h1>
            <p>
                You just hit a route that doesn&#39;t exist... the sadness.
            </p>
        </Layout>
    </>
    

)

export default NotFoundPage;