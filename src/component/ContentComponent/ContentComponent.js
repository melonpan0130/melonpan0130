import './ContentComponent.scss';
import { useParams } from 'react-router-dom';

function ContentComponent() {
  const { postId } = useParams();
  var htmlContent = require('html-loader!../../posts/' +
    postId +
    '.html').default;

  return (
    <div
      className="ContentComponent"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

export default ContentComponent;
