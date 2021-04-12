import React from  'react';
import Layout from '../components/layout';

const CategoryTemplate: React.FC = React.memo(props => {
    return (
        <Layout>
            <code>
                <pre>{JSON.stringify(props, null, 4)}</pre>
            </code>
        </Layout>
    );
});

CategoryTemplate.displayName = 'CategoryTemplate';

export default CategoryTemplate;